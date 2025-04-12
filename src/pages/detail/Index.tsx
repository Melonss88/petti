import './index.scss'
import { useSearchParams } from "react-router-dom"
import productInfos, {productType} from "../../config/products";
import { Select } from "antd";
import { useState } from "react";
import Favorite from '../components/Favorite';
import AddCart from './section/AddCart'
import useCarts from '../carts/hooks/useCarts';
import { typeFormat } from '@/utils/typeFormat';

const ProductDetail = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id");
    const products = productInfos()
    const [isOpen, setIsOpen] = useState(false)
    const {addToCart} = useCarts()
    const [reminds, setReminds] = useState('')

    const currentItem = products.find(item => item.id == id)
    if (!currentItem) {
        return <div>商品不存在</div>;
    }
    const [selectedSize, setSelectedSize] = useState(null);

    const addToCartFn = () => {
        if(!selectedSize) {
            setReminds('请选择尺码')
            return
        }
        setReminds('')
        addToCart(String(id),selectedSize)
        setIsOpen(true)
    }
    
    return (
        <div className="product-detail to-top">
            <div className="w-default flex">
                <section className="w-1/2">
                    <img className="w-full" src={currentItem.imgUrl} alt="detail.jpg" />
                </section>
                <section className="w-1/2">
                {/* justify-center sticky 下面居中的代码 */}
                    <div className="flex flex-col top-auto min-h-[100vh] py-[100px] px-[150px]">
                        <p className="flex justify-between text-[16px]">
                            <span>{currentItem.title} {currentItem.id}</span> 
                            <Favorite id={currentItem.id}/>
                        </p>
                        <p className="text-[13px] text-[#767676]">
                            {typeFormat(currentItem.type)}
                        </p>
                        <div className="mt-[40px] w-full flex items-center">
                            <span className="text-[15px]">尺寸：</span>
                            <Select
                                placeholder="选择您的尺码"
                                options={
                                    currentItem.size?.map(size => ({
                                        value: size,
                                        label: size,
                                    })) || []
                                }
                                onChange={setSelectedSize}
                            />
                        </div>
                        <p className="text-[24px] font-[ftnB] mt-[35px]">{currentItem.price}</p>

                        <div className='mt-[20px]'>
                            <button 
                                className="btn-common w-full mb-[10px]"
                                onClick={addToCartFn}>
                                加入购物车
                                <AddCart 
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                    productId={currentItem.id}
                                    />
                            </button>
                            <p className='text-red-500 text-xl text-center'>{reminds}</p>
                        </div>

                        <p className='text-[#767676] mt-[40px]'>中国大陆地区尊享快递免费配送</p>
                        <p className='mt-[10px]'>网站中的信息可能存在技术失准、色差、尺码误差或因产品改良，生产批次等因素造成的细节误差，网站展示的产品图片可能与实际外观不一致。如有相关问题，请致电顾客服务中心。</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductDetail