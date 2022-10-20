import { createContext } from "react";

const NasaContext = createContext({
    date: new Date().toString(),
    setDate: () => {}
});

export default NasaContext;