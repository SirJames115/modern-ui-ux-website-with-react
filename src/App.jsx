import { VscSettingsGear } from "react-icons/vsc";
import MainSide from "./components/MainSide";
import Sidebar, { SidebarItems } from "./components/Sidebar";
import { AiFillApple } from "react-icons/ai";

export default function App() {
  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}
        <Sidebar>
          <SidebarItems
            icon={<AiFillApple size={20} />}
            text="AiFillAliwangwang"
          />
          <SidebarItems
            icon={<VscSettingsGear size={20} />}
            text="AiFillAliwangwang"
          />
        </Sidebar>
        <MainSide />
      </div>
    </>
  );
}
