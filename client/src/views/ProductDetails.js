import PrimeMenuBar from "../components/PrimeMenuBar";
import { ErrorAlert } from "../components/ErrorAlert";
import { Card } from 'primereact/card';
import { useEffect, useRef, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Image } from 'primereact/image';
import { TabView, TabPanel } from 'primereact/tabview';
import SalesTable  from '../components/SalesTable'

function ProductDetails() {
    //TODO: rearrange into Grid
    const userData = JSON.parse(sessionStorage.getItem('userData') || 'null');
    const { card_nr } = useParams();
    console.log("params", card_nr);

    const cardInfo = useQuery(['cardInfo'], async () => {
        const res = await fetch(`/cards/${card_nr}`);
        return res.json();       
    })
    const displayInfo = cardInfo.data?.data[0];
    console.log( "cardInfo", cardInfo.isFetched, cardInfo.data?.data[0]);

    if (cardInfo.error) {
        return <ErrorAlert error={cardInfo.error} />;
    }    
    return (
        <div className="layout-main-container">
            <div className="grid">
                <div className = "col-12">
                    <PrimeMenuBar/>
                </div>
                
                {cardInfo.isFetched? 
                (
                    <>
                        <div className = "col-12 xl:col-3">
                            <div className="card" title={displayInfo.card_name}>
                                <Image src={displayInfo.img_url} zoomSrc={displayInfo.img_url} alt={displayInfo.card_name} preview width="240"/>
                            </div>
                        </div>
                        <div className="col-12 xl:col-9">
                            <div className="card" title="Product Details">
                                <p>
                                    <span className="font-semibold">Group: </span>
                                    {displayInfo.group_name}
                                </p>
                                <p>
                                    <span className="font-semibold">Era: </span>
                                    {displayInfo.era_name}
                                </p>
                                <p>
                                    <span className="font-semibold">Type: </span>
                                    {displayInfo.type_name}
                                </p>
                                <p>
                                    <span className="font-semibold">Release Date: </span>
                                    {displayInfo.release_date}
                                </p>
                            </div>
                            <div className="card">
                                <SalesTable card_nr = {card_nr}/>
                            </div>                    
                        </div>                 
                    </>             
                ) : (
                    <ProgressSpinner />
                )}                   
            </div>
        </div>
    )

}
export default ProductDetails;