import { Link } from "react-router-dom";

interface Baño {
    name: string;
    description: string;
    price: number;
    img: string;
}

interface BañoCardProps {
    baños: Baño[]
}

const BañoCard = ({ baños }: BañoCardProps ) => {
    return (
        <>
            {baños.map((baño, _) => {
                return (<div className='bañoCard' >
                    <div className='bañoCard__inner'>
                        <div className='bañoCard__front'>
                            <img src={ baño.img }/>
                            <h3>{ baño.name }</h3>
                            <strong>{ `$${baño.price} Dragmas` }</strong>
                        </div>
                        <div className='bañoCard__back'>
                            <p>{ baño.description }</p>
                        </div>
                    </div>
                </div>);
            })}
        </>
    );
}

export default BañoCard;