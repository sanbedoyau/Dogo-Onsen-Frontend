// import ElementosLimpieza from "../../data/ElementosLimpieza.json";
import PlantillaGestor from "./PlantillaGestor";
import "./Gestor.css";

export default function GestorElementosLimpieza() {
    return (
        <>
            <h2>Gestión de Elementos de Limpieza</h2>
            <PlantillaGestor
                header={["Nombre", "Descripción", "Precio", "Imagen"]}
                content={[] }
            />
        </>
    );
}