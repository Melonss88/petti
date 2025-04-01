import banner1 from '../img/banner1-2.jpg'
import banner2 from '../img/banner2-2.jpg'
import banner3 from '../img/banner3.jpg'
import banner4 from '../img/banner4-2.jpg'
import banner5 from '../img/banner5.jpg'

export interface bannerType {
    img: string,
    title: string,
    text: string,
    bottomVal?:string,
    link:string
}

const bannerInfos = [
    {
        imgURL:banner1,
        title:'PETTI 衬衫系列',
        content:'优雅与舒适的完美融合 多样色彩 个性表达',
        link:'/hmall'
    },{
        imgURL:banner2,
        title:'长袖T恤系列',
        content:'简约舒适 自在随心',
        link:'/hmall'
    },{
        imgURL:banner3,
        title:'夏季下装',
        content:'优质清秀 轻盈秀气',
        bottomVal: "80%",
        link:'/hmall'
    },
    {
        imgURL:banner4,
        title:'舒适长裤',
        content:'休闲舒适 自在变化',
        link:'/hmall'
    },
    {
        imgURL:banner5,
        title:'PETTI春日系列',
        content:'特色设计 春日优选',
        link:'/hmall'
    },
]


export default bannerInfos