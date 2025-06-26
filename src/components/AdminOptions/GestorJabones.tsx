
import Jabones from "../../data/Jabones.json";
import PlantillaGestor from "./PlantillaGestor"
import "./Gestor.css"



export default function GestorJabones(){

    return (
        <>
            <h2>Gestión de Jabones</h2>
            <PlantillaGestor
                header={["Nombre", "Descripción", "Precio", "Imagen"]}
                content={Jabones}
            />
        </>
    );
}
