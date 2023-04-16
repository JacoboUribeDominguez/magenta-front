import { IconType } from "react-icons";

export type Hostings = {
    url: string,
    name: string,
    quantity: string,
    state: string,
    notes: string
};

export type initialStateHostings = {
    hostings: Hostings[] | [] | null
}