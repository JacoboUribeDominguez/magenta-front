export type Packages = {
    id_paquete: string,
    nombre: string,
    precio: number
}; 

export type Package = Packages;

export type initialStatePackages = {
    packages: Packages[] | [] | null
}