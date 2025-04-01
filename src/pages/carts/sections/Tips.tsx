import classNames from 'classnames';

const Tips = ({step}:{step:string}) => {
    return (
        <section className="petti-tips">
            <ol className="flex justify-center items-center text-[18px] text-[#999] mb-[20px]">
                <li className={classNames({'text-[#000] font-bold':step=='1'})}> ① 查看购物车 </li>
                <li className="flex items-center mx-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                        <path fill="currentColor" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </li>
                <li className={classNames({'text-[#000] font-bold':step=='2'})}> ② 订单确认 </li>
                <li className="flex items-center mx-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                        <path fill="currentColor" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </li>
                <li className={classNames({'text-[#000] font-bold':step=='3'})}> ③ 订单支付 </li>
            </ol>
        </section>
    )
}

export default Tips