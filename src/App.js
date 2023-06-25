import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const{activeMenu} = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            // chances of error change the dark to bg-main-bg
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-secondary-dark-bg bg-white w-full min-h-screen ${
              activeMenu ? "md:ml-6" : "flex-2"
            }`}
          >
            <div className="navbar bg-main-bg dark:bg-secondary-dark-bg w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/calender" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}

              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
