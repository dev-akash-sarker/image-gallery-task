import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";
import "./style.css";
// const logo = "./images/logo.svg";
export default function Gallery() {
  const featureImage = "./assets/images/gallery/image-11.jpeg";
  const imageOne = "./assets/images/gallery/image-1.webp";
  const imageTwo = "./assets/images/gallery/image-2.webp";
  const imageThree = "./assets/images/gallery/image-3.webp";
  const imageFive = "./assets/images/gallery/image-5.webp";
  const imageSix = "./assets/images/gallery/image-6.webp";
  const imageSeven = "./assets/images/gallery/image-7.webp";
  const imageEight = "./assets/images/gallery/image-8.webp";
  const imageNine = "./assets/images/gallery/image-9.webp";
  const imageTen = "./assets/images/gallery/image-10.jpeg";
  const [featureimage, setFeatureimage] = useState(false);
  const [isone, setIsone] = useState(false);
  const [istwo, setIstwo] = useState(false);
  const [isthre, setIsthre] = useState(false);
  const [isfor, setIsofor] = useState(false);
  const [isfiv, setIsofiv] = useState(false);
  const [issix, setIsosix] = useState(false);
  const [issev, setIsosev] = useState(false);
  const [iseig, setIsoeig] = useState(false);
  const [isnin, setIsonin] = useState(false);
  const [isten, setIsten] = useState(false);
  const [selectedbox, isSelectedbox] = useState("");

  const checkboxStyle = {
    display: featureimage
      ? "block"
      : isone
      ? "block"
      : istwo
      ? "block"
      : isthre
      ? "block"
      : isfor
      ? "block"
      : isfiv
      ? "block"
      : issix
      ? "block"
      : issev
      ? "block"
      : iseig
      ? "block"
      : isnin
      ? "block"
      : isten
      ? "block"
      : "",
  };

  const checkEffect = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.5)",
    zIndex: "9999",
    top: "0",
    left: "0",
  };

  const nulls = {};

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
        <div className="grid">
          <div className="item">
            <img src={featureImage} alt="" />
            <div
              style={featureimage ? checkEffect : nulls}
              className="effects"
            ></div>
            <input
              style={featureimage ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check1"
              onChange={(e) => setFeatureimage(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageThree} alt="" />
            <div style={isone ? checkEffect : nulls} className="effects"></div>
            <input
              style={isone ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check2"
              onChange={(e) => setIsone(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageTwo} alt="" />
            <div style={istwo ? checkEffect : nulls} className="effects"></div>
            <input
              style={istwo ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check3"
              onChange={(e) => setIstwo(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageSeven} alt="" />
            <div style={isthre ? checkEffect : nulls} className="effects"></div>
            <input
              style={isthre ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check4"
              onChange={(e) => setIsthre(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageFive} alt="" />
            <div style={isfor ? checkEffect : nulls} className="effects"></div>
            <input
              style={isfor ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check5"
              onChange={(e) => setIsofor(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageNine} alt="" />
            <div style={isfiv ? checkEffect : nulls} className="effects"></div>
            <input
              style={isfiv ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check6"
              onChange={(e) => setIsofiv(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageTen} alt="" />
            <div style={issix ? checkEffect : nulls} className="effects"></div>
            <input
              style={issix ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check7"
              onChange={(e) => setIsosix(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageSix} alt="" />
            <div style={issev ? checkEffect : nulls} className="effects"></div>
            <input
              style={issev ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check8"
              onChange={(e) => setIsosev(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageEight} alt="" />
            <div style={iseig ? checkEffect : nulls} className="effects"></div>
            <input
              style={iseig ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check9"
              onChange={(e) => setIsoeig(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageOne} alt="" />
            <div style={isnin ? checkEffect : nulls} className="effects"></div>
            <input
              style={isnin ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check10"
              onChange={(e) => setIsonin(e.target.checked)}
            />
          </div>
          <div className="item">
            <img src={imageThree} alt="" />
            <div style={isten ? checkEffect : nulls} className="effects"></div>
            <input
              style={isten ? checkboxStyle : nulls}
              type="checkbox"
              className="checkbox"
              id="check11"
              onChange={(e) => setIsten(e.target.checked)}
            />
          </div>
          <div className="item">
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
