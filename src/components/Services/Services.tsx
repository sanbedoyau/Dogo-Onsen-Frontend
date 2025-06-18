import { ServiceCard } from './ServiceCard';

export default function Services() {
    return (
			<>
				<main className="main">
					<ServiceCard title="Baños" />
					<ServiceCard title="Banquete" description="Disfruta de una variedad de platos tradicionales y modernos." />
					<ServiceCard title="Jabones" description="Explora nuestra selección de jabones artesanales." />
				</main>
			</>
    );
}