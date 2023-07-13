import {ReactComponent as Dashboard} from '../assets/icons/Dashboard.svg'
import {ReactComponent as Invoice} from '../assets/icons/Invoice.svg'
import {ReactComponent as ArrowDown} from '../assets/icons/ArrowDown.svg'
import {ReactComponent as Resource} from '../assets/icons/Resource.svg'
import {ReactComponent as Project} from '../assets/icons/Project.svg'
import {ReactComponent as Relation} from '../assets/icons/Relation.svg'
import {ReactComponent as Settings} from '../assets/icons/Settings.svg'
import {ReactComponent as Accounting} from '../assets/icons/Accounting.svg'
import {ReactComponent as Inventory} from '../assets/icons/Inventory.svg'
import {ReactComponent as Point} from '../assets/icons/Point.svg'
import {ReactComponent as SecondPoint} from '../assets/icons/SecondPoint.svg'
import { Link } from "react-router-dom";
import {useState} from 'react'
function SideNav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex bg-white flex-col h-full row-span-full col-span-2 flex-wrap justify-around pl-8 border-r border-gray">
            <Link to={'/'}>
            <div className="text-left">
                <span className="text-[#2563EB]">
                    FUSE
                    <sub>ERP</sub>
                </span>
            </div>
            </Link>
            <div className=" flex flex-col flex-wrap h-3/6 justify-between">
                <div className="flex content-center align-center">
                    <div><Dashboard /></div>
                    <div className="pl-4">Dashboard</div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap ">
                    <div> <Invoice /></div>
                        <div className="pl-4">Invoice</div>
                    </div>
                    <div className="self-center pr-4">
                        <ArrowDown />
                    </div>
                </div>
                <div className="flex flex-col gap-[4px] w-full">
                    <Link to={`purchase/1`}>
                    <div className="flex items-center justify-around">
                        <div className= "flex items-center w-[150px] justify-between">
                        <Point />
                        <div>Purchase Order</div>
                        </div>
                        <div>26</div>
                    </div>
                    </Link>
                    
                    <div className="flex items-center justify-around">
                        <div className= "flex items-center w-[150px] justify-between">
                            <SecondPoint />
                            <div>Purchase Order</div>
                        </div>
                        <div>93</div>
                    </div>
                    <div className="flex items-center justify-around">
                        <div className= "flex items-center w-[150px] justify-between">
                        <SecondPoint />
                    <div>Purchase Order</div>
                        </div>
                        <div>125</div>
                    </div>
                        </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap">
                    <div className=""> <Resource /></div>
                <div className="pl-4"> Human Rosource</div>
                    </div>
                    <div className="self-center pr-4">
                    <ArrowDown/>
                    </div>
                </div>
                <div className="flex">
                <div> <Project /></div>
                <div className="pl-4">Project Management</div>
                </div>
                <div className="flex">
                <div> <Inventory /></div>
                <div className="pl-4">Inventory</div>
                </div>
                <div className="flex">
                <div> <Accounting/></div>
                <div className="pl-4">Accounting</div>
                </div>
                <div className="flex">
                <div><Relation /></div>
                <div className="pl-4">Customer Relations</div>
                </div>
            </div>
            <div className="flex">
                    <div><Settings />
                    </div>
                <div className="pl-4">Settings</div>
            </div>
        </div>
    )
}

export default SideNav