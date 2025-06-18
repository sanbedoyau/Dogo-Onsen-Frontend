// src/components/Menu/Menu.tsx
import React from 'react';
import './Menu.css'; // lo creamos en el siguiente paso

const menuItems = [
  {
    nombre: 'Ramen Miso',
    descripcion: 'Fideos artesanales en caldo miso con vegetales frescos.',
    precio: '$25.000',
    imagen: '/img/banquete.png',
  },
  {
    nombre: 'Té Verde Japonés',
    descripcion: 'Té tradicional servido caliente o frío.',
    precio: '$8.000',
    imagen: '/img/sinfoto.png',
  },
  {
    nombre: 'Dango',
    descripcion: 'Brochetas dulces de arroz, postre típico japonés.',
    precio: '$6.000',
    imagen: '/img/elixir.png',
  },
    {
        nombre: 'nectar',
        descripcion: 'Néctar de frutas frescas, ideal para refrescarse.',
        precio: '$5.000',
        imagen: '/img/nectar.png',
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
