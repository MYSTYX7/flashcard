import React from "react";
import {
  MdArrowBack,
  MdShare,
  MdOutlineFileDownload,
  MdPrint,
} from "react-icons/md";
// import Menu from "../../components/Menu";

const ViewFlashcard = () => {
  return (
    <>
      <div className="px-40 flex flex-col gap-y-8 justify-between">
        <div className="flex gap-x-4 flex-row">
          <div>
            <MdArrowBack size={28} />
          </div>
          <div className="flex gap-y-4 flex-col ">
            <div className="group-name font-bold text-2xl">Web 3</div>
            <div className="group-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 flex-row ">
          <div className="basis-1/4 bg-white rounded h-fit px-4">
            <div className="bg-white font-semibold text-gray-400  my-2">
              Flashcards
            </div>
            <hr />
            <div className="flex flex-col gap-y-4 bg-white py-4">
              <div className="bg-white text-red-500 font-semibold">
                Lorem Ipsum
              </div>
              <div className="bg-white">Card 2</div>
              <div className="bg-white">Card 3</div>
              <div className="bg-white">Card 4</div>
              <div className="bg-white">Card 5</div>
              <div className="bg-white">Card 6</div>
            </div>
          </div>
          <div className="flex flex-col content-between basis-1/2">
            <div className="flex flex-row bg-white rounded p-4">
              <div className="view-img bg-white">Image</div>
              <div className="view-flashcard bg-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="carousel">carousel</div>
          </div>

          <div className="basis-1/4 flex gap-y-4 flex-col">
            <div className="share flex flex-row items-center bg-white rounded-lg drop-shadow-md px-6 py-2">
              <MdShare style={{ background: "#ffffff" }} size={20} />
              <div className="bg-white font-medium pl-6">Share</div>
            </div>
            <div className="share flex flex-row items-center bg-white rounded-lg drop-shadow-md px-6 py-2">
              <MdOutlineFileDownload
                style={{ background: "#ffffff" }}
                size={20}
              />
              <div className="bg-white font-medium pl-6">Download</div>
            </div>
            <div className="share flex flex-row items-center bg-white rounded-lg drop-shadow-md px-6 py-2">
              <MdPrint style={{ background: "#ffffff" }} size={20} />
              <div className="bg-white font-medium pl-6">Print</div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewFlashcard;
