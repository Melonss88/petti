import ProductCard from '../hmall/section/productCard'
import productInfos,{ productType } from '../hmall/config/products'
import { useFavorite } from '@/contexts/FavoriteContext'
import { Link } from 'react-router-dom'

const FavoriteList = () => {
    const {favorites} = useFavorite()

    const FavoriteList = productInfos().filter((item:productType) => {
        return favorites.includes(item.id)
    })

    return (
        <div className="petti-favorite to-top w-default">
            <section className='text-center mt-[20px] mb-[40px]'>
                <p className='text-[24px]'>不要放弃您喜爱的产品</p>
                <p className='text-[14px]'>登录或创建帐户以保存您的选择</p>
                <p className='mt-[20px]'>
                    <Link to='/login'>
                        <button className='btn-common w-[90px]'>登录</button>
                    </Link>
                </p>
            </section>

            <div className="flex flex-wrap">
                {FavoriteList.map((item:productType, index:number) => (
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
    )
}

export default FavoriteList