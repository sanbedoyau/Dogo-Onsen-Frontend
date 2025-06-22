import { ServiceCard }  from "../components/Services/ServiceCard";
import  Navbar  from "../components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import "../pages/AdminOptions.css";

export default function AdminOptions() {

    const adminOptions = [
        { title: "Gestion de Baños", link: "/admin/baños"},
        { title: "Gestion de Jabones", link: "/admin/jabones" },
        { title: "Gestion de Usuarios", link: "/admin/usuarios" },
        { title: "Gestion de Menu", link: "/admin/menu" },
        { title: "Gestion de Elementos de limpieza", link: "/admin/elementos" },
        { title: "Gestion de Personal de limpieza", link: "/admin/personal" },
    ];

    return (
        <>
        <Navbar/>
         <div className="admin-options__container">
            <h1 className="admin-options__title">Gestion de servicios</h1>
            <div className="admin-options__content">
                {
                adminOptions.map((item, i) => (
                    <Link to={item.link} className="admin-options__link" key={i}>
                        <ServiceCard title={item.title} images={["src/assets/img/NotFoundIcon.png"]} />
                    </Link>
                ))}
            </div>

         </div>
        </>
    );
}