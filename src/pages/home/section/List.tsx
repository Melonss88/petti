import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/config/products";

interface ListProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
}

const List = ({isOpen=false,setOpen}:ListProps) => {

    return (
        <section className="menu-box">
            <Drawer
                title="关闭"
                rootClassName="custom-drawer"
                placement="left"
                closable={true}
                onClose={() => setOpen(false)}
                open={isOpen}
            >
                <div className="flex flex-col menu-li">
                    {Object.entries(CATEGORIES).map(([key,value]) => (
                        <Link 
                            className="mb-[10px] cursor-pointer" 
                            to='/hmall' 
                            key={key}
                            onClick={(event) => {
                                event.stopPropagation();
                                setOpen(false);
                            }}
                        >
                            {value}系列
                        </Link>
                    ))}
                </div>
            </Drawer>
        </section>
    )
}

export default List