export function TaskCard({ id, titulo, completada, onToggle, onDelete }) {
  return (
    <div style={{
      border: '1px solid #333',
      borderRadius: '8px',
      padding: '12px 16px',
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: completada ? '#1b2e1e' : '#222',
      color: '#fff'
    }}>
      <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {titulo}
      </span>
      <div>
        <button onClick={() => onToggle(id)} style={{ marginRight: '8px' }}>
          {completada ? 'Desmarcar' : 'Completar'}
        </button>
        <button onClick={() => onDelete(id)} style={{ backgroundColor: '#ff4444', color: '#fff' }}>
          Eliminar
        </button>
      </div>
    </div>
  );
}