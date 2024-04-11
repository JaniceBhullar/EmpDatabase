import { ChangeEvent, ReactNode, createContext, useState } from "react";

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

type DataState = {
  empDb: UserData[];
  modalOpen: boolean;
  editID: string;
  editData: UserData;
};

type DataContextValues = DataState & {
  setEmpDb: (value: UserData[]) => void;
  setEditID: (value: string) => void;
  setModalOpen: (value: boolean) => void;
  // setEmpDb: React.Dispatch<React.SetStateAction<UserData[]>>;
  //   onDelete: (id: string) => void;
  handleSubmit: (newEmp: UserData) => void;
  handleEditClick: (emp: UserData) => void;
  handleEmpChange: (e: ChangeEvent) => void;
  handleEditSubmit: () => void;
  handleCancelClick: () => void;
  handleDeleteEmp: (targetId: string) => void;
  closeModal: () => void;
};

export const DataContext = createContext<DataContextValues | null>(null);
// export const DataContext = createContext<DataContextValues | null>(null)

// export function useDataContext() {
//   const dataCtxt = useContext(DataContext);
//   if (dataCtxt === null) {
//     throw new Error("Data context is null !!!");
//   }
//   return dataCtxt;
// }

type DCProviderProps = {
  children: ReactNode;
};

export default function DataContextProvider({ children }: DCProviderProps) {
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

  const data: DataContextValues = {
    empDb,
    setEmpDb,
    editID,
    setEditID,
    editData,
    modalOpen,
    setModalOpen,

    handleSubmit: (newEmp: UserData) => {
      setEmpDb([...empDb, newEmp]);
    },

    handleEditClick: (emp: UserData) => {
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
    },

    handleEmpChange: (e: ChangeEvent): void => {
      e.preventDefault();
      setEditData({
        ...editData,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      });
    },

    handleEditSubmit: () => {
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
    },

    handleCancelClick: () => {
      setEditID("");
    },

    handleDeleteEmp: (targetId: string) => {
      setEmpDb((empData): UserData[] =>
        empData.filter((emp: UserData) => emp.id !== targetId)
      );
    },

    closeModal: () => {
      setModalOpen(false);
    },
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
