import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setfileName] = useState("이미지 파일을 업로드 해주세요");
  const [percent, setPercent] = useState(0);

  const handleChangeInput = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setfileName(imageFile.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          setPercent(Math.round(100 * e.loaded) / e.total);
        },
      });
      toast.success("success!!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPercent(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {fileName}
        {percent}
        <input id="image" type="file" onChange={handleChangeInput} />
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default UploadForm;
