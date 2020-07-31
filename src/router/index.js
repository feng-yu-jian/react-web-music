import HYDiscover from "@/pages/discover";
import HYMine from "@/pages/mine";
import HYFriend from "@/pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: HYDiscover
  },
  {
    path: "/mine",
    component: HYMine
  },
  {
    path: "/friend",
    component: HYFriend
  },
];

export default routes;
