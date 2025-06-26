import Baños from "../../data/Baños.json";
import PlantillaGestor from "./PlantillaGestor";
import "./Gestor.css"


export default function GestorBaños(){

    return (
        <>
            <h2>Gestión de Baños</h2>
            <PlantillaGestor
                header={["Nombre", "Descripción", "Precio", "Imagen"]}
                content={Baños}
            />
        </>
    );
}

