import PrimeMenuBar from "../components/PrimeMenuBar";
import ProductTable from "../components/ProductsTable";
import { Messages } from 'primereact/messages';
import { useEffect, useRef, useState } from "react";

function Home() {
    //TODO: rearrange into Grid
    const userData = JSON.parse(sessionStorage.getItem('userData') || 'null');
    // const msgs = useRef(null);

    // useEffect(() => {
    //     msgs.current.show(
    //         { sticky: true, severity: 'info', detail: `Welcome to the partys: ${userData.firstname}, ${userData.lastname}`, closable: false }
    //     );
    // }, []);

    return (
        <div className="layout-main-container">
            <div className="grid">
                <div className = "col-12">
                    <PrimeMenuBar/>
                </div>
                {/* TODO: Image carousel */}
                {/* TODO: Products type */}
                <div className = "col-12 xl:col-12">
                    <ProductTable/>
                </div>
            </div>
        </div>
    )

}
export default Home;