import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileName, setfileName] = useState("이미지 파일을 업로드 해주세요");

  const handleChangeInput = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setfileName(imageFile.name);
  };

  return (
    <form>
      <label htmlFor="image">{fileName}</label>
      <input id="image" type="file" onChange={handleChangeInput} />
      <button type="submit">제출</button>
    </form>
  );
};

export default UploadForm;
