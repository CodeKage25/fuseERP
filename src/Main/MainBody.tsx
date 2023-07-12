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
        </div>
    )
}

export default MainBody;