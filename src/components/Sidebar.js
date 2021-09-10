import "./Sidebar.css";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Button } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div>
      <FlashOnIcon />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Search" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      {/* sidebaroption */}
      {/* sidebaroption */}
      {/* sidebaroption */}
      {/* sidebaroption */}
      <Button variant="outlined" className="sidebarBuzz" fullWidth>
        New Buzz
      </Button>
    </div>
  );
}
