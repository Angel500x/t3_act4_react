/*import TodoApp from "./components/TodoApp";
import { useState } from "react";
import "./index.css";

function App() {
  /*
  const titulosApp = {
    tituloApp: "Soy Todo App",
    subtituloApp: "Soy subtitulo App"
  };
  {...titulosApp} en return TodoApp
  */
/*
  return (
    <section className="containerTodoApp">
      <TodoApp />
    </section>
  );
}

export default App;*/

import { useState } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import './App.css';

export function App() {
  // c) useState #1: Contador de productos en el carrito
  const [carritoCount, setCarritoCount] = useState(0);

  // c) useState #2: Interruptor de Modo Oscuro / Modo Claro
  const [esModoOscuro, setEsModoOscuro] = useState(true);

  // d) Arreglo de productos para renderizar con .map()
  const productos = [
    { id: 1, nombre: 'Manzana', precio: 5, emoji: '🍎' },
    { id: 2, nombre: 'Pera', precio: 12, emoji: '🍐' },
    { id: 3, nombre: 'Sandia', precio: 45, emoji: '🍉' },
    { id: 4, nombre: 'Naranja', precio: 3, emoji: '🍊' }
  ];

  const agregarAlCarrito = () => {
    setCarritoCount(carritoCount + 1);
  };

  const vaciarCarrito = () => {
    setCarritoCount(0);
  };

  return (
    <div className={`app-container ${esModoOscuro ? 'modo-oscuro' : 'modo-claro'}`}>
      {/* Botón para alternar Modo Oscuro / Claro (useState #2) */}
      <div className="theme-toggle-wrapper">
        <button 
          onClick={() => setEsModoOscuro(!esModoOscuro)}
          className={`theme-toggle-btn ${esModoOscuro ? 'oscuro' : 'claro'}`}
        >
          {esModoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>

      <div className="content-wrapper">
        {/* a) Componente funcional simple */}
        <Header />

        {/* Sección de resumen del Carrito (useState #1) */}
        <div className={`cart-section ${esModoOscuro ? 'oscuro' : 'claro'}`}>
          <h2>Carrito</h2>
          <p className="cart-text">
            Productos agregados: <strong>{carritoCount}</strong>
          </p>
          <button onClick={vaciarCarrito} className="clear-cart-btn">
            Vaciar Carrito
          </button>
        </div>

        {/* d) Renderizado dinámico usando .map() */}
        <div className="products-grid">
          {productos.map((producto) => (
            /* b) Componente que recibe props */
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              emoji={producto.emoji}
              esModoOscuro={esModoOscuro}
              onAgregar={agregarAlCarrito}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


