import { Typography } from "@mui/material";
import PrimeMenuBar from "../components/PrimeMenuBar";
import ProductTable from "../components/ProductsTable";
import { Messages } from 'primereact/messages';
import { useEffect, useRef } from "react";

function Home() {
    //TODO: rearrange into Grid
    const userData = JSON.parse(sessionStorage.getItem('userData') || 'null');
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show(
            { sticky: true, severity: 'info', detail: `Welcome to the partys: ${userData.firstname}, ${userData.lastname}`, closable: false }
        );
    }, []);

    return (
        <>
            <Messages ref={msgs} />
            <PrimeMenuBar/>
            {/* TODO: Image carousel */}
            {/* TODO: Products type */}
            <ProductTable/>
        </>
    )

}
export default Home;