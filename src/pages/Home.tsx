import { shallowEqual } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { ControlPanelState } from "../redux/slices/controlPanelSlice";
import { RootState } from "../redux/store";
import { useTranslation } from "react-i18next";

const Home = () => {
  const cpanelState: ControlPanelState = useAppSelector(
    (state: RootState): ControlPanelState => {
      return state.cpanel as ControlPanelState;
    },
    shallowEqual
  );
  const { t } = useTranslation();
  return <div>Home</div>;
};

export default Home;
