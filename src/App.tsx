import { useState } from "react";
import EmpTable from "./Components/DataTables/EmpTable";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export type UserData = {
  id: string;
  imgUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: string;
  dob: string;
  salary: string;
  address: string;
};

function App() {
  const [empDb, setEmpDb] = useState<UserData[]>([
    {
      id: "1001",
      imgUrl: "adwedede",
      firstName: "Casimir",
      lastName: "Kovacek",
      email: "Casimir.Kovacek@dummyapis.com",
      contactNumber: "4445097507",
      age: "32",
      dob: "28/05/1991",
      salary: "1000000",
      address: "address1",
    },
    {
      id: "1002",
      imgUrl: "adwedede",
      firstName: "Angelica",
      lastName: "Schuster",
      email: "Angelica.Schuster@dummyapis.com",
      contactNumber: "4605199914",
      age: "69",
      dob: "24/07/1954",
      salary: "2000000",
      address: "address2",
    },
    {
      id: "1003",
      imgUrl: "adwedede",
      firstName: "Aurelio",
      lastName: "Stroman",
      email: "Aurelio.Stroman@dummyapis.com",
      contactNumber: "4160894636",
      age: "68",
      dob: "29/05/1955",
      salary: "300000",
      address: "Address3",
    },

    {
      id: "1004",
      imgUrl: "adwedede",
      firstName: "Enamue",
      lastName: "White",
      email: "Aurelio.Stroman@dummyapis.com",
      contactNumber: "4160894636",
      age: "68",
      dob: "29/05/1955",
      salary: "300000",
      address: "Address4",
    },
  ]);

  const handleSubmit = (newEmp: UserData) => {
    setEmpDb([...empDb, newEmp]);
  };

  function handleDeleteEmp(targetId: string) {
    setEmpDb((data): UserData[] =>
      data.filter((emp: UserData) => emp.id !== targetId)
    );
  }

  return (
    <>
      <Header text="Cigno Logistics" />
      <EmpTable
        empDb={empDb}
        setEmpDb={setEmpDb}
        onDelete={handleDeleteEmp}
        handleSubmit={handleSubmit}
      />
      {/* <EmpTableModal/> */}
      <Footer />
    </>
  );
}

export default App;
