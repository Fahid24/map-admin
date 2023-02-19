import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase-config";
import ModeratorRow from "../components/ModeratorRow";

const AddData = () => {
  const [data, setData] = useState();
  // console.log(data);
  const docRef = collection(db, "from-data");

  useEffect(() => {
    getDocs(docRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });
  }, [docRef]);

  return (
    <>
      <section className="p-5  text-2xl font-semibold text-center text-accent">
        Total Members: {data?.length}
        <p className="mt-1 text-sm text-center font-normal text-gray-500 dark:text-gray-400">
          Browse a list of Flowbite products designed to help you work and play,
          stay organized, get answers, keep in touch, grow your business, and
          more.
        </p>
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
            </tr>
          </thead>
          {/* table data */}
          <tbody className=" flex-col-reverse">
            {Array.isArray(data)
              ? data?.map((member, index) => (
                  <ModeratorRow key={index} index={index} member={member} />
                ))
              : null}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AddData;
