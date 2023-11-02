import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";
import "./style.css";
import { myData } from "../data/myimage";
import { ReactSortable } from "react-sortablejs";

export default function Gallery() {
  const [state, setState] = useState(myData);
  const [selectedbox, isSelectedbox] = useState("");

  const checkboxes = document.querySelectorAll(".checkbox");
  const selectedBoxCount = () => {
    const selectCheckBox = document.querySelectorAll(".checkbox:checked");
    isSelectedbox(selectCheckBox.length);
  };

  const myitem = document.querySelectorAll(".item");

  const handleDelete = () => {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        myitem[i].remove();
      }
    }
  };

  const me = document.getElementsByClassName(".item");
  console.log(me.dragging);

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
        <div>
          <hr />
        </div>
        <div>
          <ReactSortable
            list={state}
            setList={setState}
            animation={250}
            easing={"cubic-bezier(1, 0, 0, 1)"}
            clone={false}
            // preventOnFilter={true}
            filter={".non-draggable"}
            className="sortablecustom grid"
          >
            {state.map((item) => (
              <>
                <div className="item myitem" id={item.id}>
                  <img src={item.link} alt="" />
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="check"
                    onChange={selectedBoxCount}
                  />

                  <div className="effects"></div>
                </div>
              </>
            ))}

            <div className="item  non-draggable" draggable="false">
              <button>
                <div>
                  <div>
                    <BsCardImage fontSize={30} />
                  </div>
                  <h4>Add Images</h4>
                </div>
              </button>
            </div>
          </ReactSortable>
        </div>
      </div>
    </>
  );
}
