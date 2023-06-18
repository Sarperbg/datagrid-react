import React from "react";

export default function Modals({ visible, onClose , handleSubmit}) {
    if (!visible) return null;

    const getData = () => {
        console.log("test")
    }
    return (
        <div className="flex flex-col fixed inset-36 mx-auto  w-[488px] h-[406px] bg-white  rounded-[13px] ">

        <div className="m-4 p-4 mt-8 ">

            <p className="text-[14px] font-medium text-[#06163A] mb-1">Sosyal Medya Linki</p>

            <div className="flex flex-col">
                <input
                    type="text"
                    className="border border-gray-700 p-2  mb-5 rounded-[39px]"
                />
                <p className="text-[14px] font-medium text-[#06163A] mb-1">Sosyal Medya Adı</p>
                <input
                    type="text"
                    className="border border-gray-700 p-2  mb-5 rounded-[39px]"
                />
                <p className="text-[14px] font-medium text-[#06163A] mb-1">Açıklama</p>
                <input
                    type="text"
                    className="border border-gray-700 p-2  mb-5 rounded-[39px]"
                />
            </div>
            <div className="flex justify-end gap-[17px] mt-10">
                <button 
                className="px-5 py-2 font-medium bg-[#F5F7FF] text-[#744BFC] rounded-[39px]"
                onClick={onClose}>
                    Vazgeç
                </button>
                <button 
                className="px-5 py-2 bg-[#744BFC] text-white rounded-[34px]"
                onClick={handleSubmit}
                >
                    Kaydet
                </button>
            </div>
        </div>
        </div>
    )
}