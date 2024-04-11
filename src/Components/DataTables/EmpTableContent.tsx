import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { DataContext, UserData } from "../store/CreateContext";
import { useContext } from "react";

type EmpContentProps = {
  emp: UserData;
};
export default function EmpTableContent({ emp }: EmpContentProps) {
  const dataCtxt = useContext(DataContext)!;

  return (
    <>
      <td>{emp.id}</td>
      <td>
        <div>
          <img
            src={emp.imgUrl}
            alt=""
            style={{ width: "45px", height: "45px" }}
          />
        </div>
      </td>
      <td>{emp.firstName}</td>
      <td>{emp.lastName}</td>
      <td>{emp.email}</td>
      <td>{emp.contactNumber}</td>
      <td>{emp.age}</td>
      <td>{emp.dob}</td>
      <td>{emp.salary}</td>
      <td>{emp.address}</td>
      <td>
        <BsFillTrashFill onClick={() => dataCtxt.handleDeleteEmp(emp.id)} />
      </td>
      <td>
        <BsFillPencilFill onClick={() => dataCtxt.handleEditClick(emp)} />
      </td>
    </>
  );
}
