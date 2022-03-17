import Navbar from "./Navbar";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from "react";

const Home = () => {
    const [datos, setDatos] = useState({});
    const header = (
        <div className="table-header">
            Tu Equipo
        </div>
    );

    useEffect(() => {
        setDatos(JSON.parse(localStorage.getItem("profile")));
    }, []);

    return (
        <>
            <div className='grid'>
                <div className='col'>
                    <Navbar index={0} />
                </div>
            </div>
            <div className='grid'>
                <div className='col'>
                    <Card title={`Rol: ${datos.role}`} subTitle="Objetivos">
                        {datos.objectives}
                    </Card>
                </div>
            </div>
            <div>
                <div className="card">
                    <DataTable value={datos.members} header={header} showGridlines responsiveLayout="scroll">
                        <Column field="name" header="Nombre"></Column>
                        <Column field="role" header="Rol"></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}
export default Home;