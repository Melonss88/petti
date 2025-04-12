import { Drawer, Button } from "antd";
import productInfos from "@/config/products";
import { Link } from "react-router-dom";

const AddCart = ({
    isOpen, 
    onClose, 
    productId
    }:{
        isOpen:boolean;
        onClose:() => void;
        productId:string
    }) => {
  const product = productInfos().find(item => item.id === productId)

  return (
    <Drawer
      title="已加入购物袋"
      placement="right"
      closable={true}
      onClose={onClose}
      open={isOpen}
      width={400}
      className="p-4"
      footer={
        <div className="flex gap-4">
            <Link to='/carts' className="w-full">
                <Button type="primary" className="w-full">查看购物车</Button>
            </Link>
            <Link to='/hmall' className="w-full">
                <Button className="w-full">继续选购</Button>
            </Link>
        </div>
      }
    >
      {product ? (
        <div className="flex gap-4 items-center">
          <img src={product.imgUrl} alt='' className="w-20 h-20 object-cover" />
          <div>
            <p className="text-gray-500">{product.id}</p>
            <p className="font-bold">{product.title}</p>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">加载中...</p>
      )}
    </Drawer>
  );
};

export default AddCart