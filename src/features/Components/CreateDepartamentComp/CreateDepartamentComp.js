import React, { useRef, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { getAuth } from "firebase/auth";
import SmallButton from "../SmallButton/SmallButton";
import { useForm } from "react-hook-form";
import notify from "../../utils/Functions/Toastify/notify";
import CancelConfirm from "../CancelConfirm/CancelConfirm";
import { useDispatch, useSelector } from "react-redux";
import { confirmToggle } from "../../../store/features/boolensSlice";
import { AnimatePresence } from "framer-motion";

function CreateDepartamentComp() {
  
  const [loaded, setLoaded] = useState(false);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch()
  const fileInputRef = useRef(null);
  const openConfirm = useSelector((state) => state.boolean.confirm);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const openConfirmModal = () =>  dispatch(confirmToggle())

  const ClearAll=()=>{
    reset()
    setPreview(null)
  }


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const cancelForm=()=>{
    reset()
    setPreview(null)
    setLoaded(false)
    dispatch(confirmToggle())
  }

  const handleAddDepartament = async (data) => {
    const user = getAuth().currentUser;
    if (user) {
      const userId = user.uid;
      try {
        await addDoc(collection(db, "users", userId, "departaments"), {
          name: data.name,
          image: preview,
          description: data.description,
          created: serverTimestamp(),
        });
        notify("Departament added successfully", "success");
        reset();
        setPreview(null);
        setLoaded(false);
      } catch (error) {
        notify("Something went wrong", "error");
        }
    }
  };  

  return (
    <div className="flex flex-col gap-2">
      <AnimatePresence> 
      {openConfirm && <CancelConfirm cancelMethod={openConfirmModal} confirmMethod={cancelForm}/>}
      </AnimatePresence>
      <div className="w-[100%] flex justify-end px-5">
        <SmallButton cancelMethod={openConfirmModal} method={handleSubmit(handleAddDepartament)} text="Save" loading={isSubmitting} />
      </div>
      <div className="w-[98%] p-6 border border-solid border-[#E0E4EA] mt-2 rounded-md text-[#23272C]">
        <div className="flex justify-between items-center">
          <p className="font-normal text-[20px]">Add Information</p>
          <div>
            {preview ? (
              <img
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
                className="w-[40px] opacity-0 transition-opacity duration-700 h-[40px] rounded-full object-cover"
                src={preview}
                alt="preview"
              />
            ) : (
              <p
                onClick={handleButtonClick}
                className="cursor-pointer flex gap-2 justify-center items-center font-normal text-[13px]"
              >
                Upload Image
                <AttachFileIcon
                  sx={{ fontSize: "14px", rotate: "45deg", color: "#969DA6" }}
                />
              </p>
            )}
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(handleAddDepartament)}
            className="mt-5 flex flex-col gap-10"
          >
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
            />
            <div className="flex gap-11">
              <div className="w-[15%] flex justify-start items-center">
                <p className="text-[12px]">DEPARTMENT NAME</p>
              </div>
              <div className="w-full">
                <input
                  className={`w-full placeholder:text-[11px] ${
                    errors.name && "border-solid border-[#1f74ec]"
                  }`}
                  {...register("name", { required: "Name is required" })}
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Department Name"
                />
                {errors.name && (
                  <p className="text-[10px] text-[#1f74ec] mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-11">
              <div className="w-[15%] flex justify-start items-start">
                <p className="text-[12px]">DESCRIPTION</p>
              </div>
              <div className="w-full">
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  type="text"
                  id="description"
                  name="description"
                  className={`w-full placeholder:text-[11px] border border-solid border-[#E0E4EA] rounded-md text-[#23272C] p-3 ${
                    errors.name && "border-solid border-[#1f74ec]"
                  }`}
                  placeholder="Description"
                  required
                />
                {errors.description && (
                  <p className="text-[10px] text-[#1f74ec] mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </form>
          <div onClick={ClearAll} className="text-end text-sm font-light cursor-pointer mt-2 hover:text-[#7d7a7a]">Clear All</div>
        </div>
      </div>
    </div>
  );
}

export default CreateDepartamentComp;
