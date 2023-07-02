import {ReactComponent as Recurring} from '../assets/icons/Recurring.svg'
function BottomNav() {
    return (
        <div className="bg-gray-950 h-full row-start-8 col-start-3 col-end-9 flex item-center justify-between pt-[24px] pl-[40px] pr-[40px]">
            <div className="flex item-center">
                <Recurring />
                <div>Make recurring</div>
            </div>
            <div className="flex">
                <button>Save as Draft</button>
                <button>Proceed to Preview</button>
            </div>
        </div>
    )
};

export default BottomNav;