import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useTable from './hook/useTable';
import { AiOutlineEllipsis } from 'react-icons/ai'

const Table = () => {

  const { hostings } = useTable()

  return (
    <DataTable value={hostings ? hostings : []} paginator rows={5}>
      <Column field="url" sortable header="Url" />
      <Column field="name" sortable header="Cliente" />
      <Column field="quantity" sortable header="Paquete" />
      <Column field="state" sortable header="Estado" />
      <Column header="Dominios"> <button onClick={() => {}}>Ver dominios</button ></Column>
      <Column header="test" body={<div className="icon-container"><div className="icon"><AiOutlineEllipsis /></div></div>} />
    </DataTable>
  )
}

export default Table