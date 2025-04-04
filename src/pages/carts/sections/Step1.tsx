import { Table, Checkbox, InputNumber, Button } from "antd";
import useCarts from "../hooks/useCarts";
import { useStep } from "../hooks/useStepContext";

const Step1 = () => {
  const { cartItems, updateQuantity, toggleItemCheck, removeItem, toggleAllCheck } = useCarts();
  const { setWhichStep, setSelectedItems } = useStep();

  const allChecked = cartItems.length > 0 && cartItems.every(item => item.checked);
  const someChecked = cartItems.some(item => item.checked);

  const totalPrice = cartItems
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const columns = [
    {
      title: "选择",
      dataIndex: "checked",
      render: (_:any, record) => (
        <Checkbox checked={record.checked} onChange={() => toggleItemCheck(record.id)} />
      ),
    },
    {
      title: "商品信息",
      dataIndex: "name",
      render: (_:any, record:any) => (
        <div className="flex gap-4 items-center">
          <img src={record.imgUrl} alt={record.name} className="w-[40px]" />
          <div>
            <a href={`/detail?id=${record.id}`} className="text-black-500">{record.name}</a>
            <p className="text-gray-500 text-[12px]">支持七天无理由退换</p>
          </div>
        </div>
      ),
    },
    {
      title: "尺码",
      dataIndex: "size",
      render: (_:any, record: any) => <p>尺码：{record.size}</p>,
    },
    {
      title: "价格",
      dataIndex: "price",
      render: (price: number) => <span className="text-red-500">¥{price.toFixed(2)}</span>,
    },
    {
      title: "数量",
      dataIndex: "quantity",
      render: (_:any, record:any) => (
        <InputNumber min={1} value={record.quantity} onChange={(value) => updateQuantity(record.id, value!)} />
      ),
    },
    {
      title: "小计",
      dataIndex: "subtotal",
      render: (_: any, record: { price: number; quantity: number; }) => <span className="text-red-500">¥{(record.price * record.quantity).toFixed(2)}</span>,
    },
    {
      title: "操作",
      dataIndex: "action",
      render: (_: any, record: { id: string; }) => <Button onClick={() => removeItem(record.id)}>删除</Button>,
    },
  ];

  const handleCheckout = () => {
    const checkedItems = cartItems.filter(item => item && item.checked);
    setSelectedItems(checkedItems);
    setWhichStep('2');
  };

  return (
    <section className="step1">
        <div className="flex justify-between items-center mb-4">
          <Checkbox
            indeterminate={someChecked && !allChecked}
            checked={allChecked}
            onChange={(e) => toggleAllCheck(e.target.checked)}
          >
            全选 
          </Checkbox>
        </div>
        <Table dataSource={cartItems} columns={columns} rowKey="id" pagination={false} />
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-[18px]">
            总价:  
            <span className="text-red-500 font-[ftnB]"> ¥{totalPrice.toFixed(2)}</span>
          </span>
          <Button 
            className="bg-red-500 hover:!bg-red-600" 
            type="primary" 
            size="large" 
            disabled={!someChecked} 
            onClick={handleCheckout} 
          >
            立即结算
          </Button>
        </div>
    </section>
  );
};

export default Step1;
