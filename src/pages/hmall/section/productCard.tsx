import { useNavigate } from 'react-router-dom'
import {productType} from '../config/products'
import { useFavorite } from '@/contexts/FavoriteContext';
import { useMatch } from 'react-router-dom';

const productCard = ({id,imgUrl,type,title,price}:productType) => {
    const navigate = useNavigate();
    const { toggleFavorite } = useFavorite()
    const isFavoriteRoute = useMatch('/favorites')

    const linkTo = (id:string) => {
        navigate(`/detail?id=${id}`)
    }

    return (
        <section 
            onClick={() => linkTo(id)} 
            className="product-card w-[289px] min-h-[500px] cursor-pointer relative"
            >
            <img className='w-full h-[380px]' src={imgUrl} alt="product.jpg" />
            <div className='text-[13px]'>
                <p className='text-[#767676] mt-[5px]'>{type}</p>
                <p className=''>{id}</p>
                <p className='mt-[3px] text-[14px]'>{title}</p>
                <p className='mt-[3px]'>{price}</p>
            </div>
            {isFavoriteRoute && (<span 
                onClick={(event) => {
                    event.stopPropagation()
                    toggleFavorite(id)
                }}
                className='absolute right-0 top-0'
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </span>)}
        </section>
    )
}

export default productCard