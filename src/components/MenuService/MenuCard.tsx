interface Menu {
    name: string;
    description: string | string[];
    price: number;
    img: string;
}

interface MenuCardProps {
    menus: Menu[];
}

const MenuCard = ({ menus }: MenuCardProps) => {
    return (
        <>
            {menus.map((menu, index) => {
                return (<div className='menuCard' key={ index }>
                    <img src={ menu.img } alt={ menu.name } />
                    <h3>{ menu.name }</h3>
                    <p>{ menu.description }</p>
                    <strong>{ `$${menu.price} Dragmas` }</strong>
                </div>);
            })}
        </>
    );
}

export default MenuCard;