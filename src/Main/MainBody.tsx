import { ReactComponent as Sticky } from '../assets/icons/Sticky.svg';
import { ReactComponent as ArrowRight } from '../assets/icons/ArrowRight.svg';
import { ReactComponent as Upload } from '../assets/icons/Upload.svg';
import { DatePicker} from "antd";
import { useState } from 'react';
import { Dayjs } from 'dayjs';


function MainBody() {
  const [date, setDate] = useState<Date>(new Date());

  let data;
  function onChange(date: Dayjs | null) {
    if (date) {
      setDate(date.toDate());
    }
  }

  return (
    <div className="bg-gray-50 h-full row-start-1 row-end-8 col-start-1 col-end-7 overflow-y-scroll pr-6 pt-4 pl-6">
        
      <div className="flex gap-[10px] items-center pb-6">
        <Sticky />
        <div className="text-primary-600 leading-5 font-mullish font-bold tracking-widest">Invoice</div>
        <ArrowRight className="color-gray-500" />
        <div className="text-gray-500 leading-5 font-mullish font-bold tracking-widest">New Service Invoice</div>
      </div>

      <div className="flex flex-col items-start gap-[8px]">
        <div className="font-mullish text-2xl leading-8 non-italic font-semibold">Invoice Details</div>
        <div className="text-gray-600 font-mullish text-sm non-italic font-normal leading-5 tracking-wide">Enter the invoice details below to start creating your invoice</div>
      </div>
      <div className="border-b pb-6 border-primary-200 border-solid">
      <div className="flex pt-6 gap-[24px]">
        <div className="relative w-[80%]">
          <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Invoice Number</label>
          <input
            className="inline-block w-[100%] h-12 outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
            placeholder="INV-000001"
          />
        </div>
        <div className="relative w-[30%]">
          <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Invoice Date</label>
          <DatePicker className="w-[100%] h-12" onChange={onChange} />
        </div>
      </div>

      <div className="pt-6">
        <input
          className="inline-block h-12 outline-none border-4 border-solid border-gray-200 shadow-none w-[100%] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="Invoice Title"
        />
      </div>

      <div className="pt-6">
        <input
          className="inline-block h-[117px] outline-none border-4 border-solid border-gray-200 shadow-none w-[100%] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="Invoice Title"
        />
      </div>

      <div className="flex pt-6 gap-[24px]">
        <div className="relative w-[80%]">
          <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Invoice Number</label>
          <select
            className="inline-block w-[100%] bg-white h-12 outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
            placeholder="INV-000001"
          >
            <option>Select when due</option>
          </select>
        </div>
        <div className="relative w-[30%]">
          <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Invoice Due</label>
          <DatePicker className="w-[100%] h-12" onChange={onChange} />
        </div>
      </div>

      <div className="relative w-[100%] pt-6">
        <label className="absolute top-[10px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Currency</label>
        <select
          className="inline-block w-[100%] bg-white h-12 outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="INV-000001"
        >
          <option>Select Preferred</option>
        </select>
      </div>
      </div>

      <div className="w-[100%] mt-6 pt-4 pb-4 flex items-center gap-[16px] border-t border-b border-solid border-gray-200">
        <div className="w-[40%]">Item Detail</div>
        <div className="w-[20%]">Quantity</div>
        <div className="w-[20%]">Unit Price</div>
        <div className="w-[20%]">Amount</div>
      </div>
      <div className="w-[100%] mt-6 flex items-center gap-[16px]">
        <div className="w-[40%]"><input
          className="inline-block h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none w-[100%] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="Enter Item Description"
        /></div>
        <div className="w-[20%]"><input
          className="inline-block h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none w-[100%] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="0.00"
        /></div>
        <div className="w-[20%]"><input
          className="inline-block h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none w-[100%] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="0.00"
        /></div>
        <div className="w-[20%]"><input
          className="inline-block h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none w-[100%] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="0.00"
        /></div>
      </div>
      <button className="mt-6 inline-flex justify-center items-center gap-4 text-primary-600 font-mullish text-sm non-italic font-bold leading-5 tracking-widest">
        + Add Another Line Item
      </button>

      <div className="mt-6 flex pt-4 pb-4 justify-end gap-[40px] w-[100%] items-center border-t border-b border-solid border-gray-200">
        <div>Subtotal</div>
        <div>0.00</div>
      </div>

      <div className="inline-flex flex-col gap-[24px] justify-start mt-6">
              <div className="flex flex-col items-start">
                  <div className="text-gray-600 font-mullish text-sm non-italic font-medium leading-5 tracking-widest uppercase">Discount</div>
                  <div className="flex items-start gap-[16px]">
        <div className="relative w-[80%] mt-6">
          <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Label text</label>
          <select
            className="inline-block w-[160px] bg-white h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          >
            <option>.</option>
          </select>
        </div>
        <div className="relative w-[80%] mt-6">
          <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Label text</label>
          <select
            className="inline-block w-[160px] bg-white h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          >
            <option>.</option>
          </select>
        </div>
        <div className="relative w-[80%] mt-6">
          <label className="absolute top-[-13px] bg-white h-[20px] font-medium tracking-wider z-[1] p-2 left-[23px] z-1 after:content-[''] after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[0.8125rem text-gray-600 after:z-[-1] font-mullish text-1xl">Label text</label>
          <select
            className="inline-block w-[160px] bg-white h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          >
            <option>.</option>
          </select>
        </div>
                  </div>
              </div>
              <div className="flex items-start flex-col gap-[8px]">
                <div className="text-gray-600 font-mullish text-sm non-italic font-semibold leading-5 tracking-widest uppercase">tax (Select all that applies)</div>
                <div className="flex items-start justify-center gap-[24px]">
                    <div className="flex items-center gap-[8px]">
                        <input type="checkbox" id="vat" name="vat" value="vat" />
                        <label for="vat" className="text-gray-600 font-mullish text-sm non-italic font-semibold leading-5 tracking-widest font-normal"> Value Added Tax(VAT)</label>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <input type="checkbox" id="wth" name="wth" value="wth" />
                        <label for="wth" className="text-gray-600 font-mullish text-sm non-italic font-semibold leading-5 tracking-widest font-normal"> Withholding Tax (WTH)</label>
                    </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px]">
                <div className="text-gray-600 font-mullish text-sm non-italic font-medium leading-5 tracking-widest uppercase">
                    Witholding tax
                </div>
                <div className="flex items-start gap-[16px]">
                <div className="relative w-[80%] mt-6">
          <select
            className="inline-block w-[160px] bg-white h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          >
            <option>percentage</option>
          </select>
        </div>
        <div className="relative w-[80%] mt-6">
          <input
          placeholder="0.00                   %"
            className="inline-block w-[160px] bg-white h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          />
          
        </div>
        <div className="relative w-[80%] mt-6">
          <input
          placeholder="0.00"
            className="inline-block w-[160px] bg-white h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          />
        </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px]">
                <div className="text-gray-600 font-mullish text-sm non-italic font-medium leading-5 tracking-widest uppercase">
                shipping fee (Optional)
                </div>
                <div className="relative w-[100%] mt-6">
          <input
          placeholder="0.00"
            className="inline-block w-[70%] bg-white h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          />
        </div>
        </div>
      </div>
      <div className="mt-6 flex pt-4 pb-4 justify-end gap-[40px] w-[100%] items-center border-t border-b border-solid border-gray-200">
        <div>Total</div>
        <div>0.00</div>
      </div>

      <div className="mt-6 inline-flex flex-col w-[100%] items-start gap-[24px]">
        <div className="text-gray-600 font-mullish text-sm non-italic font-normal leading-5 tracking-widest uppercase">Additional Items</div>
        <div className="w-[100%]">
        <input
          className="inline-block w-[100%] h-[48px] outline-none border-4 border-solid border-gray-200 shadow-none w-[100%] p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="Invoice Note"
        />
        </div>
        <div className="w-[100%]">
        <input
          className="inline-block h-[117px] w-[100%] outline-none border-4 border-solid border-gray-200 shadow-none p-[2px] z-[-1] text-mullish text-sm text-gray-500 leading-5 non-italic tracking-widest"
          placeholder="Invoice Title"
        />
        </div>
        <div className="flex flex-col items-start gap-[8px] w-[100%]">
            <div className="text-gray-600 font-mullish text-sm non-italic font-medium leading-5 tracking-widest uppercase">
            Attach a supporting Document
            </div>
          <div className="flex flex-col items-center gap-[16px] w-[100%] rounded-lg border border-solid border-gray-300">
            <Upload className=" flex h-[32px] w-[32px] justify-center items-center" />
            <div className="flex flex-col items-center gap-[8px]">
              <div className="text-neutral-400 font-mullish text-sm non-italic font-medium leading-5 tracking-widest">Click to upload or drag and drop a file</div>
              <div className="text-neutral-500 font-mullish text-1xl non-italic font-medium leading-5 tracking-widest text-center">PDF, MS, PNG or JPEG</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
