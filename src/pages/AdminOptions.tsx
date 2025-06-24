import { ServiceCard }  from "../components/Services/ServiceCard";
import  Navbar  from "../components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import "../pages/AdminOptions.css";

export default function AdminOptions() {

    const adminOptions = [
        { title: "Gestion de Baños", link: "/gestionbaños"},
        { title: "Gestion de Jabones", link: "/admin/jabones" },
        { title: "Gestion de Usuarios", link: "/admin/usuarios" },
        { title: "Gestion de Menu", link: "/admin/menu" },
        { title: "Gestion de Elementos de limpieza", link: "/admin/elementos" },
        { title: "Gestion de Personal de limpieza", link: "/admin/personal" },
    ];

    return (
        <>
        <Navbar/>
        <div className="admin-options">
            <div className ="admin-options__content"></div>
            <div className="admin-options__sidebar">
                <h2 className="admin-options__sidebar-title">Opciones</h2>
                <ul className="admin-options__sidebar-list">
                    {
                    adminOptions.map((item, i) => (
                        <li className="admin-options__sidebar-item" key={i}>
                            <Link to={item.link} className="admin-options__sidebar-link">{item.title}</Link>
                        </li>
                        ))
                    }
                    {/* <li className="admin-options__sidebar-item">
                        <Link to="/admin/reportes" className="admin-options__sidebar-link">Generar Reportes</Link>
                    </li>
                    <li className="admin-options__sidebar-item">
                        <Link to="/admin/configuracion" className="admin-options__sidebar-link">Configuración</Link>
                    </li> */}
                </ul>
            </div>
        </div>
        </>
    );
}