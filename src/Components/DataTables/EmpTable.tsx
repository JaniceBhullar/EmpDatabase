import { type UserData } from "../../App";
import EmpTableHead from "./EmpTableHead";

export type EmpTableProps = {
  empDb: UserData[];
  setEmpDb: (value: UserData[]) => void;
  // setEmpDb: React.Dispatch<React.SetStateAction<UserData[]>>;
  onDelete: (id: string) => void;
  handleSubmit: (newEmp: UserData) => void;
};

export default function EmpTable({
  empDb,
  setEmpDb,
  onDelete,
  handleSubmit,
}: EmpTableProps) {
  return (
    <>
      {empDb.length ? (
        <EmpTableHead
          empDb={empDb}
          setEmpDb={setEmpDb}
          onDelete={onDelete}
          handleSubmit={handleSubmit}
        />
      ) : (
        <p> No Data Found !!! </p>
      )}
    </>
  );
}
