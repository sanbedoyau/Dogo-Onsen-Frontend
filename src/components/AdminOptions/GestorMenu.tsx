import Menus from "../../data/Menu.json"
import PlantillaGestor from "./PlantillaGestor"
import "./Gestor.css"


export default function GestorMenu() {

    return (
        <>
            <h2>Gestión de Menú</h2>
            <PlantillaGestor 
                header={["Nombre", "Descripción", "Precio", "Imagen"]}
                content={Menus}
            />
        </>
    );

}

