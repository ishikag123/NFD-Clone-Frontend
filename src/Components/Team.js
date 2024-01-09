import React from "react";
import { useState } from "react";
import "../Styles/Team.css";
import { FormModal } from "./Modals/FormModal";

export const Team = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <div className="team-class">
        <div className="text-box">
          <h1>We are delighted to introduce the NFD team members to you</h1>
          <p>
            NFD team is always open to new partnerships and new team members, so
            if you have a desire to join and you have a big experience in
            development or crypto - just leave your request in form and we will
            consider it.
          </p>
          <button onClick={() => setOpenForm(true)}>Fill out a form</button>
        </div>
        <FormModal openForm={openForm} setOpenForm={setOpenForm} />
      </div>
    </>
  );
};
