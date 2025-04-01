import product1 from '../img/product1.jpg'
import product2 from '../img/product2.jpg'
import product3 from '../img/product3.jpg'
import product9 from '../img/product9.jpg'
import product15 from '../img/product15.jpg'
import product28 from '../img/product28.jpg'
import product36 from '../img/product36.jpg'
import product45 from '../img/product45.jpg'
import product51 from '../img/product51.jpg'
import product60 from '../img/product60.jpg'
import product71 from '../img/product71.jpg'

export interface productType {
    id: string,
    imgUrl: string,
    type: number[],
    title: string,
    price: string,
}

export const CATEGORIES = {
    1: '所有品类',   
    2: '衬衫',    
    3: '下装',  
    4: '新品',        
    5: '夏日',
    6: 'T恤',
    7: '外套',
    8: '春日'
};

const productInfos = () => {
    return [
        {
            id: '000009',
            imgUrl: product9,
            type:[1,8,7],
            title:'米色开衫毛衣开衫',
            price:'￥499',
            size:['M'],
        },
        {
            id: '000015',
            imgUrl: product15,
            type:[1,8,2,4,5],
            title:'无袖蝴蝶结衬衫',
            price:'￥175',
            size:['M'],
        },
        {
            id: '000028',
            imgUrl: product28,
            type:[1,2,4,8],
            title:'白色立领衬衫',
            price:'￥215',
            size:['S','M'],
        },
        {
            id: '000036',
            imgUrl: product36,
            type:[1,2,4,8],
            title:'白色荷叶边衬衫',
            price:'￥259',
            size:['M'],
        },
        {
            id: '000045',
            imgUrl: product45,
            type:[1,8,3,4],
            title:'白色波点裤',
            price:'￥229',
            size:['S','M','L'],
        },
        {
            id: '000051',
            imgUrl: product51,
            type:[1,5,6,4],
            title:'长款简约T恤',
            price:'￥79',
            size:['M'],
        },
        {
            id: '000060',
            imgUrl: product60,
            type:[1,8,2,4],
            title:'春日薄荷绿衬衫',
            price:'￥219',
            size:['M'],
        },
        {
            id: '000071',
            imgUrl: product71,
            type:[1,3,5],
            title:'夏日牛仔短裤',
            price:'￥179',
            size:['S','M','L'],
        },
    ]
}

export default productInfos