import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";
import "./style.css";
import { myData } from "../data/myimage";
// const logo = "./images/logo.svg";
export default function Gallery() {
  const [selectedbox, isSelectedbox] = useState("");

  // const checkEffect = {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   background: dragm ? "transparent" : "rgba(255, 255, 255, 0.5)",
  //   zIndex: "9999",
  //   top: "0",
  //   left: "0",
  // };

  // const nulls = {};
  const checkboxes = document.querySelectorAll(".checkbox");
  const selectedBoxCount = () => {
    const selectCheckBox = document.querySelectorAll(".checkbox:checked");
    isSelectedbox(selectCheckBox.length);
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", selectedBoxCount);
  });
  const myitem = document.querySelectorAll(".item");

  const handleDelete = () => {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        myitem[i].remove();
      }
    }
  };

  return (
    <>
      <div className="galleryWrapper">
        <div className="gallery_header">
          <h4 className="flex">
            {selectedbox > 0 ? (
              <>
                <ImCheckboxChecked className="checkboxicon" color="#5d5dfe" />
                {selectedbox + " files selected"}
              </>
            ) : (
              "Gallery"
            )}
          </h4>
          {selectedbox > 0 && (
            <button onClick={handleDelete}>Delete files</button>
          )}
        </div>
        <hr />
        <div className="grid" id="grid">
          {myData.map((item, i) => (
            <>
              <div className="item myitem" draggable="true" key={i}>
                <img src={item.link} alt="" />

                <input type="checkbox" className="checkbox" id="check" />

                <div className="effects"></div>
              </div>
            </>
          ))}

          <div className="item" draggable="false">
            <button>
              <div>
                <div>
                  <BsCardImage fontSize={30} />
                </div>
                <h4>Add Images</h4>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
