import Navbar from "./Navbar";
import { Divider } from 'primereact/divider';


const Home = () => {
    return (
        <>
        <div className='grid'>
           
                <div className='col'>
                    <Navbar index={0} />
                </div>
            </div>

            <div className='grid'>
                <div className='col'>
                    <div>Rol</div>
                    <Divider type="dashed" />
                    <div>Objetivos </div>
                </div>
            </div>
            </>    

    );
}
export default Home;