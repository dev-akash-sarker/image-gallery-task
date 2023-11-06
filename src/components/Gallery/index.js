import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";
import "./style.css";
import { myData } from "../data/myimage";
import { ReactSortable } from "react-sortablejs";

export default function Gallery() {
  // state use for load our image link url and id
  const [state, setState] = useState(myData);
  // selectedbox use for how many box are selected
  const [selectedbox, isSelectedbox] = useState("");
  // this state for make the checkbox hidden or display none when drag

  // checkboxes variable is to select query for checkbox
  const checkboxes = document.querySelectorAll(".checkbox");
  // this is an actual arrow function for how many box are selected
  const selectedBoxCount = () => {
    const selectCheckBox = document.querySelectorAll(".checkbox:checked");
    isSelectedbox(selectCheckBox.length);
  };

  // myitem variable used for select an query
  const myitem = document.querySelectorAll(".item");
  // this function used to delete selected boxes as image
  const handleDelete = () => {
    // this is a for loop to check how many box are selected
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        myitem[i].remove();
        setTimeout(() => {
          isSelectedbox(0);
        }, 0.2);
      }
    }
  };

  return (
    <>
      <div className="container">
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
            {/* if selected box have greater then 0 then the handleDelete will trigger */}
            {/* {selectedbox > 0 && (
              <button className="delete" onClick={handleDelete}>
                Delete files
              </button>
            )} */}
            {selectedbox === 1 ? (
              <button className="delete" onClick={handleDelete}>
                Delete file
              </button>
            ) : selectedbox > 1 ? (
              <button className="delete" onClick={handleDelete}>
                Delete files
              </button>
            ) : (
              ""
            )}
          </div>
          <div>
            <hr />
          </div>
          <div className="grid_layout">
            {/* ReactSortable is a sortable component */}
            {/* filter will ignore .non-draggable class when disable dragging */}
            <ReactSortable
              list={state}
              setList={setState}
              animation={100}
              easing={"cubic-bezier(1, 0, 0, 1)"}
              preventOnFilter={true}
              filter={".non-draggable"}
              className="grid"
            >
              {state.map((item, i) => (
                <>
                  <div key={i} className="item myitem" id={i}>
                    <img id={item.id} src={item.link} alt="" />
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
                <button className="mybtnadd">
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
      </div>
    </>
  );
}
