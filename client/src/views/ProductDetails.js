import PrimeMenuBar from "../components/PrimeMenuBar";
import { ErrorAlert } from "../components/ErrorAlert";
import { Card } from 'primereact/card';
import { useEffect, useRef, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Image } from 'primereact/image';
import { TabView, TabPanel } from 'primereact/tabview';

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
        <div className="grid">
            <div className = "col-12">
                <PrimeMenuBar/>
            </div>
            
                {cardInfo.isFetched? 
                (
                    <div className = "col-12 grid mt-4">
                        <Card className="col-3 shadow-3 col-offset-c3" title={displayInfo.card_name}>
                            <Image src={displayInfo.img_url} zoomSrc={displayInfo.img_url} alt={displayInfo.card_name} preview width="240"/>
                        </Card>
                        <Card className="col-3 shadow-3 text-left ml-4" title="Product Details">
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
                        </Card>
                    </div>              
                ) : (
                <ProgressSpinner />
                )}                
        </div>
    )

}
export default ProductDetails;