import { IconType } from "react-icons";

export type Hostings = {
    id_hosting: string,
    url: string,
    usuario: string,
    contrasena: string,
    fecha_vencimiento: string,
    package: string,
    estado: string,
    notas: string
};

export type initialStateHostings = {
    hostings: Hostings[] | [] | null
}