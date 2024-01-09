import React, { useState } from "react";

import { FaArrowLeftLong } from "react-icons/fa6";
import "../Styles/Login.css";
import { LoginModal } from "./Modals/LoginModal";

export const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="login-container">
        <div className="left-box">
          <button>
            <FaArrowLeftLong />
            Come back
          </button>
          <h1>Sign in with Wallet</h1>
          <div className="sign-box">
            <div className="box" onClick={() => setOpenModal(true)}>
              Metamask
            </div>
            <div className="box" onClick={() => setOpenModal(true)}>
              Wallet Connect
            </div>
          </div>
        </div>
        <div className="right-box">
          <h2>All crypto in one place</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            adipisci officiis quas ratione aperiam quae inventore perferendis,
            ea architecto, nam quisquam ducimus, modi voluptate blanditiis nobis
            recusandae natus hic totam.
          </p>
          <h1>NFD</h1>
        </div>
      </div>
      <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
