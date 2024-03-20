import { useEffect, useState } from "react";
import { DATA_API } from "./constants";


const useInfo = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        const data = await fetch(DATA_API);
        const json = await data.json();
        setInfo(json);
    };

    return info;
};

export default useInfo;