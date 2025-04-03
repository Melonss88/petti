import { useState } from "react";
import { Form, Input, Button, message, Select } from "antd";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
    const [form] = Form.useForm(); 
    const [loading, setLoading] = useState(false);
    const [sendingCode, setSendingCode] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const from = location.state?.from?.pathname || "/carts";

    const sendCode = async () => {
        try {
            const values = await form.validateFields(['phone', 'areaCode']);
            const { phone, areaCode } = values;
            
            if (!phone || !areaCode) {
                message.warning("请输入手机号并选择区号！");
                return;
            }

            setSendingCode(true);
            message.success("验证码已发送！");
            await axios.post("/api/send-code", { phone, areaCode });

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
        setLoading(true);
        try {
            login(values.phone, values.areaCode);
            message.success("登录成功");
            navigate(from, { replace: true }); 

            // const response = await axios.post("/api/login", values);
            // if (response.data.success) {
            //     login(response.data.user); 
            //     message.success("登录成功");
            //     navigate(from, { replace: true }); 
            // } else {
            //     message.error(response.data.message || "登录失败");
            // }
        } catch (error: any) {
            message.error(error.response?.data?.message || "请求出错");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="petti-login to-top">
            <div className="flex justify-between w-default py-[80px]">
                <section className="w-[48%] p-[30px] border border-solid border-[#dadada] rounded-[2px]">
                    <h1 className="text-[30px] mb-[20px] pb-[20px] border-b border-gray-300">
                        登录
                    </h1>
                    <Form name="login" onFinish={onFinish} layout="vertical">
                        <Form.Item name="areaCode" label="地区" rules={[{ required: false, message: "请选择区号!" }]}>
                            <Select
                                className="w-[30%]"
                                placeholder="区号"
                                defaultValue="+86"
                                options={[
                                    { label: "+86 (中国)", value: "+86" },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item name="phone" label="手机号" rules={[
                            { required: true, message: "请输入手机号!" },
                            { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确!" }
                        ]}>
                            <Input placeholder="输入手机号" />
                        </Form.Item>

                        <Form.Item name="code" label="短信验证码" rules={[{ required: true, message: "请输入验证码!" }]}>
                            <div className="flex gap-2 align-bottom">
                                <Input placeholder="输入验证码" />
                                <Button
                                    className="petti-login-btn-code"
                                    disabled={sendingCode}
                                    onClick={() => {
                                        const phone = Form.useWatch("phone");
                                        const areaCode = Form.useWatch("areaCode");
                                        sendCode();
                                    }}
                                >
                                    {sendingCode ? `${countdown}s 后重试` : "发送验证码"}
                                </Button>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>

                <section className="w-[48%] h-[330px] p-[30px] border border-solid border-[#dadada] rounded-[2px]">
                    <h1 className="text-[30px] mb-[20px] pb-[20px] border-b border-gray-300">
                        新会员注册
                    </h1>
                    <h2 className="text-[#1b1b1b] mt-[40px]">成为会员享受更多会员福利</h2>
                    <div>
                        <Link to='/register'>
                            <button className="mt-[40px] w-[80%] h-[52px] rounded-0 text-[18px] btn-common">
                                新会员注册
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;