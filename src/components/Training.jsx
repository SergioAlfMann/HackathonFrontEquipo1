import Navbar from "./Navbar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { useState, useEffect, useRef} from "react";
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'

const Training = () => {
    let navigate = useNavigate();
    const [datos, setDatos] = useState({});
    const toast = useRef(null);
    const header = (
        <div className="p-row-editor-init">
            Tus Capacitaciones
        </div>
    );

    useEffect(() => {
        const profile = localStorage.getItem("profile");

        if (profile) {
            const access_token = JSON.parse(profile).access_token;

            axios.get('https://hackteam1.herokuapp.com/api/training', {
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

    const dateBodyTemplate = (rowData) => {
        return <div>{new Date(rowData.start).toLocaleDateString('en-GB')}</div>
    }

    const durationBodyTemplate = (rowData) => {
        return <div>{rowData.duration} hs.</div>
    }

    const typeBodyTemplate = (rowData) => {

        let status = 'info';
        if (rowData.type === 'Critical') {
            status = 'danger'
        }
        return <Tag severity={status}>{rowData.type}</Tag>;

    }

    return (
        <>
            <Toast ref={toast} />
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
                        <Column field="duration" header="Duración" body={durationBodyTemplate}></Column>
                        <Column field="type" header="Tipo" body={typeBodyTemplate}></Column>
                    </DataTable>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Training;