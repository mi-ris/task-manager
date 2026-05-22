

import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}> TaskManager</h1>
        <p style={styles.subtitle}>
          Bienvenido a tu gestor de tareas personal.
          Organiza tu día de forma simple y efectiva.
        </p>

        <div style={styles.features}>
          <div style={styles.feature}>
            <span style={styles.featureIcon}></span>
            <span>Agrega y completa tareas</span>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}></span>
            <span>Define prioridades</span>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}></span>
            <span>Visualiza tu progreso</span>
          </div>
        </div>

        <div style={styles.buttons}>
          <button
            style={styles.primaryButton}
            onClick={() => navigate('/tasks')}
          >
             Ir a Tareas
          </button>
          <button
            style={styles.secondaryButton}
            onClick={() => navigate('/stats')}
          >
             Ver Estadísticas
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '48px',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center' as const,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '36px',
    color: '#4f46e5',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  features: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    marginBottom: '36px',
    textAlign: 'left' as const,
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#444',
  },
  featureIcon: {
    fontSize: '20px',
  },
  buttons: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'white',
    color: '#4f46e5',
    border: '2px solid #4f46e5',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}

export default Home