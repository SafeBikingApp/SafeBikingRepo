import { Image, CloudinaryContext } from "cloudinary-react";
import { useState } from "react";
import axios from "axios";

const UploadImage = (props) => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    console.log("submit");
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log("upload");
    try {
      const response = await fetch(
        "/api/issues/upload/615cc1181315b134e3566b89",
        {
          method: "POST",
          body: JSON.stringify({ data: base64EncodedImage }),
          headers: { "Content-Type": "application/json" },
        }
      );
      setFileInputState("");
      setPreviewSource("");
      setSuccessMsg("Image uploaded successfully");
      console.log(response);
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };
  return (
    <div>
      <h1 className="title">Upload an Image</h1>
      {/* <Alert msg={errMsg} type="danger" /> */}
      {/* <Alert msg={successMsg} type="success" /> */}
      <form onSubmit={handleSubmitFile} className="form">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
};

export default UploadImage;
