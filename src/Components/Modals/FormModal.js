import React from "react";
import "../../Styles/Modal.css";
export const FormModal = ({ openForm, setOpenForm }) => {
  return (
    <>
      {openForm && (
        <div className="modal-bg">
          <div className="form-modal">
            <h1>Become a Part</h1>
            <input type="text" name="" id="" placeholder="Your name" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Links to social media"
            />
            <input type="text" name="" id="" placeholder="Message" />
            <button>Send</button>
            <button onClick={() => setOpenForm(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
