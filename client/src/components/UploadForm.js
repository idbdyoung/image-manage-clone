import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setfileName] = useState("이미지 파일을 업로드 해주세요");

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
      });
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input id="image" type="file" onChange={handleChangeInput} />
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default UploadForm;
