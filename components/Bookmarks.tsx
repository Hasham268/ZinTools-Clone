import React from 'react'

const Bookmarks = () => {
  return (
    <div className=" px-24 py-14">
      <h1 className="font-bold text-2xl mb-4">Your Bookmarks</h1>

      <div className="flex gap-6">
        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <div className="w-12 h-12 bg-orange-500 rounded-lg"></div>
          <h3 className="font-bold text-lg">Edit Pdf</h3>
          <p className="text-sm text-gray-400 ">
            Best online tool to edit pdf in the browser
          </p>
        </div>

        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <div className="w-12 h-12 bg-orange-500 rounded-lg"></div>
          <h3 className="font-bold text-lg">Crop Pdf</h3>
          <p className="text-sm text-gray-400 ">
            Use the online tool to edit pdf in browser
          </p>
        </div>

        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <div className="w-12 h-12 bg-orange-500 rounded-lg"></div>
          <h3 className="font-bold text-lg">Replace Pdf</h3>
          <p className="text-sm text-gray-400 ">
            The best online tool to edit pdf in the browser
          </p>
        </div>

        <div className="flex flex-col p-4 w-48 gap-4 border-gray-200 border-[1px] rounded-md">
          <div className="w-12 h-12 bg-orange-500 rounded-lg"></div>
          <h3 className="font-bold text-lg">Edit Pdf</h3>
          <p className="text-sm text-gray-400 ">
            Best online tool to edit pdf in the browser
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bookmarks