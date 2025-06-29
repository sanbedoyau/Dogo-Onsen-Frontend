import MenuCard from './MenuCard';
import menus from '../../data/Menu.json';
import './MenuService.css';

export default function MenuService() {
    return (
        <>
            <div className='menuContainer'>
                <h2>Menú del Onsen</h2>
                <div className='menuGrid'>
                    <MenuCard menus={menus}/>
                </div>
            </div>
        </>
    );
}