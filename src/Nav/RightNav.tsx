import {ReactComponent as CheckBlue} from '../assets/icons/CheckBlue.svg'
import {ReactComponent as CheckGreen} from '../assets/icons/CheckGreen.svg'
import {ReactComponent as CheckBlack} from '../assets/icons/CheckBlack.svg'
function RightNav() {
    return (
        <div className="bg-white col-start-7 col-end-9 row-start-1 row-end-8 inline-flex flex-col pt-[24px] pl-[24px] pr-[47px] pb-[24px] gap-[16px] border-t border-l border-gray">
           <div className="text-gray-900 font-semibold font-mullish leading-6 tracking-widest">
            Create New Service Invoice
           </div>
           <div className="flex flex-col gap-[8px]">
            <div className="flex items-center pt-2 gap-[8px]">
                <CheckGreen />
                <div className="font-mullish font-bold text-success-600 leading-5 text-sm tracking-widest">Customer Details</div>
            </div>
            <div className="flex items-center pt-2 gap-[8px]">
            <CheckBlue />
                <div className="font-mullish font-bold text-primary-600 leading-5 text-sm tracking-widest">Invoice Details</div>
            </div>
            <div className="flex items-center pt-2 gap-[8px]">
            <CheckBlack />
                <div className="font-mullish font-bold text-gray-600 non-italic leading-5 text-sm tracking-widest">Preview</div>
            </div>
           </div>
        </div>
    )
};

export default RightNav;