import { BrowserRouter, Route, Routes } from "react-router-dom";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "./redux/hooks";
import { ControlPanelState } from "./redux/slices/controlPanelSlice";
import { RootState } from "./redux/store";
import Home from "./pages/Home";

function App() {
  const cpanelState: ControlPanelState = useAppSelector(
    (state: RootState): ControlPanelState => {
      return state.cpanel as ControlPanelState;
    },
    shallowEqual
  );
  return (
    <div
      className={
        cpanelState.mode === "Dark"
          ? cpanelState.rtl
            ? "dark rtl"
            : "dark"
          : cpanelState.rtl
          ? "rtl"
          : ""
      }
    >
      <BrowserRouter>
        <div className="relative dark:bg-dark-primary">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
