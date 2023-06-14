import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <div className="App">
        <Topbar />
        <div className="content-wrapper">
          <Dashboard />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
