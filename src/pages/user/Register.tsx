import { Form, Input, Button, message, Select } from "antd";
import axios from "axios";
import { useState } from "react";
import './register.scss'

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [sendingCode, setSendingCode] = useState(false);
    const [countdown, setCountdown] = useState(60);

    const sendCode = async (phone: string, areaCode: string) => {
        if (!phone || !areaCode) {
            message.warning("请输入手机号并选择区号！");
            return;
        }

        try {
            setSendingCode(true);
            message.success("验证码已发送！");
            await axios.post("/api/send-code", { phone, areaCode });

            // 倒计时逻辑
            let timeLeft = 60;
            const timer = setInterval(() => {
                timeLeft -= 1;
                setCountdown(timeLeft);
                if (timeLeft === 0) {
                    clearInterval(timer);
                    setSendingCode(false);
                }
            }, 1000);
        } catch (error: any) {
            message.error(error.response?.data?.message || "验证码发送失败");
            setSendingCode(false);
        }
    };

    const onFinish = async (values: any) => {
        console.log("提交数据:", values);
        try {
            setLoading(true);
            const response = await axios.post("/api/login", values);
            if (response.data.success) {
                message.success("登录成功");
                window.location.href = "/";
            } else {
                message.error(response.data.message || "登录失败");
            }
        } catch (error: any) {
            message.error(error.response?.data?.message || "请求出错");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="petti-register to-top">
            <div className="mt-[40px] flex justify-center">
                <div className="text-center text-[20px] w-[500px]">
                    <h1 className="mb-[60px]">新用户注册</h1>
                    <Form name="login" onFinish={onFinish} layout="vertical">
                        <Form.Item name="areaCode" label="地区" rules={[{ required: true, message: "请选择区号!" }]}>
                            <div className="">
                                <Select
                                    placeholder="区号"
                                    defaultValue="+86"
                                    options={[
                                        { label: "+86 (中国)", value: "+86" },
                                        // { label: "+1 (美国)", value: "+1" },
                                        // { label: "+44 (英国)", value: "+44" },
                                        // { label: "+81 (日本)", value: "+81" },
                                        // { label: "+49 (德国)", value: "+49" },
                                    ]}
                                />
                            </div>
                        </Form.Item>

                        <Form.Item name="phone" label="手机号" rules={[
                                { required: true, message: "请输入手机号!" },
                                { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确!" }
                            ]}>
                            <Input placeholder="输入手机号" />
                        </Form.Item>

                        <Form.Item name="code" label="短信验证码" rules={[{ required: true, message: "请输入验证码!" }]}>
                            <div className="flex gap-2 align-bottom">
                                <Input className="" placeholder="输入验证码" />
                                <Button
                                    className="petti-login-btn-code"
                                    disabled={sendingCode}
                                    onClick={() => {
                                        const phone = Form.useWatch("phone");
                                        const areaCode = Form.useWatch("areaCode");
                                        sendCode(phone, areaCode);
                                    }}
                                >
                                    {sendingCode ? `${countdown}s 后重试` : "发送验证码"}
                                </Button>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register