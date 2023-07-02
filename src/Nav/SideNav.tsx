function SideNav() {
    return (
        <div className="flex  flex-col h-full row-span-full col-span-2 flex-wrap justify-around pl-8">
            <div className="text-left">
                <span className="text-[#2563EB]">
                    FUSE
                    <sub>ERP</sub>
                </span>
            </div>
            <div className=" flex flex-col flex-wrap h-3/6 justify-between">
                <div className="flex content-center align-center">
                    <div><img src='src/assets/icons/Dashboard.svg' /></div>
                    <div className="pl-4">Dashboard</div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap ">
                    <div> <img  src='src/assets/icons/Invoice.svg' /></div>
                    <div className="pl-4">Invoice</div>
                    </div>
                    <div className="self-center pr-4">
                        <img src="src/assets/icons/ArrowDown.svg" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap">
                    <div className=""> <img src='src/assets/icons/Resource.svg' /></div>
                <div className="pl-4"> Human Rosource</div>
                    </div>
                    <div className="self-center pr-4">
                    <img src="src/assets/icons/ArrowDown.svg" />
                    </div>
                </div>
                <div className="flex">
                <div> <img src='src/assets/icons/Project.svg' /></div>
                <div className="pl-4">Project Management</div>
                </div>
                <div className="flex">
                <div> <img src='src/assets/icons/Inventory.svg' /></div>
                <div className="pl-4">Inventory</div>
                </div>
                <div className="flex">
                <div> <img src='src/assets/icons/Accounting.svg' /></div>
                <div className="pl-4">Accounting</div>
                </div>
                <div className="flex">
                <div><img src='src/assets/icons/Relation.svg' /></div>
                <div className="pl-4">Customer Relations</div>
                </div>
            </div>
            <div className="flex">
                    <div><img src='src/assets/icons/Settings.svg' />
                    </div>
                <div className="pl-4">Settings</div>
            </div>
        </div>
    )
}

export default SideNav