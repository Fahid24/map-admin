import React from "react";
import ModeratorViewModal from "./ModeratorViewModal";
import { BsFillTrashFill } from "react-icons/bs";
import DeleteModal from "./delete-modal";
const ModeratorRow = ({ member, index, setLoading }) => {
  if (!member) {
    return <p className="text-xl text-center mx-auto my-auto">Loading...</p>;
  }
  return (
    <tr className="moderator-table hover ">
      <td> {index + 1}</td>
      <td>{member?.time?.toDate().toString().slice(0, 15)}</td>
      <td className="">{member?.email}</td>
      <td>{member?.name}</td>
      <td>{member?.package}</td>
      <td>
        <label
          title={`See more information about ${member?.name}`}
          htmlFor={member.id}
          className="btn bg-green-500 btn-sm"
        >
          More Details
        </label>
      </td>
      <td>
        <label
          htmlFor={member?.time}
          className="text-xl cursor-pointer text-red-500"
        >
          <BsFillTrashFill title={`Remove ${member?.name} from membership`} />
        </label>
      </td>
      {member && (
        <ModeratorViewModal
          id={member?.id}
          name={member?.name}
          date={member?.time?.toDate().toString().slice(0, 15)}
          email={member?.email}
          profession={member?.profession}
          blood={member?.blood}
          address={member?.address}
          phoneHome={member?.phoneHome}
          phoneMobile={member?.phoneMobile}
          status={member?.status}
          age={member?.age}
          childrenName={member?.childrenName}
          hobbies={member?.hobbies}
          gender={member?.gender}
          childrenName2={member?.childrenName2}
          hobbies2={member?.hobbies2}
          gender2={member?.gender2}
          childrenName3={member?.childrenName3}
          hobbies3={member?.hobbies3}
          gender3={member?.gender3}
          packageTitle={member?.package}
          spouseName={member?.spouseName}
          spouseAddress={member?.spouseAddress}
          spouseProfession={member?.spouseProfession}
          spouseBlood={member?.spouseBlood}
          spouseEmail={member?.spouseEmail}
          spousePhoneHome={member?.spousePhoneHome}
          spousePhoneMobile={member?.spousePhoneMobile}
          numberIndia={member?.numberIndia}
        />
      )}
      {member && (
        <DeleteModal
          setLoading={setLoading}
          packageTitle={member?.package}
          id={member?.time}
          uid={member?.id}
          name={member?.name}
        />
      )}
    </tr>
  );
};

export default ModeratorRow;
