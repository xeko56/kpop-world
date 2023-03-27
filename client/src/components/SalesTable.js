import React, { useEffect, useState } from "react";
import { ProgressSpinner } from 'primereact/progressspinner';
import { useQuery } from '@tanstack/react-query'
import { ErrorAlert } from "./ErrorAlert";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { SelectButton } from 'primereact/selectbutton';
import { Image } from 'primereact/image';

function SalesTable(props) {
    const card_nr = props.card_nr;
    const [selectedCell, setSelectedCell] = useState(null);

    // Event on Cell click
    // const onCellSelect = (event) => {
    //   console.log("event", event);
    //   if (event.field === "card_name") {
    //     let card_nr = event.rowData.card_nr;
    //     window.open(`/card/${card_nr}`,'_blank');
    //   }
    // };

    // TODO: add filter & sorting for Datatable
    const salecards = useQuery(['salecards'], async () => {
      const res = await fetch(`/salecards/${card_nr}`);
      return res.json();       
    })

    console.log( "card", salecards.isFetched, salecards.data?.data);

    if (salecards.error) {
        return <ErrorAlert error={salecards.error} />;
    }

    return (
      <div className="">
        {/* <div className="flex flex-row flex-wrap row-gap-6 justify-content-between">
          <div className="flex justify-content-center">
            <h4 className="">Trends</h4>
          </div>      
        </div> */}
        {salecards.isFetched? (
          <>
            {
                <DataTable value={salecards.data?.data}
                  cellSelection 
                  selectionMode="single" 
                  selection={selectedCell} 
                  tableStyle={{ minWidth: '50rem' }} 
                  showGridlines
                  removableSort
                  onSelectionChange={(e) => setSelectedCell(e.value)}
                  // onCellSelect={onCellSelect}
                >
                  <Column field="username" header="Seller" sortable></Column>
                  <Column field="status_abbre" header="Product Info" sortable></Column>
                  <Column field="price" header="Price" sortable></Column>
                </DataTable> 
            }
          </>
        ) : (
          <ProgressSpinner />
        )}      
    </div>
    );
}
export default SalesTable;