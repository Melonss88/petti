import { Button, Radio, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useStep } from '../hooks/useStepContext';
import useCarts from '../hooks/useCarts';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const { selectedItems } = useStep();
  const [paymentMethod, setPaymentMethod] = useState('wechat'); 
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [remind,setRemind] = useState('')
  const {removeItems} = useCarts()
  const navigate = useNavigate()
  const [isRemoving, setIsRemoving] = useState(false);

  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );

//  倒计时十五分钟,这里应该是系统记录从接口获取提交那一刻的时间，然后获得倒计时的时间戳
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          setRemind('提醒：支付超时，支付结束')
          const itemIdsToRemove = selectedItems.map(item => item.id);
          removeItems(itemIdsToRemove);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedItems, removeItems]);

//   格式化时间
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}分${secs.toString().padStart(2, '0')}秒`;
  };

  const handlePayment = () => {
    // 支付成功后也清除购物车中对应商品
    const itemIdsToRemove = selectedItems.map(item => item.id);
    removeItems(itemIdsToRemove);
    navigate('/')
  };
  const handleRemove = async (ids: string[]) => {
    setIsRemoving(true);
    await removeItems(ids); 
    setIsRemoving(false);
  };

  return (
    <div className="order-success-container">
      <div className="flex mb-8 text-[16px] border-t-[1px] border-b-[1px] border-[#d7d6d6] border-solid border-l-0 border-r-0 px-6 py-[25px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="82" viewBox="0 0 24 24">
            <path fill="#d7d6d6" d="m10.95 14l4.95-4.95l-1.425-1.4l-3.525 3.525L9.525 9.75L8.1 11.175zM5 21V3h14v18l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"/>
        </svg>
        <div className='ml-[10px]'>
            <p className="mb-2">您的订单已提交成功！</p>
            <p className="mb-2">
                应付金额：
                <span className='font-[ftnB] text-red-500'>¥{totalAmount.toFixed(2)}</span>
            </p>
            {timeLeft>0 && <p>
                提醒：请在
                <span className="font-[ftnB] text-red-500">
                    {formatTime(timeLeft)} 
                </span>
                内完成付款，超出时间未付款的订单系统将自动取消
            </p>}
            {timeLeft<=0 && <p>
                {remind}
            </p>} 
        </div>
        
      </div>

      {/* 支付方式选择 */}
      <div className="mb-8">
        <h2 className="text-[16px] font-bold mb-4 border-b pb-2">选择支付方式</h2>
        
        <Radio.Group 
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentMethod}
          className="w-full"
        >
          <Space direction="vertical" className="w-full">
            <Radio value="alipay" className="py-3">
              <div className="flex items-center ml-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                    <g fill="#1e4aaf"><path d="M2.541 0H13.5a2.55 2.55 0 0 1 2.54 2.563v8.297c-.006 0-.531-.046-2.978-.813c-.412-.14-.916-.327-1.479-.536q-.456-.17-.957-.353a13 13 0 0 0 1.325-3.373H8.822V4.649h3.831v-.634h-3.83V2.121H7.26c-.274 0-.274.273-.274.273v1.621H3.11v.634h3.875v1.136h-3.2v.634H9.99c-.227.789-.532 1.53-.894 2.202c-2.013-.67-4.161-1.212-5.51-.878c-.864.214-1.42.597-1.746.998c-1.499 1.84-.424 4.633 2.741 4.633c1.872 0 3.675-1.053 5.072-2.787c2.08 1.008 6.37 2.738 6.387 2.745v.105A2.55 2.55 0 0 1 13.5 16H2.541A2.55 2.55 0 0 1 0 13.437V2.563A2.55 2.55 0 0 1 2.541 0"/><path d="M2.309 9.27c-1.22 1.073-.49 3.034 1.978 3.034c1.434 0 2.868-.925 3.994-2.406c-1.602-.789-2.959-1.353-4.425-1.207c-.397.04-1.14.217-1.547.58Z"/></g>
                </svg>
                <span className="ml-[8px] text-[14px]">支付宝支付</span>
              </div>
            </Radio>
            
            <Radio value="wechat" className="py-3">
              <div className="flex items-center ml-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                    <g fill="#14ab89"><path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018c0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117a.166.166 0 0 1-.162.162a.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074a.5.5 0 0 0-.142.021a5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1a.645.645 0 0 0-.646.647a.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1a.645.645 0 0 0-.644.644a.63.63 0 0 0 .098.356"/><path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6l-.1.373a.5.5 0 0 0-.032.14a.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26a4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2C2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0a.77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0a.77.77 0 0 1 1.54 0"/></g>
                </svg>
                <span className="ml-[8px] text-[14px]">微信支付</span>
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      {/* 支付按钮 */}
      <div className="text-right">
        <Button 
          type="primary" 
          size="large" 
          className="bg-red-500"
          onClick={() => {
            console.log(`使用${paymentMethod === 'wechat' ? '微信' : '支付宝'}支付`);
          }}
        >
          立即支付
        </Button>
      </div>
    </div>
  );
};

export default Step3;