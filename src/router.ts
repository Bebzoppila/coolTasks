import TodoList from "./pages/TodoList/index";
import Table from "./pages/Table/Index";
import React from "react";
import Pharmacy from "./pages/Pharmacy"
type RoutType = {
  path: string;
  component: React.FC;
  name: string;
};

type RoutersType = Array<RoutType>;

const router: RoutersType = [
  {
    path: "/",
    component: TodoList,
    name: "todo",
  },
  {
    path: "table",
    component: Table,
    name: "table",
  },
  {
    path: "pharmacy",
    component: Pharmacy,
    name: "pharmacy",
  },
];

const routerMap: any = router.reduce((acc: any, rout) => {
  acc[rout.name] = rout.path;
  return acc;
}, {});

export { routerMap };

export default router;
