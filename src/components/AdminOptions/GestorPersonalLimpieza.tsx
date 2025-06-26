// import Personal from "../../data/PersonalLimpieza.json";
import PlantillaGestor from "./PlantillaGestor";
import "./Gestor.css";

export default function GestorPersonalLimpieza() {
    return (
        <>
            <h2>Gestión de Personal de Limpieza</h2>
            <PlantillaGestor
                header={["Nombre", "Apellido", "Teléfono", "Correo Electrónico", "Imagen"]}
                content={[] }
            />
        </>
    );
}