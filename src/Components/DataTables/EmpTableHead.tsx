import EmpTableContent from "./EmpTableContent";
import "./EmpTableHead.css";
import { ChangeEvent, useState } from "react";
import AddEmpModal from "./AddEmpModal";
import { type UserData } from "../../App";
import EmpTableEditable from "./EmpTableEditable";

export type EmpDataProps = {
  empDb: UserData[];
  setEmpDb: (value: UserData[]) => void;
  onDelete: (id: string) => void;
  handleSubmit: (newEmp: UserData) => void;
};

export type ModalClose = () => void;

export default function EmpTableHead({
  empDb,
  setEmpDb,
  onDelete,
  handleSubmit,
}: EmpDataProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editID, setEditID] = useState("");
  const [editData, setEditData] = useState({
    id: "",
    imgUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
    address: "",
  });

  const handleEditClick = (e: Event, emp: UserData) => {
    e.preventDefault();
    setEditID(emp.id);

    const editFormValues = {
      id: emp.id,
      imgUrl: emp.imgUrl,
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      contactNumber: emp.contactNumber,
      age: emp.age,
      dob: emp.dob,
      salary: emp.salary,
      address: emp.address,
    };
    setEditData(editFormValues);
  };

  const handleEmpChange = (e: ChangeEvent): void => {
    e.preventDefault();
    setEditData({
      ...editData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleEditSubmit = () => {
    const editedContact = {
      id: editID,
      imgUrl: editData.imgUrl,
      firstName: editData.firstName,
      lastName: editData.lastName,
      email: editData.email,
      contactNumber: editData.contactNumber,
      age: editData.age,
      dob: editData.dob,
      salary: editData.salary,
      address: editData.address,
    };

    const newEmp = [...empDb];
    console.log(newEmp);
    const editIndex = empDb.findIndex((emp) => emp.id === editID);

    newEmp[editIndex] = editedContact;
    setEmpDb(newEmp);
    setEditID("");
  };

  const handleCancelClick = () => {
    setEditID("");
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td scope="col">ID</td>
            <td scope="col">Image</td>
            <td scope="col">First Name</td>
            <td scope="col">Last Name</td>
            <td scope="col">Email</td>
            <td scope="col">Contact Number</td>
            <td scope="col">Age</td>
            <td scope="col">DoB</td>
            <td scope="col">Salary</td>
            <td scope="col">Address</td>
            <td scope="col" colSpan={2}>
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {empDb.map((emp) => (
            <tr key={emp.id}>
              <>
                {editID === emp.id ? (
                  <EmpTableEditable
                    emp={emp}
                    editData={editData}
                    handleEmpChange={handleEmpChange}
                    handleEditSubmit={handleEditSubmit}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <EmpTableContent
                    emp={emp}
                    onDelete={onDelete}
                    handleEditClick={handleEditClick}
                  />
                )}
              </>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <AddEmpModal
          handleSubmit={handleSubmit}
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </>
  );
}
