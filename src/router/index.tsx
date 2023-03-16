import {
    createBrowserRouter,
    Link
} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from "../views/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
]);


export default router
