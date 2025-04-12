import { useState } from 'react';
import ProductCard from './section/productCard';
import productInfos, { productType, CATEGORIES } from '../../config/products';
import { Button } from 'antd';

const HmallProducts = () => {
    const [activeCategory, setActiveCategory] = useState<number | null>(1); // 默认选中"所有生活运动系列"

    // 筛选函数
    const filteredProducts = activeCategory === 1 
        ? productInfos() 
        : productInfos().filter(product => product.type.includes(activeCategory as number));

    return (
        <div className="hmall-products to-top w-default">
            {/* 添加筛选栏 */}
            <div className="category-filter my-[30px] text-[14px] flex flex-wrap gap-2">
                {Object.entries(CATEGORIES).map(([key, value]) => {
                    const typeNumber = parseInt(key.split('_')[1]) 
                    return (
                    <Button
                        key={key}
                        className={`px-[12px] py-[4px] rounded-full ${
                        activeCategory === typeNumber
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-black'
                        }`}
                        onClick={() => setActiveCategory(typeNumber)}
                    >
                        {value}
                    </Button>
                    )
                })}
            </div>
            
            {/* 产品列表 */}
            <div className="flex flex-wrap">
                {filteredProducts.map((item: productType, index: number) => (
                    <ProductCard 
                        key={index}
                        id={item.id}
                        imgUrl={item.imgUrl} 
                        type={item.type} 
                        title={item.title} 
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default HmallProducts;