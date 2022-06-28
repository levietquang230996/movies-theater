    import { useReducer } from "react";
    import reducer, { initialState } from "./reducer";
    import { FilmContext } from "./";

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        return (<FilmContext.Provider value={[state, dispatch]}>
            {children}
        </FilmContext.Provider>)
    }

    export default Provider;