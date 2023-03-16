import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = () => {
  return (
    <DataTable value={[{ code: 0, name:'test', category:'test', quantity:'test'}]} paginator rows={5}>
      <Column field="code" sortable header="Url"></Column>
      <Column field="name" sortable header="Cliente"></Column>
      <Column field="quantity" sortable header="Paquete"></Column>
      <Column field="quantity" sortable header="Estado"></Column>
    </DataTable>
  )
}

export default Table