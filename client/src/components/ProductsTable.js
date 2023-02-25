import React, { useEffect, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { useQuery } from '@tanstack/react-query'
import { ErrorAlert } from "./ErrorAlert";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

function ProductTable() {
  // TODO: add filter & sorting for Datatable
    const cards = useQuery(['cards'], async () => {
      const res = await fetch("/cards");
      return res.json();       
    })

    console.log( "card", cards.isFetched, cards.data?.data);

    if (cards.error) {
        return <ErrorAlert error={cards.error} />;
    }
    const imageBodyTemplate = (rowData) => {
      return <img src={`${rowData.img_url}`} alt={rowData.img_url} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    return (
      <div className="card">
        <h4 className="align-items-left">Trends</h4>
        {cards.isFetched? (
          <DataTable value={cards.data?.data} tableStyle={{ minWidth: '50rem' }} removableSort>
            <Column field="card_nr" header="ID" sortable></Column>
            <Column field="card_name" header="Name" sortable></Column>
            <Column field="img_url" header="Image" body={imageBodyTemplate}></Column>
            <Column field="era_name" header="Era" sortable></Column>
            <Column field="group_name" header="Group" sortable></Column>
            <Column field="type_name" header="Type" sortable></Column>
            <Column field="release_date" header="Release date" sortable></Column>
          </DataTable>
        ) : (
          <CircularProgress />
        )}      
    </div>
    );
}
export default ProductTable;