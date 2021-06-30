import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import Cat from "./Cat";
import { setCats } from "./catsSlice";
const CatList = () => {
    const catState = useAppSelector(state => state.cats);
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const catData = await fetch('https://cataas.com/api/cats?tags=cute&limit=10')
                .then(response => response.json());
            
            dispatch(setCats(catData.map((cat: any) => ({ ...cat, upvotes: 0}))));
        })();
    }, [])
    return <div>
        {catState && <ul>
            {catState.map(catItem => <li key={catItem.id}><Cat cat={catItem}/></li>)}
            </ul>}
    </div>
};

export default CatList;