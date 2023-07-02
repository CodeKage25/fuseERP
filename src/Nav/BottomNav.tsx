import {ReactComponent as Recurring} from '../assets/icons/Recurring.svg'
function BottomNav() {
    return (
        <div className="bg-gray-950 h-full row-start-8 col-start-3 col-end-9 flex items-center justify-between pl-[40px] pr-[40px] pt-[24px]">
            <div className="flex item-center gap-[3px]">
                <Recurring />
                <div className="text-primary-600">Make recurring</div>
            </div>
            <div className="flex flex-start gap-[32px]">
                <button className="border-2 flex justify-center items-center bg-primary-50 border-primary-600 text-primary-600 font-mullish font-bold leading-5 tracking-widest text-sm rounded h-[48px] p-2.5">Save as Draft</button>
                <button className="flex justify-center items-center bg-primary-600 text-primary-50 h-[48px] p-2.5 font-mullish font-bold leading-5 tracking-widest text-sm rounded shadow-3xl">Proceed to Preview</button>
            </div>
        </div>
    )
};

export default BottomNav;