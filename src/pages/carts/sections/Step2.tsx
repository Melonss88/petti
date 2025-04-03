import { Button, Table } from 'antd';
import { useStep } from '../hooks/useStepContext';

const Step2 = () => {
  const { setWhichStep, selectedItems } = useStep();

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );

  // 表格列配置
  const columns = [
    {
      title: '商品信息',
      dataIndex: 'name',
      render: (text: string, record: any) => (
        <div className="flex items-center gap-4">
          <img src={record.imgUrl} alt={record.name} className="w-[60px]" />
          <div>
            <div className="font-medium">{text}</div>
            <div className="text-xs text-gray-500">支持七天无理由退换</div>
          </div>
        </div>
      ),
    },
    {
      title: '尺码颜色',
      render: (_:any, record: any) => (
        <div>
          <div>尺码：{record.size}</div>
        </div>
      ),
    },
    {
      title: '价格',
      render: (_:any, record: any) => (
        <div className="text-red-500">¥{record.price.toFixed(2)}</div>
      ),
    },
    {
      title: '数量',
      dataIndex: 'quantity',
    },
    {
      title: '小计',
      render: (_:any, record: any) => (
        <div className="text-red-500">
          ¥{(record.price * record.quantity).toFixed(2)}
        </div>
      ),
    },
  ];

  return (
    <div className="order-confirm-container">
      <h1 className="text-[28px] text-center">订单明细-快递配送</h1>
      
      <section className="mb-8">
        <h2 className="text-[16px] font-semibold mb-4">选择收货地址</h2>
        <div className="border border-dashed border-gray-300 p-4 rounded cursor-pointer">
          <div className="text-[14px] font-medium text-[#378694]">新增收费地址</div>
          <div className=" text-red-500 mt-1">※请填写收货信息</div>
        </div>
      </section>

      <div className="border-t border-gray-200 my-6"></div>

      {/* 商品信息部分 */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">商品信息</h2>
        <Table
          columns={columns}
          dataSource={selectedItems}
          pagination={false}
          rowKey="id"
          className="mb-4"
        />
      </section>

      <div className="border-t border-gray-200 my-6"></div>

      {/* 结算汇总 */}
      <section className="mb-8 text-right">
        <div className="space-y-2 text-[16px]">
            <div>
                <span className='text-red-500 font-[ftnB]'>{selectedItems.length} </span> 
                件商品，总商品金额： ¥{totalPrice.toFixed(2)}
            </div>
            <div>运费： ¥0.00</div>
            <div className="">
                应付总额：<span className='text-red-500 font-[ftnB]'> ¥{totalPrice.toFixed(2)}</span>
            </div>
        </div>
      </section>

      {/* 操作按钮 */}
      <section className="flex justify-end mt-8">
        <Button 
          size="large" 
          onClick={() => setWhichStep('1')}
          className="mr-[12px]"
        >
          返回购物车
        </Button>
        <Button 
          type="primary" 
          size="large" 
          onClick={() => setWhichStep('3')}
          className="bg-red-500 hover:bg-red-600"
        >
          提交订单
        </Button>
      </section>
    </div>
  );
};

export default Step2;