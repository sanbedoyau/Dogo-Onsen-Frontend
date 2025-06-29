interface Jabon {
    name: string;
    description: string;
    price: number;
    img: string;
}

interface JabonCardProps {
    jabones: Jabon[];
}

export default function JabonCard({ jabones }: JabonCardProps) {
    return (
        <>
            {jabones.map((jabon, index) => {
                return (<div className='jabonCard' key={ index }>
                    <div className='jabonCard__inner'>
                        <div className='jabonCard__front'>
                            <img src={ jabon.img } alt={ jabon.name } />
                            <h3>{ jabon.name }</h3>
                            <strong>{ `$${jabon.price} Dragmas  ` }</strong>
                        </div>
                        <div className='jabonCard__back'>
                            <p>{ jabon.description }</p>
                        </div>
                    </div>
                </div>);
            })
            }
        </>
    );
}