import BañoCard from './BañoCard';
import baños from '../../data/Baños.json';
import './BañosService.css';

export default function BañosService() {
    return (
        <>
            <div className='bañosContainer'>
                <h2>Baños del Onsen</h2>
                <div className='bañosGrid'>
                    <BañoCard baños={baños} />
                </div>
            </div>
        </>
    );
}