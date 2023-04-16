import {
    createBrowserRouter,
    Link
} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../views/home/Home";
import Client from "../views/client/Client";
import CrearClient from "../components/clients/CrearClient";
import { render } from "react-dom";
import Package from "../views/package/Package";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "client",
                element: <Client />
            },
            {
                path: "crearClient",
                element: <CrearClient />
            },
            {
                path: "modificarClient/:id",
                element: <CrearClient />
            },
            {
                path: "package",
                element: <Package />
            }
        ]
    },
]);


export default router
