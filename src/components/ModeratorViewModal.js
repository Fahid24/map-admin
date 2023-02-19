import React from "react";

const ModeratorViewModal = ({
  packageTitle,
  id,
  date,
  name,
  profession,
  blood,
  email,
  address,
  phoneHome,
  phoneMobile,
  status,
  age,
  childrenName,
  hobbies,
  gender,
  childrenName2,
  hobbies2,
  gender2,
  childrenName3,
  hobbies3,
  gender3,
  numberIndia,
  spousePhoneMobile,
  spousePhoneHome,
  spouseEmail,
  spouseBlood,
  spouseProfession,
  spouseAddress,
  spouseName,
}) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-xl font-bold">
            Date: <span className="text-lg font-semibold">{date}</span>
          </h3>
          <h3 className="text-xl font-bold">
            package:{" "}
            <span className="text-lg font-semibold">{packageTitle}</span>
          </h3>
          <div className="grid gap-5">
            <h2 className="text-center text-xl my-6 lg:text-2xl font-bold justify-self-center ">
              Main Applicant Details
            </h2>
            <h3 className="text-xl font-bold">
              Email: <span className="text-lg font-semibold">{email}</span>
            </h3>
            <h3 className="text-xl font-bold">
              Name: <span className="text-lg font-semibold">{name}</span>
            </h3>
            <h3 className="text-xl font-bold">
              Profession:{" "}
              <span className="text-lg font-semibold">{profession}</span>
            </h3>
            <h3 className="text-xl font-bold">
              Blood Group:{" "}
              <span className="text-lg font-semibold">{blood}</span>
            </h3>
            <h3 className="text-xl font-bold">
              Address: <span className="text-lg font-semibold">{address}</span>
            </h3>
            <h3 className="text-xl font-bold">
              Phone Number Home:{" "}
              <span className="text-lg font-semibold">{phoneHome}</span>
            </h3>
            <h3 className="text-xl font-bold">
              Phone Number Personal:{" "}
              <span className="text-lg font-semibold">{phoneMobile}</span>
            </h3>
          </div>
          {packageTitle === "Family" && (
            <div className="grid gap-5 my-8">
              <h2 className="text-center text-xl my-6 lg:text-2xl font-bold justify-self-center ">
                Spouse Details
              </h2>
              <h3 className="text-xl font-bold">
                Email:{" "}
                <span className="text-lg font-semibold">{spouseEmail}</span>
              </h3>
              <h3 className="text-xl font-bold">
                Name:{" "}
                <span className="text-lg font-semibold">{spouseName}</span>
              </h3>
              <h3 className="text-xl font-bold">
                Profession:{" "}
                <span className="text-lg font-semibold">
                  {spouseProfession}
                </span>
              </h3>
              <h3 className="text-xl font-bold">
                Blood Group:{" "}
                <span className="text-lg font-semibold">{spouseBlood}</span>
              </h3>
              <h3 className="text-xl font-bold">
                Address:{" "}
                <span className="text-lg font-semibold">{spouseAddress}</span>
              </h3>
              <h3 className="text-xl font-bold">
                Phone Number Home:{" "}
                <span className="text-lg font-semibold">{spousePhoneHome}</span>
              </h3>
              <h3 className="text-xl font-bold">
                Phone Number Personal:{" "}
                <span className="text-lg font-semibold">
                  {spousePhoneMobile}
                </span>
              </h3>
            </div>
          )}
          <div className="my-8 mt-16 grid gap-5">
            {numberIndia && (
              <h3 className="text-xl font-bold">
                Emergency Contact Number in India :{" "}
                <span className="text-lg font-semibold">{numberIndia}</span>
              </h3>
            )}
            <h3 className="text-xl font-bold">
              18 years: <span className="text-lg font-semibold">{age}</span>
            </h3>
            <h3 className="text-xl font-bold">
              Residencial status:{" "}
              <span className="text-lg font-semibold">{status}</span>
            </h3>
          </div>
          <div className="grid gap-5 mt-16">
            {childrenName || childrenName2 || childrenName3 ? (
              <h2 className="text-center text-xl mt-6 lg:text-2xl font-bold justify-self-center ">
                Details of Minor Children
              </h2>
            ) : (
              ""
            )}
            <div className="mt-4 grid gap-4">
              {childrenName && (
                <h2 className="text-center text-sm my-6 lg:text-2xl font-bold justify-self-center ">
                  First Child Information{" "}
                </h2>
              )}
              {childrenName && (
                <h3 className="text-xl font-bold">
                  Children Name:{" "}
                  <span className="text-lg font-semibold">{childrenName}</span>
                </h3>
              )}
              {hobbies && (
                <h3 className="text-xl font-bold">
                  Children Interests/ Hobbies:{" "}
                  <span className="text-lg font-semibold">{hobbies}</span>
                </h3>
              )}
              {gender && (
                <h3 className="text-xl font-bold">
                  Children Gender:{" "}
                  <span className="text-lg font-semibold">{gender}</span>
                </h3>
              )}
            </div>
            <div className="mt-4 grid gap-4">
              {childrenName2 && (
                <h2 className="text-center text-sm my-6 lg:text-2xl font-bold justify-self-center ">
                  Second Child Information{" "}
                </h2>
              )}
              {childrenName2 && (
                <h3 className="text-xl font-bold">
                  Children Name:{" "}
                  <span className="text-lg font-semibold">{childrenName2}</span>
                </h3>
              )}
              {hobbies2 && (
                <h3 className="text-xl font-bold">
                  Children Interests/ Hobbies:{" "}
                  <span className="text-lg font-semibold">{hobbies2}</span>
                </h3>
              )}
              {gender2 && (
                <h3 className="text-xl font-bold">
                  Children Gender:{" "}
                  <span className="text-lg font-semibold">{gender2}</span>
                </h3>
              )}
            </div>
            <div className="mt-4 grid gap-4">
              {childrenName3 && (
                <h2 className="text-center text-sm my-6 lg:text-2xl font-bold justify-self-center ">
                  Third Child Information{" "}
                </h2>
              )}
              {childrenName3 && (
                <h3 className="text-xl font-bold">
                  Children Name:{" "}
                  <span className="text-lg font-semibold">{childrenName3}</span>
                </h3>
              )}
              {hobbies3 && (
                <h3 className="text-xl font-bold">
                  Children Interests/ Hobbies:{" "}
                  <span className="text-lg font-semibold">{hobbies3}</span>
                </h3>
              )}
              {gender3 && (
                <h3 className="text-xl font-bold">
                  Children Gender:{" "}
                  <span className="text-lg font-semibold">{gender3}</span>
                </h3>
              )}
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default ModeratorViewModal;
