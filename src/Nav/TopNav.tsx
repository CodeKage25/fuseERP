import {ReactComponent as Noise} from '../assets/icons/Noise.svg'
import {ReactComponent as PayStack} from '../assets/icons/paystacklogo.svg'
import {ReactComponent as ArrowDown} from '../assets/icons/ArrowDown.svg'
import {ReactComponent as Notification} from '../assets/icons/Notification.svg'
function TopNav() {
    return (
        <div className="flex flex-wrap justify-between bg-white h-full col-start-3 col-end-9 pr-[40px] pl-[40px] items-center border-b border-gray">
            <div className="not-italic color-gray-700 font-semibold leading-8 text-2xl font-mullish">
                Invoice
            </div>
            <div>
                <div className="flex">
                    <div className="relative">
                        <span>
                        <Notification className="self-align" />
                            <Noise className="absolute bottom-6 left-4" />
                        </span>
                    </div>
                    <div className="">
                    <PayStack />
                    </div>
                    <div>
                            Kolade
                        </div>
                        <div>
                            <ArrowDown />
                        </div>
                </div>
            </div>
        </div>
    )
};

export default TopNav;