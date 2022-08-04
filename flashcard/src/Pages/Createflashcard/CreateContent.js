import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import { FieldArray, useFormik } from "formik";

const CreateContent = () => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("");
 

  const initialValues = {
    groupName: "",
    description: "",
    termName: "",
    termDefination: currentValue,
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.groupName) {
      errors.groupName = "Required";
    }
    if (!values.termName) {
      errors.termName = "Required";
    }
    if (!values.termDefination) {
      errors.termDefination = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const handleExpand = () => {
    console.log(formik)
  };

  useEffect(() => {
    textareaRef.current.style.height = "38px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);
  return (
    <div className="w-full h-screen bg-[rgba(245,241,236,255)] flex justify-center ">
      <div className="w-4/5  bg-[rgba(245,241,236,255)] mt-5 ">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="font-semibold">Create Flashcard</h3>
          <div className="flex  my-4 ">
            <h4 className="text-[rgba(135,146,164,255)] ">Create New</h4>
            <h4 className="ml-7 text-[rgba(135,146,164,255)] ">My Flashcard</h4>
          </div>

          <div className="w-full bg-white p-2">
            <div className="m-5 ">
              <h5 className="text-[rgba(135,146,164,255)] ">Create Group*</h5>
              <div className="flex form-control">
                <input
                  type="text"
                  name="groupName"
                  className="border-[#bbc2cd] border-2 rounded-l border-r-0"
                  id="groupName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.groupName}
                />
                <div className="border-[#bbc2cd] border-2 rounded-r border-l-0">
                  <BsFillCaretDownFill
                    color="rgba(135,146,164,255)"
                    className="m-2 p-0.5 cursor-pointer"
                  />
                </div>
                <div className="border-[#bbc2cd] border-2  rounded ml-5 flex place-content-center w-1/5  cursor-pointer place-items-center ">
                  <MdOutlineUploadFile
                    color="rgba(50,79,234,255)"
                    className=" mr-2 w-5 h-5"
                  />
                  <div className=" text-[rgba(50,79,234,255)]  ">
                    <span
                      className="text-sm
"
                    >
                      Upload Images
                    </span>
                  </div>
                </div>
              </div>
              <h5 className="text-[rgba(135,146,164,255)] m-2 ">
                Add description
              </h5>
              <textarea
                className="w-4/5 resize-none border-[#bbc2cd] border-2 rounded"
                name="description"
                id="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              >
                This is simple textarea
              </textarea>
            </div>
          </div>


       
              <div>
               
                 <div>
                 <div className="w-full bg-white p-2 mt-5 flex place-content-evenly form-control">
                   <div className="my-5 w-2/6 form-control ">
                     <h5 className="text-[rgba(135,146,164,255)] ">Enter Term*</h5>
                     <div className="flex w-full">
                       <input
                         type="text"
                         name="termName"
                         className="border-[#bbc2cd] border-2 rounded-l border-r-0 w-full"
                         id="termName"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.termName}
                       />
     
                       <div className="border-[#bbc2cd] border-2 rounded-r border-l-0">
                         <BsFillCaretDownFill
                           color="rgba(135,146,164,255)"
                           className="m-2 p-0.5 cursor-pointer"
                         />
                       </div>
                     </div>
                   </div>
                   <div className="w-2/6 my-5 ">
                     <h5 className="text-[rgba(135,146,164,255)] ">
                       Enter Defination*
                     </h5>
                     <div className="flex form-control">
                       <textarea
                         name="termDefination"
                         className="border-[#bbc2cd] border-2 rounded resize-none w-full overflow-hidden "
                         ref={textareaRef}
                         value={currentValue}
                         onBlur={formik.handleBlur}
                         onChange={(e) => {
                           formik.handleChange && setCurrentValue(e.target.value);
                         }}
                       />
                     </div>
                   </div>
                   <div className="border-[rgba(50,79,234,255)] border-2 h-8 w-2/12 rounded mt-11  ">
                     <button className="w-full h-full text-[rgba(50,79,234,255)]">
                       Select Image
                     </button>
                   </div>
                 </div>
     
                 <div className="bg-white text-[rgba(50,79,234,255)] pl-14 pb-8">
                   <button >+Add more</button>
                 </div>
               </div>

             
              </div>
      
          <div className="flex justify-center mt-10 ">
            <button
              type="submit"
              className="h-8 w-2/12 rounded bg-[rgba(204,19,19,255)] text-[#fff]"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContent;
