import Navbar from "./Navbar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'

const Software = () => {
    let navigate = useNavigate();
    const [datos, setDatos] = useState({});
    const toast = useRef(null);
    const header = (
        <div className="p-row-editor-init">
            Tu Software
        </div>
    );

    useEffect(() => {
        const profile = localStorage.getItem("profile");

        if (profile) {
            const access_token = JSON.parse(profile).access_token;

            axios.get('https://hackteam1.herokuapp.com/api/soft', {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
                .then(response => {
                    setDatos(response?.data[0])
                })
                .catch(() => {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: 'Se produjo un error al consultar los datos.' });
                });
        }
        else {
            navigate('/');
        }
    }, []);

    return (
        <>
            <Toast ref={toast} />
            <div className='grid'>
                <div className='col'>
                    <Navbar index={3} />
                </div>
            </div>
            <div>
                <div className="card">
                    <DataTable value={datos.softs} header={header} showGridlines responsiveLayout="scroll">
                        <Column field="name" header="Nombre"></Column>
                        <Column field="role" header="Rol" className="capitalize"></Column>
                    </DataTable>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Software;