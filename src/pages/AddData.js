import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase-config";
import ModeratorRow from "../components/ModeratorRow";

const AddData = () => {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(false);

  const docRef = collection(db, "from-data");

  useEffect(() => {
    getDocs(docRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });
  }, []);
  if (!data || Loading) {
    return (
      <p className="text-2xl  text-center font-semibold mx-auto my-[50vh]">
        Loading...
      </p>
    );
  }
  return (
    <>
      <section className="   font-semibold text-center text-accent">
        <h2 className="p-5 text-3xl text-orange-500">
          Marathi Association Perth
        </h2>
        <h2 className=" text-2xl p-5 text-accent">
          {" "}
          Total Members: {data?.length}
        </h2>{" "}
      </section>
      <section className="lg:max-w-6xl mx-auto overflow-x-auto">
        <table className="table rounded-0 w-full">
          {/* table title */}
          <thead className="static top-20 w-full rounded-0">
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Email</th>
              <th>Name</th>
              <th>Package</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* table data */}
          <tbody className=" flex-col-reverse">
            {Array.isArray(data)
              ? data?.map((member, index) => (
                  <ModeratorRow
                    setLoading={setLoading}
                    key={index}
                    index={index}
                    member={member}
                  />
                ))
              : null}
          </tbody>
        </table>
        {/* <DeleteModal /> */}
      </section>
    </>
  );
};

export default AddData;
