import { DataContext, UserData } from "../store/CreateContext";
import "./AddEmpModal.css";
import { ChangeEvent, useContext, useState } from "react";

export default function AddEmpModal() {
  const dataCtxt = useContext(DataContext)!;

  const [newEmp, setNewEmp] = useState<UserData>({
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

  const validateForm = () => {
    if (newEmp.id && newEmp.firstName) {
      return true;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewEmp({
      ...newEmp,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    dataCtxt.handleSubmit(newEmp);
  };

  return (
    <>
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target instanceof HTMLDivElement) {
            dataCtxt.setModalOpen;
          }
        }}
      >
        <div className="modal">
          <form>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                name="id"
                id="id"
                type="text"
                value={newEmp.id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="imgUrl">Image URL</label>
              <input
                name="imgUrl"
                id="imgUrl"
                type="text"
                value={newEmp.imgUrl}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                value={newEmp.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                value={newEmp.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="text"
                value={newEmp.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Contact Number</label>
              <input
                name="contactNumber"
                id="number"
                type="text"
                value={newEmp.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                name="age"
                id="age"
                type="text"
                value={newEmp.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">DoB</label>
              <input
                name="dob"
                id="dob"
                type="text"
                value={newEmp.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <input
                name="salary"
                id="salary"
                type="text"
                value={newEmp.salary}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                id="address"
                type="text"
                value={newEmp.address}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <button type="submit" className="btn" onClick={handleSubmitForm}>
            Submit
          </button>
          <button className="btn" onClick={() => dataCtxt.closeModal()}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
