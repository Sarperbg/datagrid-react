import { TextField } from "@material-ui/core";
import React from "react";

export default function Modals({ visible, onClose, data, onChange, handleSubmit }) {

    const { link, name, desc } = data;

    if (!visible) return null;


    return (
        <div className="flex flex-col fixed inset-36 mx-auto  w-[488px] h-[406px] bg-white  rounded-[13px] 
         max-xs:w-[240px] max-xs:left-16 max-sm:w-[240px]">

            <div className="m-4 p-4 mt-8">

                <p className="text-[14px] font-medium text-[#06163A] mb-1">Sosyal Medya Linki</p>

                <div className="flex flex-col">
                    <TextField
                        id="link"
                        value={link}
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Enter social media link"
                        className="border border-gray-700 p-2  mb-5 rounded-[39px]"
                    />
                    <p className="text-[14px] font-medium text-[#06163A] mb-1">Sosyal Medya Adı</p>
                    <TextField
                        id="name"
                        value={name}
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Enter social media name"
                        className="border border-gray-700 p-2  mb-5 rounded-[39px]"
                    />
                    <p className="text-[14px] font-medium text-[#06163A] mb-1">Açıklama</p>
                    <TextField
                        id="desc"
                        value={desc}
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Enter desc"
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
                        onClick={() => handleSubmit()}
                    >
                        Kaydet
                    </button>
                </div>
            </div>
        </div>


    )
}