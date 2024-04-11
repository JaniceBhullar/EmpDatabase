import EmpTable from "./Components/DataTables/EmpTable";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DataContextProvider from "./Components/store/CreateContext";

function App() {
  return (
    <DataContextProvider>
      <Header text="Cigno Logistics" />
      <EmpTable />
      <Footer />
    </DataContextProvider>
  );
}
export default App;
