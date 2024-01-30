import React from "react";
import Image from "next/image";

const Convert2 = () => {
  return (
    <div className=" px-24 pb-14">
      <h1 className="font-bold text-2xl mb-4">Convert from PDF</h1>

      <div className="flex gap-6">
        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <Image src="/assets/w.png" width={90} height={90} alt="word" />
          <h3 className="font-bold text-lg">PDF to Word</h3>
          <p className="text-sm text-gray-400 ">
            Easilt Convert PDF to Word Document
          </p>
        </div>

        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <Image src="/assets/p.png" width={50} height={50} alt="pdf" />
          <h3 className="font-bold text-lg">PDF to PPT</h3>
          <p className="text-sm text-gray-400 ">
            Use the online tool to edit pdf in browser
          </p>
        </div>

        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <Image src="/assets/e.png" width={80} height={80} alt="excel" />
          <h3 className="font-bold text-lg">PDF to Excel</h3>
          <p className="text-sm text-gray-400 ">Convert pdf to Xis</p>
        </div>

        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <Image src="/assets/j.png" width={50} height={50} alt="jpg" />
          <h3 className="font-bold text-lg">PDF to JPG</h3>
          <p className="text-sm text-gray-400 ">
            Best online tool to edit pdf in the browser
          </p>
        </div>

        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <Image src="/assets/p.png" width={50} height={50} alt="pdf" />
          <h3 className="font-bold text-lg">PDF to TXT</h3>
          <p className="text-sm text-gray-400 ">
            Convert your df to txt, and extract files from pdf.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Convert2;
