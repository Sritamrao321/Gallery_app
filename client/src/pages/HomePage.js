import React, { useState, useRef } from "react";
import Header from "../components/Layout/Header";
import "../styles/Homepage.css";
import DragNDrop from "../components/DragnDrop";
import { BsImage } from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "axios";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [uplodedimg, setUplodedimg] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    encodeImageFileAsURL(files);
  }

  function deleteImage(index) {
    // debugger
    let rest = images.filter((_, i) => i !== index);
    console.log("delete ==>", index, rest, index, images);
    setImages(rest);
  }

  const encodeImageFileAsURL = (element) => {
    let fileArr = Object.values(element);
    console.log("fileArr", fileArr);
    setImages(fileArr);
    // fileArr.map((item, index) => {
    //   let file = item;
    //   let reader = new FileReader();
    //   reader.onloadend = function () {
    //     setImages((prevImages) => [
    //       ...prevImages,
    //       {
    //         name: item.name,
    //         url: reader.result,
    //         val: String.fromCharCode(65 + images.length),
    //       },
    //     ]);
    //   };
    //   reader.readAsDataURL(file);
    // });
  };

  const handleSubmit = async () => {
    let token = localStorage.getItem("auth");
    let user = JSON.parse(token);
    console.log(user?.user?._id, "sadsd");
    console.log("images", images);
    try {
      const res = await axios.post("/api/v1/imageupload/uploadFiles", {
        file: images[0],
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  console.log("img ==>", images);

  return (
    <>
      <Header />
      <div className="uploadPage">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "70px",
          }}
        >
          <h2 style={{ paddingTop: "50px" }}>Gallery File Uploader</h2>
          <p>
            Upload Images to the <span>View</span>
          </p>
        </div>
        <div className="dndOuterContainer">
          <div
            className="dndInnerContainer"
            // onDragOver={onDragOver}
            // onDragLeave={onDragLeave}
            // onDrop={onDrop}
          >
            {isDragging ? (
              <span>Drop images here</span>
            ) : (
              <>
                <label>Drag & Drop image here or</label>
                <label
                  className="select"
                  for="file"
                  role="button"
                  //  onClick={selectFiles}
                >
                  Browse{" "}
                </label>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              name="file"
              id="file"
              className="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={onFileSelect}
              multiple
            />
          </div>
        </div>
        <div>
          {console.log("images", images)}

          <DragNDrop defaultList={images} deleteImage={deleteImage} />
          <button className="upload_btn" onClick={handleSubmit}>
            <BsImage /> Upload
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/014/441/080/original/chat-icon-design-in-blue-circle-png.png"
          className="chat-icon"
        />
      </div>
      <div className="uploaded-img">Uploded Images</div>
    </>
  );
};
export default HomePage;
