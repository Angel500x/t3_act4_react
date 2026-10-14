export function ProductCard({ nombre, precio, emoji, esModoOscuro, onAgregar }) {
  return (
    <div style={{
     // border: esModoOscuro ? '1px solid #444' : '1px solid #ddd',
      backgroundColor: esModoOscuro ? '#2a2a2a' : '#ffffff',
      color: esModoOscuro ? '#ffffff' : '#333333',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      border: '2px solid blue'
    }}>
      <div style={{ fontSize: '40px' }}>{emoji}</div>
      <h3>{nombre}</h3>
      <p style={{ fontWeight: 'bold' }}>${precio} MXN</p>
      <button 
        onClick={onAgregar}
        style={{
          backgroundColor: '#02ff85',
          color: '#000',
          border: 'none',
          padding: '4px 50px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        + Agregar
      </button>
    </div>
  );
}