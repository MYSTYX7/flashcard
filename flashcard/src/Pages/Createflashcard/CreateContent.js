import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import { Formik, Form, Field, FieldArray } from "formik";
import Preview from "./components/Preview";
import TermPreview from "./components/TermPreview";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";


const CreateContent = () => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("");
  const [formValues, setFormValues] = useState(null);
  const fileRef = useRef(null);
  const termRef = useRef(null);

  const initialValues = {
    groupName: "",
    description: "",

    term: [{ termDefination: currentValue, termName: "", termFile: null }],
    groupfile: null,
  };

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);

    submitProps.setSubmitting(false);
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

  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <Form>
            <div className="w-full h-screen bg-[rgba(245,241,236,255)] flex justify-center ">
              <div className="w-4/5  bg-[rgba(245,241,236,255)] mt-5 ">
                <h3 className="font-semibold">Create Flashcard</h3>
                <div className="flex  my-4 ">
                  <h4 className="text-[rgba(135,146,164,255)] ">Create New</h4>
                  <h4 className="ml-7 text-[rgba(135,146,164,255)] ">
                    My Flashcard
                  </h4>
                </div>

                <div className="w-full bg-white p-2 flex place-items-center">
                  <div className="m-5 w-3/5 ">
                    <h5 className="text-[rgba(135,146,164,255)] ">
                      Create Group*
                    </h5>
                    <div className="flex form-control">
                      <Field
                        type="text"
                        name="groupName"
                        className="border-[#bbc2cd] border-2 rounded-l border-r-0"
                        id="groupName"
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
                        <input
                          ref={fileRef}
                          hidden
                          type="file"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "groupfile",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        <div
                          className=" text-[rgba(50,79,234,255)]"
                          onClick={() => {
                            fileRef.current.click();
                          }}
                        >
                          <span className="text-sm">Upload Images</span>
                        </div>
                      </div>
                    </div>
                    <h5 className="text-[rgba(135,146,164,255)] m-2 ">
                      Add description
                    </h5>
                    <Field
                      as="textarea"
                      className="w-4/5 resize-none border-[#bbc2cd] border-2 rounded"
                      name="description"
                      id="description"
                    >
                      This is simple textarea
                    </Field>
                  </div>
                  <div>
                    <div className="w-28 h-28">
                      {formik.values.groupfile && (
                        <Preview file={formik.values.groupfile} />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <FieldArray name="term">
                    {({ push, remove }) => (
                      <div>
                        {formik.values.term.length > 0 &&
                          formik.values.term.map((data, i) => (
                            <div>
                              <div className="w-full bg-white p-2 mt-5 flex place-content-evenly form-control">
                                <div className="my-5 w-2/6 form-control ">
                                  <h5 className="text-[rgba(135,146,164,255)] ">
                                    Enter Term*
                                  </h5>
                                  <div className="flex w-full">
                                    <Field
                                      type="text"
                                      name={`term.${i}.termName]`}
                                      className="border-[#bbc2cd] border-2 rounded-l border-r-0 w-full"
                                      id="termName"
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
                                    <Field
                                      as="textarea"
                                      name={`term.${i}.termDefination`}
                                      className="border-[#bbc2cd] border-2 rounded resize-none w-full overflow-hidden "
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col self-center">
                                  <input
                                    ref={termRef}
                                    hidden
                                    type="file"
                                    onChange={(event) => {
                                      formik.setFieldValue(
                                        `term.${i}.termFile`,
                                        event.currentTarget.files[0]
                                      );
                                    }}
                                  />
                                  {data.termFile ? (
                                    <TermPreview file={data.termFile} /> 
                                  ) : (
                                    <button
                                      className=" text-[rgba(50,79,234,255)] border-2  rounded   "
                                      onClick={() => {
                                        termRef.current.click();
                                      }}
                                    >
                                      Select Image
                                    </button>
                                  )}
                                </div>
                                { (
                                    <div className="bg-white text-[rgba(50,79,234,255)] flex flex-col justify-evenly">
                                    <FaTrashRestoreAlt onClick={() => remove(i)} className="cursor-pointer" />
                                    <BiEdit  size="20px"  className="cursor-pointer"/>
                                      
    
                                    </div>
                                )}

                             
                              </div>
                            </div>
                          ))}
                        <div className="px-10 pb-10 bg-[#fff] " >
                          <button
                            type="button"
                            onClick={() =>
                              push({ termDefination: "", termName: "" })
                            }
                          >
                            +Add more
                          </button>
                        </div>
                      </div>
                    )}
                  </FieldArray>
                </div>

                <div className="flex justify-center mt-10 ">
                  <button
                    type="submit"
                    className="h-8 w-2/12 rounded bg-[rgba(204,19,19,255)] text-[#fff]"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateContent;

// useEffect(() => {
//   textareaRef.current.style.height = "38px";
//   const scrollHeight = textareaRef.current.scrollHeight;
//   textareaRef.current.style.height = scrollHeight + "px";
// }, [currentValue]);

// ref={textareaRef}
// value={currentValue}

// onChange={(e) => {
// setCurrentValue(e.target.value);
// }}
