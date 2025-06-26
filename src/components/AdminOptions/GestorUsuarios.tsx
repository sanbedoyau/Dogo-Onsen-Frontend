import Usuarios from "../../data/users.json"
import PlantillaGestor from "./PlantillaGestor"
import "./Gestor.css"

export default function GestorUsuarios() {

    return (
        <>
            <h2 >Gestión de Usuarios</h2>
            <PlantillaGestor
                header={["Email","Contraseña" ,"Nombre", "Tipo", "Imagen", "Descripción", "Rol"]}
                content={Usuarios}
            />
        </>
    );
}
