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
    <div style={{
      backgroundColor: esModoOscuro ? '#121212' : '#f4f4f9',
      color: esModoOscuro ? '#ffffff' : '#000000',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      transition: 'all 0.3s ease'
    }}>
      {/* Botón para alternar Modo Oscuro / Claro (useState #2) */}
      <div style={{ textAlign: 'right', maxWidth: '800px', margin: '0 auto 10px auto' }}>
        <button 
          onClick={() => setEsModoOscuro(!esModoOscuro)}
          style={{
            padding: '8px 12px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: esModoOscuro ? '#ffffff' : '#222222',
            color: esModoOscuro ? '#000000' : '#ffffff'
          }}
        >
          {esModoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* a) Componente funcional simple */}
        <Header />

        {/* Sección de resumen del Carrito (useState #1) */}
        <div style={{
          backgroundColor: esModoOscuro ? '#1e1e1e' : '#e0e0e0',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center',
          margin: '20px 0',
          border: '2px solid blue'
        }}>
          <h2> Carrito </h2>
          <p style={{ fontSize: '18px' }}>Productos agregados: <strong>{carritoCount}</strong></p>
          <button 
            onClick={vaciarCarrito}
            style={{
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              padding: '6px 80px',
              borderRadius: '4px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            Vaciar Carrito
          </button>
        </div>

        {/* d) Renderizado dinámico usando .map() */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '15px',
          textAlign: 'center'
        }}>
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


