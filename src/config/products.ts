import product1 from '@/assets/img/product1.jpg'
import product2 from '@/assets/img/product2.jpg'
import product3 from '@/assets/img/product3.jpg'

import product9 from '@/assets/img/product9.jpg'
import product15 from '@/assets/img/product15.jpg'
import product28 from '@/assets/img/product28.jpg'
import product36 from '@/assets/img/product36.jpg'
import product45 from '@/assets/img/product45.jpg'
import product51 from '@/assets/img/product51.jpg'
import product60 from '@/assets/img/product60.jpg'
import product71 from '@/assets/img/product71.jpg'

import product19 from '@/assets/img/product19.jpg'
import product29 from '@/assets/img/product29.jpg'
import product33 from '@/assets/img/product33.jpg'
import product41 from '@/assets/img/product41.jpg'
import product50 from '@/assets/img/product50.jpg'
import product63 from '@/assets/img/product63.jpg'
import product67 from '@/assets/img/product67.jpg'

export interface productType {
    id: string,
    imgUrl: string,
    type: number[],
    title: string,
    price: string,
}

export const CATEGORIES = {
    type_1: '所有品类',   
    type_2: '衬衫',    
    type_3: '下装',  
    type_4: '新品',        
    type_5: '夏日',
    type_6: 'T恤',
    type_7: '外套',
    type_8: '春日'
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
        {
            id: '000019',
            imgUrl: product19,
            type:[1,3,5,8],
            title:'格子长裙',
            price:'￥199',
            size:['S'],
        },
        {
            id: '000029',
            imgUrl: product29,
            type:[1,4,5,6],
            title:'灰色菠萝T恤',
            price:'￥129',
            size:['M'],
        },
        {
            id: '000033',
            imgUrl: product33,
            type:[1,8],
            title:'灰色亮片套头毛衣',
            price:'￥255',
            size:['M'],
        },
        {
            id: '000041',
            imgUrl: product41,
            type:[1,2,4,8],
            title:'春日长袖纯色衬衫',
            price:'￥169',
            size:['M'],
        },
        {
            id: '000050',
            imgUrl: product50,
            type:[1,4,5,6],
            title:'夏季可爱印花短袖',
            price:'￥118',
            size:['M'],
        },
        {
            id: '000063',
            imgUrl: product63,
            type:[1,2,4,8],
            title:'春季新品硬边衬衫',
            price:'￥259',
            size:['M'],
        },
        {
            id: '000067',
            imgUrl: product67,
            type:[1,4,5,6],
            title:'夏季短款纯色T恤',
            price:'￥59',
            size:['M'],
        },
    ]
}

export default productInfos