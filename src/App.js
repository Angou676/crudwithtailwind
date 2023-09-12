import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Employee from "./components/Employee/Employee";
import Dropdown from "./components/Dropdown";
import EmplyeeDropDown from "./components/EmplyeeDropDown";
import Header from "./components/Header";
import InfiniteScrollCalendar from "./components/InfiniteScrollCalendar";

function App() {
  return (
    <div style={{ margin: '30px' }} >
      <Router>
        <Header />
        <Routes>
          <Route path='/register' exact element={<Register />} />
          <Route path='/employee' exact element={<Employee />} />
          <Route path='/dropdownsearch' exact element={<Dropdown />} />
          <Route path='/dropdownemployeesearch' exact element={<EmplyeeDropDown />} />
          <Route path='/infinitescroll' exact element={<InfiniteScrollCalendar />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
