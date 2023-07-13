import Table from './components/Table'
function Purchase() {
    return (
        <div className="bg-gray-50">
            <div className="flex justify-between pr-14 pl-14 pt-6">
                <div className="flex flex-col gap-2">
                <div className="font-mullish text-xla font-semibold not-italic leading-9 text-gray-800">Purchase order</div>
                <div className="text-gray-600 font-mullish text-base leading-6 not-italic font-normal tracking-wider">You currently have <b>26</b> purchase orders</div>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-2 pt-2 pb-2 pr-2 pl-2 rounded shadow-3xl bg-primary-600">
                    <div className="text-white">+</div>
                    <div className="font-mullish text-sm leading-5 text-white font-bold tracking-widest">Create New Purchase Order</div>
                    </div>
                </div>
            </div>
            <div className="pt-6 pb-6 pr-10 pl-10">
            <Table placeholder={'Search by vendor name, id, amount...'}/>
            </div>
            
        </div>
    )
};

export default Purchase;