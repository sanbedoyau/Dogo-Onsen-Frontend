import Navbar from '../components/Navbar/Navbar';
import { BathServices_Home } from '../components/BathServices/BathService';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main className='main'>
                <BathServices_Home />
            </main>
        </>
    );
}