
// props
interface PlantillaGestorProps {
    header: string[];
    content: Array<Record<string, any>>;
}


export default function PlantillaGestor({ header, content }: PlantillaGestorProps) {


    return (
        <>
        <div className="gestor">
        <table className="gestor__table">
            <thead className="gestor__table-header">
                <tr>
                    {header.map((item, index) => (
                        <th key={index} className={`gestor__table-header-${index}`}>{item}</th>
                    ))}
                    <th className="gestor__th-add-button">
                        <button className="gestor__add-button">+</button>
                    </th>
                </tr>
            </thead>
            <tbody className="gestor__table-body"> 
                {content.map((item, index) => (
                <tr key={index}>
                    {Object.keys(item).map((propiedad) => (
                        <td key={propiedad}>{item[propiedad]}</td>
                    ))}
                    <td>
                        <button className="gestor__edit-button">Editar</button>
                        <button className="gestor__delete-button">Eliminar</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    );
}