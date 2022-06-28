import { useContext } from "react";
import { FilmContext } from '.';

const useStore = () => {
    const [state, dispatch] = useContext(FilmContext);
    return [state, dispatch]
}

export { useStore };
