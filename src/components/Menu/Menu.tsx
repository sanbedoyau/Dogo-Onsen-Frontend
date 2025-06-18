// src/components/Menu/Menu.tsx
import React from 'react';
import './Menu.css'; // lo creamos en el siguiente paso
import banquete from '../../assets/img/banquete.png';
import elixir from '../../assets/img/elixir.jpg';
import sinfonia from '../../assets/img/sinfonia.jpg';
import nectar from '../../assets/img/nectar.jpg';

const menuItems = [
  {
    nombre: 'Banquete diario',
    descripcion: 'Fideos artesanales en caldo miso con vegetales frescos.',
    precio: '$25.000',
    imagen: banquete,
  },
  {
    nombre: 'Elixir de Té Verde',
    descripcion: 'Un delicado té de hierbas, de un verde esmeralda vibrante, en una taza singularmente pintada. El vapor, etéreo y danzarín, evoca la tranquilidad de un jardín escondido en el reino de los espíritus.',
    precio: '$8.000',
    imagen: elixir,
  },
  {
    nombre: 'Sinfonía de Vapor del Balneario',
    descripcion: 'Una acogedora selección de tés y cafés, servidos en tazas artesanales.    El vapor se eleva como un suave susurro mágico, invitando a la calma en cualquier rincón de tu página.',
    precio: '$6.000',
    imagen: sinfonia,
  },
  {
    nombre: 'Néctar Glacial del Río Dragón',
    descripcion: 'Una bebida fría y refrescante, presentada en un recipiente místico que recuerda los tesoros del balneario. Sus colores vibrantes y el toque de fantasía capturan la esencia mágica de un verano',
    precio: '$5.000',
    imagen: nectar,
  }
];

export default function Menu() {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Menú del Balneario</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <strong>{item.precio}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
