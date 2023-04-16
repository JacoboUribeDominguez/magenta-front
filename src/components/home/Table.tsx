import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useTable from './hook/useTable';
import { AiOutlineEllipsis } from 'react-icons/ai'

const Table = () => {

  const { hostings } = useTable();

  return (
    <DataTable value={hostings ? hostings : []} paginator rows={5}>
      <Column field="url" sortable header="Url" />
      <Column field="usuario" sortable header="Usuario" />
      <Column field="cliente" sortable header="Cliente" />
      <Column field="contrasena" sortable header="Contraseña" />
      <Column field="fecha_vencimiento" sortable header="Fecha de vencimiento" />
      <Column field="paquete" sortable header="paquete" />
      <Column field="estado" sortable header="estado" />
      <Column field="notas" sortable header="Notas" />
      {/* <Column field="quantity" sortable header="Paquete" /> */}
      {/* <Column field="state" sortable header="Estado" /> */}
      {/* <Column header="Dominios"> <button onClick={() => {}}>Ver dominios</button ></Column> */}
      {/* <Column body={<div className="icon-container"><div className="icon"><AiOutlineEllipsis /></div></div>} /> */}
    </DataTable>
  )
}

export default Table