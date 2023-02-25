import React, { useEffect, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { useQuery } from '@tanstack/react-query'
import { ErrorAlert } from "./ErrorAlert";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function ProductTable() {
    const cards = useQuery(['cards'], async () => {
      const res = await fetch("/cards");
      return res.json();       
    })

    console.log( "card", cards.isFetched, cards.data?.data);

    if (cards.error) {
        return <ErrorAlert error={cards.error} />;
    }
    const columns = [
        { field: 'card_nr', headerName: 'ID', width: 90 },
        {
          field: 'card_name',
          headerName: 'Card',
          width: 150,
          editable: true,
        },
        {
          field: 'era_name',
          headerName: 'Era',
          width: 150,
          editable: true,
        },
        {
          field: 'group_name',
          headerName: 'Group',
          width: 150,
          editable: true,
        },
        {
            field: 'type_name',
            headerName: 'Type',
            width: 150,
            editable: true,
        },
        {
            field: 'release_date',
            headerName: 'Release date',
            width: 150,
            editable: true,
        }

    ];    
    return (
    <Box sx={{ height: 400, width: '100%' }}>
      {cards.isFetched? (
        <DataTable value={cards.data?.data} tableStyle={{ minWidth: '50rem' }}>
          <Column field="card_nr" header="ID"></Column>
          <Column field="card_name" header="Name"></Column>
          <Column field="era_name" header="Era"></Column>
          <Column field="group_name" header="Group"></Column>
          <Column field="type_name" header="Type"></Column>
          <Column field="release_date" header="Release date"></Column>
        </DataTable>
      ) : (
        <CircularProgress />
      )}      
    </Box>
    );
}
export default ProductTable;