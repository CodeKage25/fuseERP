import {ReactComponent as Noise} from '../assets/icons/Noise.svg'
import {ReactComponent as PayStack} from '../assets/icons/paystacklogo.svg'
import {ReactComponent as ArrowDown} from '../assets/icons/ArrowDown.svg'
import {ReactComponent as Notification} from '../assets/icons/Notification.svg'
function TopNav() {
    return (
        <div className="flex flex-wrap justify-between bg-white h-full col-start-3 col-end-9 pr-[40px] pl-[40px] items-center border-b border-gray">
            <div className="not-italic color-gray-700 text-gray-700 font-semibold leading-8 text-2xl font-mullish items-center">
                Invoice
            </div>
            <div>
                <div className="flex items-center gap-[16px]">
                    <div className="relative">
                        <span>
                        <Notification className="self-align" />
                            <Noise className="absolute bottom-5 left-3" />
                        </span>
                    </div>
                    <div className="">
                    <PayStack />
                    </div>
                    <div className="text-gray-500 font-mullish">
                            Kolade
                        </div>
                        <div>
                            <ArrowDown className="text-gray-500" />
                        </div>
                </div>
            </div>
        </div>
    )
};

export default TopNav;