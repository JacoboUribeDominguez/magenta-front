export type Clients = {
    identificacion: string,
    nombre: string,
    ciudad: string,
    direccion: string,
    telefono: string,
    correo: string,
    id_cliente: string
};

export type initialStateClients = {
    clients: Clients[] | [] | null
}