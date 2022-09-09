import Home from "../components/icons/Home";
import Report from "../components/icons/Report";
import Search from "../components/icons/Search";
import Sensor from "../components/icons/Sensor";
import Settings from "../components/icons/Settings";
import Users from "../components/icons/Users";

export const navItems = [
    {
        id: 1,
        name: "SEARCH",
        icon:<Search className="w-8 h-8 text-gray-500" />
    },
    {
        id: 2,
        name: "DASHBOARD",
        icon:<Home />
    },
    {
        id: 3,
        name: "REPORTS",
        icon:<Report />
    },
    {
        id: 4,
        name: "SENSORS",
        icon:<Sensor />
    },
    {
        id: 5,
        name: "USERS",
        icon:<Users />
    },
    {
        id: 6,
        name: "SETTINGS",
        icon:<Settings />
    },
]