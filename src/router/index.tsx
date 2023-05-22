import {
    createBrowserRouter,
    Link
} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../views/home/Home";
import Clients from "../views/client/Clients";
import CreateClient from "../components/clients/CreateClient";
import { render } from "react-dom";
import Paquete from "../views/package/Paquete";
import CrearPackage from "../components/package/CrearPackage";
import FirstTime from "../views/FirstTime/FirstTime";
import Login from "../views/Login/Login";
import NotFound from "../views/NotFound/NotFound";
import Client from "../components/clients/Client/Client";

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
                children: [
                    {
                        index: true,
                        element: <Clients />,
                    },
                    {
                        path: ':name',
                        element: <Client />
                    }
                ]
            },
            {
                path: "createClient",
                element: <CreateClient />
            },
            {
                path: "updateClient/:id",
                element: <CreateClient />
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
    {
        path: '/FirstHosting',
        element: <FirstTime />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/NotFound',
        element: <NotFound />
    }
]);


export default router
