import React, { useRef, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { getAuth } from "firebase/auth";
import SmallButton from "../SmallButton/SmallButton";

function CreateDepartamentComp() {
  const [departamentName, setDepartamentName] = useState("");
  const [departamentDescription, setDepartamentDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setSelectedFile(file);
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

  const handleAddDepartament = async () => {
    const user = getAuth().currentUser;
    if (user) {
      const userId = user.uid;
      try {
        await addDoc(collection(db, "users", userId, "departaments"), {
          name: departamentName,
          image: preview,
          description: departamentDescription,
          created: serverTimestamp(),
        });
        setDepartamentName("");
        setDepartamentDescription("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-[100%] flex justify-end px-5">
        <SmallButton method={handleAddDepartament} text="Save" />
      </div>
      <div className="w-[98%] p-6 border border-solid border-[#E0E4EA] mt-2 rounded-md text-[#23272C]">
        <div className="flex justify-between items-center">
          <p className="font-normal text-[20px]">Add Information</p>
          <div>
            {preview ? 
          <img onLoad={() => setLoaded(true)} style={{opacity: loaded ? 1 : 0}} className="w-[40px] opacity-0 transition-opacity duration-700 h-[40px] rounded-full object-cover" src={preview} alt="preview"/>
            :
            <p
              onClick={handleButtonClick}
              className="cursor-pointer flex gap-2 justify-center items-center font-normal text-[13px]"
            >
              Upload Image
              <AttachFileIcon
                sx={{ fontSize: "14px", rotate: "45deg", color: "#969DA6" }}
              />
            </p>
          }
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <div>
          <form className="mt-5 flex flex-col gap-10">
            <div className="flex gap-11">
              <div className="w-[15%] flex justify-start items-center">
                <p className="text-[12px]">DEPARTMENT NAME</p>
              </div>
              <input
                className="w-[85%] placeholder:text-[11px]"
                required
                value={departamentName}
                onChange={(e) => setDepartamentName(e.target.value)}
                type="text"
                placeholder="Department Name"
              />
            </div>
            <div className="flex gap-11">
              <div className="w-[15%] flex justify-start items-start">
                <p className="text-[12px]">DESCRIPTION</p>
              </div>
              <textarea
                className="w-[85%] placeholder:text-[11px] border border-solid border-[#E0E4EA] rounded-md text-[#23272C] p-3"
                placeholder="Description"
                value={departamentDescription}
                onChange={(e) => setDepartamentDescription(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateDepartamentComp;
