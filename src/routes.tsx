import { createBrowserRouter } from "react-router";
import { Root } from "./components/root";
import { Farm } from "./pages/farm";
import { NotFound } from "./components/notFound";
import { Settings } from "./pages/settings";
import { Achievements } from "./pages/achievements";
import { Prestige } from "./pages/prestige";
import { Upgrades } from "./pages/upgrades";
import { Dev } from "./pages/dev";

const getChildren = () => {
    const children = [
        {
            index: true,
            element: <Farm />,
        },
        {
            path: "upgrades",
            element: <Upgrades />,
        },
        {
            path: "achievements",
            element: <Achievements />,
        },
        {
            path: "prestige",
            element: <Prestige />,
        },
        {
            path: "settings",
            element: <Settings />,
        }
    ];
    if (process.env.NODE_ENV !== 'production') {
        children.push({
            path: "dev",
            element: <Dev />,
        });
    };
    return children;
};

export const routes = createBrowserRouter([
    {
        path: "/Farmle/",
        Component: Root,
        errorElement: <NotFound />,
        children: getChildren(),
    }
])
