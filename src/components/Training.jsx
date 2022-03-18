import Navbar from "./Navbar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from "react";
import axios from 'axios';

const Training = () => {
    const [datos, setDatos] = useState({});
    const header = (
        <div className="p-row-editor-init">
            Capacitaciones
        </div>
    );

    useEffect(() => {
        const access_token = JSON.parse(localStorage.getItem("profile")).access_token;
     
        axios.get('https://hackteam1.herokuapp.com/api/training', {
            headers: {
              'Authorization': `Bearer ${access_token}`
            }
        })
        .then(response => {
            console.log(response)
            setDatos(response?.data[0])
        })
        .catch(error => {
            console.log(error)
            alert("Se produjo un error al consultar los datos.")
        });
    }, []);

    const dateBodyTemplate = (rowData) => {
        return <div>{new Date(rowData.start).toLocaleDateString('es-AR')}</div>
    }

    return (
        <>
            <div className='grid'>
                <div className='col'>
                    <Navbar index={1} />
                </div>
            </div>
            <div>
                <div className="card">
                    <DataTable value={datos.courses} header={header} showGridlines responsiveLayout="scroll">
                        <Column field="name" header="Nombre"></Column>
                        <Column field="start" header="Inicio" body={dateBodyTemplate}></Column>
                        <Column field="duration" header="Duración"></Column>
                        <Column field="type" header="Tipo"></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}
export default Training;