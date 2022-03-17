
import { TabMenu } from 'primereact/tabmenu';
import { useState } from "react";

const Navbar = ({index}) => {
    const [activeIndex, setActiveIndex] = useState(index); 

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', url: '/home' },
        { label: 'Capacitaciones', icon: 'pi pi-fw pi-briefcase', url: '/training' },
        { label: 'Accesos', icon: 'pi pi-fw pi-key', url: '/access' },
        { label: 'Software', icon: 'pi pi-fw pi-database', url: '/software' },
    ];

    return (
        <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.value)} />
    );
}
export default Navbar;