import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import db from "../firebase-config";

const DeleteModal = ({ id, name, uid, packageTitle, setLoading }) => {
  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "from-data", uid));
      window.location.reload();
    } catch (error) {}
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative " htmlFor="">
          <h4 className="text-xl my-5 font-semibold">
            Are you sure to delete {name}'s {packageTitle} package information?{" "}
          </h4>
          <div>
            <button
              onClick={handleDelete}
              className="  bg-red-600 py-1 px-3 mr-2 rounded-lg text-white  cursor-pointer text-lg  z-10 "
            >
              Delete
            </button>
            <label
              htmlFor={id}
              className="  bg-green-600 py-1 px-3 rounded-lg text-white  cursor-pointer text-lg  z-10 "
            >
              Cancel
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteModal;
