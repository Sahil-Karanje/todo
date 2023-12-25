'use client'
import { Provider } from "react-redux";
import { store } from "./store";

export default function PROVIDER({ children }) {
    return <Provider store={store}>{children}</Provider>
}