import {ReactComponent as Sticky} from '../assets/icons/Sticky.svg'
import {ReactComponent as ArrowRight} from '../assets/icons/ArrowRight.svg'
function MainBody() {
    return (
        <div className="bg-gray-50 h-full row-start-1 row-end-8 col-start-1 col-end-7 overflow-y-scroll pr-6 pt-4 pl-6">
            <div className="flex gap-[10px] items-center">
                <Sticky />
                <div className="text-primary-600 leading-5 font-mullish font-bold tracking-widest">Invoice</div>
                <ArrowRight className="color-gray-500" />
                <div className="text-gray-500 leading-5 font-mullish font-bold tracking-widest">New Service Invoice</div>
            </div>

            <div>
                <div>Invoice Details</div>
                <div>Enter the invoice details below to start creating your invoice</div>
            </div>

            <div className="flex pt-6 w-[100%]">
                <div className="relative">
                    <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Invoice Number</label>
                    <input
                    className="inline-block h-12 outline-none border-4 border-solid border-gray-200 shadow-none w-[450px] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
                    placeholder="INV-000001"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainBody;