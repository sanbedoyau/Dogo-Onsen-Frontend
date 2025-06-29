import JabonCard from './JabonCard';
import jabones from '../../data/Jabones.json';
import './JabonesService.css'

export default function JabonService() {
    return (
        <>
            <div className='jabonContainer'>
                <h2>Jabones del Onsen</h2>
                <div className='jabonGrid'>
                    <JabonCard jabones={jabones}/>
                </div>
            </div>
        </>
    );
}