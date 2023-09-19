"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import downloadPhoto from "@/utils/downloadPhoto";
import { CloseIcon } from "@/assets/Icons";
import Photo from "../Photo";
import { usePathname, useSearchParams } from "next/navigation";

export const ModalGallery = ({
  isOpen,
  // onClose,
  image,
}: // images,
{
  isOpen: boolean;
  // onClose: () => void;
  image: any;
  // images: any[];
}) => {
  //   let [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const params = useSearchParams();
  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      // onClose={() => onClose()}
      className="fixed inset-0 z-10 flex justify-center backdrop-filter backdrop-blur-sm  overflow-y-auto "
    >
      <button
        // onClick={() => onClose()}
        className=" inset-x-7 top-7 absolute"
      >
        <CloseIcon />
      </button>

      <Dialog.Panel className=" bg-white rounded-xl shadow-lg w-11/12 h-5/6 mt-8">
        {/* {params.values()}
        {pathname} */}
        prueba
        {/* <Photo id={params.get("photoId")} pathname={pathname} /> */}
        {/* <header className="flex justify-between items-center p-2 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black">Image</h2>
          <div className="flex flex-row items-center gap-2">
            <button
              className="bg-gray-400 rounded-md p-2 text-white hover:bg-gray-500 hover:transition-transform hover:scale-105"
              onClick={() => downloadPhoto(image.urls.regular, image.id)}
            >
              Download
            </button>
          </div>
        </header>
        <div className="flex flex-col justify-between items-center ">
          <img src={image.urls.regular} alt="" className="rounded-2xl h-96" />
        </div>
        <div className="p-2 border-t border-gray-200">
          <div className="flex flex-row justify-between">
            <p className="text-sm  text-black">Views: 1273</p>
            <div className="flex flex-row items-center gap-2">
              <p className="text-sm  text-black">Author</p>
              <p className="text-sm  text-black"> {image.user.name}</p>
            </div>
          </div>
          <p className="text-sm  text-black">likes: {image.likes}</p>
        </div> */}
      </Dialog.Panel>
    </Dialog>
  );
};
export default ModalGallery;