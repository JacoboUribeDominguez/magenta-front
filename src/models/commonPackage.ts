export type Packages = {
    id_paquete: string,
    nombre: string,
    precio: number
}; 

export type initialStatePackages = {
    packages: Packages[] | [] | null
}