import PrimeMenuBar from "../components/PrimeMenuBar";
import ProductTable from "../components/ProductsTable";
import { Messages } from 'primereact/messages';
import { useEffect, useRef, useState } from "react";

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
        <div className="grid">
            <div className = "col-12">
                <Messages ref={msgs} />
                <PrimeMenuBar/>
            </div>
            {/* TODO: Image carousel */}
            {/* TODO: Products type */}
            <div className = "col-10 col-offset-1">
                <ProductTable/>
            </div>
        </div>
    )

}
export default Home;