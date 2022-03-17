import Navbar from "./Navbar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from "react";
import axios from 'axios';

const Access = () => {
    const [datos, setDatos] = useState({});
    const header = (
        <div className="table-header">
            Tus Accesos 
        </div>
    );

    useEffect(() => {
        const access_token = JSON.parse(localStorage.getItem("profile")).access_token;
     
        axios.get('https://hackteam1.herokuapp.com/api/access', {
            headers: {
              'Authorization': `token ${access_token}`
            }
        })
        .then(response => {
            setDatos(response?.data)
        })
        .catch(error => {
            console.log(error)
            alert("Se produjo un error al consultar los datos.")
        });
    }, []);

    return (
        <>
            <div className='grid'>
                <div className='col'>
                    <Navbar index={2} />
                </div>
            </div>
            <div>
                <div className="card">
                    <DataTable value={datos} header={header} showGridlines responsiveLayout="scroll">
                        <Column field="name" header="Nombre"></Column>
                        <Column field="description" header="Descripción"></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}
export default Access;