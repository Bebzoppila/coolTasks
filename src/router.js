import TodoList from "./components/TodoList/index";
import Table from "./components/Table/Index";

const router = [{
        path: "/",
        component: TodoList,
        name: "todo",
    },
    {
        path: "table",
        component: Table,
        name: "table",
    },
];

const routerMap = router.reduce((acc, rout) => {
    acc[rout.name] = rout.path
    return acc
}, {});

export { routerMap }

export default router;