import EmpTableContent from "./EmpTableContent";
import "./EmpTableHead.css";
import AddEmpModal from "./AddEmpModal";
import EmpTableEditable from "./EmpTableEditable";
import { useContext } from "react";
import { DataContext } from "../store/CreateContext";

export default function EmpTableHead() {
  const dataCtxt = useContext(DataContext)!;

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
          {dataCtxt.empDb.map((emp) => (
            <tr key={emp.id}>
              <>
                {dataCtxt.editID === emp.id ? (
                  <EmpTableEditable
                    emp={emp}
                    editData={dataCtxt.editData}
                    handleEmpChange={dataCtxt.handleEmpChange}
                    handleEditSubmit={dataCtxt.handleEditSubmit}
                    handleCancelClick={dataCtxt.handleCancelClick}
                  />
                ) : (
                  <EmpTableContent emp={emp} />
                )}
              </>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => dataCtxt.setModalOpen(true)} className="btn">
        Add
      </button>
      {dataCtxt.modalOpen && <AddEmpModal />}
    </>
  );
}
