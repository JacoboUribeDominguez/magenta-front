import {
    createBrowserRouter,
    Link
} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../views/home/Home";
import Client from "../views/client/Client";
import CrearClient from "../components/clients/CrearClient";
import { render } from "react-dom";
import Paquete from "../views/package/Paquete";
import CrearPackage from "../components/package/CrearPackage";

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
                element: <Paquete />
            },
            {
                path: "crearPackage",
                element: <CrearPackage />
            },
            {
                path: "modificarPackage/:id",
                element: <CrearPackage />
            }
        ]
    },
]);


export default router
