import { ServiceCard } from './ServiceCard';

export function BathServices_Home() {
    return (
			<>
				<section className="services">
					<ServiceCard title="Baños" />
					<ServiceCard title="Banquete" description="Disfruta de una variedad de platos tradicionales y modernos." />
					<ServiceCard title="Jabones" description="Explora nuestra selección de jabones artesanales." />
				</section>
			</>
    );
}