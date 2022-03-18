
import { useState, useEffect } from "react";
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ index }) => {
    let navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(index);
    const [user, setUser] = useState('');

    useEffect(() => {
        const profile = localStorage.getItem("profile");

        if(profile) {
            setUser(JSON.parse(profile).email);
        }
    }, []);

    const quit = () => {
        localStorage.setItem("profile", "");
        navigate('/');
    }

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: '/home'
        },
        {
            label: 'Capacitaciones',
            icon: 'pi pi-fw pi-briefcase',
            url: '/training'
        },
        {
            label: 'Accesos',
            icon: 'pi pi-fw pi-key',
            url: '/access'
        },
        {
            label: 'Software',
            icon: 'pi pi-fw pi-database',
            url: '/software'
        },
        {
            label: 'Salir',
            icon: 'pi pi-fw pi-power-off',
            command: (event) => {
                quit()
            }
        },     
    ];

    return (
        <Menubar model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.value)} end={<div>{user}</div>} />
    );
}
export default Navbar;