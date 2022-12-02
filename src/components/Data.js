import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LiquorIcon from "@mui/icons-material/Liquor";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { GiFruitBowl } from "react-icons/gi";

const MenuItems = [
  {
    id: 1,
    imgSrc: <LunchDiningIcon />,
    name: "Breakfast",
    link: "/type/breakfast",
  },
  {
    id: 2,
    imgSrc: <IcecreamIcon />,
    name: "Dessert",
    link: "/type/dessert",
  },
  {
    id: 3,
    imgSrc: <SoupKitchenIcon />,
    name: "Soup",
    link: "/type/soup",
  },
  {
    id: 4,
    imgSrc: <LiquorIcon />,
    name: "Salad",
    link: "/type/salad",
  },
  {
    id: 5,
    imgSrc: <LiquorIcon />,
    name: "Beverage",
    link: "/type/beverage",
  },
];

const BottomMenuData = [
  {
    name: "Home",
    link: "/",
    icon: <HomeRounded />,
    isHome: true,
  },
  {
    name: "Chat",
    link: "/chat",
    icon: <Chat />,
    isHome: false,
  },
  {
    name: "Wallet",
    link: "/wallet",
    icon: <AccountBalanceWalletRounded />,
    isHome: false,
  },
  {
    name: "Favorite",
    link: "/favorite",
    icon: <Favorite />,
    isHome: false,
  },
  {
    name: "Summarize",
    link: "/summarize",
    icon: <SummarizeRounded />,
    isHome: false,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Settings />,
    isHome: false,
  },
];

export { MenuItems, BottomMenuData };
