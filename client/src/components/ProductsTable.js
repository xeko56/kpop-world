import React, { useEffect, useState } from "react";
import { ProgressSpinner } from 'primereact/progressspinner';
import { useQuery } from '@tanstack/react-query'
import { ErrorAlert } from "./ErrorAlert";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { SelectButton } from 'primereact/selectbutton';
import { Image } from 'primereact/image';

function ProductTable() {
    const [viewValue, setViewValue] = useState('list');
    const [selectedCell, setSelectedCell] = useState(null);

    useEffect(() => {
      console.log("test", viewValue);
    }, [viewValue]);

    // Option to change view
    const viewOptions = [
        {icon: 'pi pi-list', value: 'list', name: 'List View'},
        {icon: 'pi pi-th-large', value: 'grid', name: 'Grid View'}
    ];

    const viewOptionsTemplate = (option) => {
        return <i className={option.icon}></i>;
    }    

    // Event on Cell click
    const onCellSelect = (event) => {
      console.log("event", event);
      if (event.field === "card_name") {
        let card_nr = event.rowData.card_nr;
        window.open(`/card/${card_nr}`,'_blank');
      }
    };

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
      <div className="">
        <div className="flex flex-row flex-wrap row-gap-6 justify-content-between">
          <div className="flex justify-content-center">
            <h4 className="">Trends</h4>
          </div>
          <div className="flex flex-wrap justify-content-end gap-3">
                <SelectButton value={viewValue} onChange={(e) => {
                    setViewValue(e.value);}
                  } 
                  options={viewOptions} optionLabel="name" itemTemplate={viewOptionsTemplate}/>
          </div>          
        </div>
        {cards.isFetched? (
          <>
            {
              viewValue === 'list' ? 
              (
                <DataTable value={cards.data?.data}
                  cellSelection 
                  selectionMode="single" 
                  selection={selectedCell} 
                  tableStyle={{ minWidth: '50rem' }} 
                  showGridlines
                  removableSort
                  onSelectionChange={(e) => setSelectedCell(e.value)}
                  onCellSelect={onCellSelect}
                >
                  <Column field="card_nr" header="ID" sortable></Column>
                  <Column field="card_name" header="Name" sortable></Column>
                  <Column field="img_url" header="Image" body={imageBodyTemplate}></Column>
                  <Column field="era_name" header="Era" sortable></Column>
                  <Column field="group_name" header="Group" sortable></Column>
                  <Column field="type_name" header="Type" sortable></Column>
                  <Column field="release_date" header="Release date" sortable></Column>
                </DataTable>
              ) : 
              (
                <div className="grid">
                {
                  cards.data?.data.map(card => {
                    return (
                      <div className="col-12 md:col-6 xl:col-4"> 
                        <Card style={{height: "500px"}} title={card.card_name} key={card.card_nr}>
                          <Image src={card.img_url} zoomSrc={card.img_url} alt={card.card_name} preview width="240"/>
                        </Card>
                      </div>
                    )
                  })
                }
                </div>
              )
            }
          </>
        ) : (
          <ProgressSpinner />
        )}      
    </div>
    );
}
export default ProductTable;