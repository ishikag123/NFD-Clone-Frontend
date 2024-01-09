import React from "react";
import { useState } from "react";
import "../../Styles/Modal.css";
export const LoginModal = ({ openModal, setOpenModal }) => {
  // const [close, setClose] = useState(false)
  return (
    <>
      {openModal && (
        <div className="modal-bg">
          <div className="login-modal">
            <h1>Sign-in with Wallet</h1>
            <button>Connect Wallet</button>
            <button onClick={() => setOpenModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
