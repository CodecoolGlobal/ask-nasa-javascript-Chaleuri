import { createContext } from "react";

export default NasaContext = createContext({
    date: new Date().toString(),
    setDate: () => {}
});