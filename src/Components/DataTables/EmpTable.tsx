import { useContext } from "react";
import { DataContext } from "../store/CreateContext";
import EmpTableHead from "./EmpTableHead";

export default function EmpTable() {
  const dataCtxt = useContext(DataContext)!;
  return (
    <>{dataCtxt.empDb.length ? <EmpTableHead /> : <p> No Data Found !!! </p>}</>
  );
}
