

import type { Task } from '../types/task'

interface StatsProps {
  tasks: Task[]
}

function Stats({ tasks }: StatsProps) {
  const total = tasks.length
  const completadas = tasks.filter(task => task.completed).length
  const pendientes = tasks.filter(task => !task.completed).length
  const porcentaje = total === 0 ? 0 : Math.round((completadas / total) * 100)

  const altas = tasks.filter(task => task.priority === 'Alta').length
  const medias = tasks.filter(task => task.priority === 'Media').length
  const bajas = tasks.filter(task => task.priority === 'Baja').length

  return (
    <div style={styles.container}>
      <div style={styles.content}>

        <div style={styles.header}>
          <h1 style={styles.title}>📊 Estadísticas</h1>
          <p style={styles.subtitle}>
            Resumen de tu progreso general
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <span style={styles.cardIcon}>📋</span>
            <span style={styles.cardNumber}>{total}</span>
            <span style={styles.cardLabel}>Total de tareas</span>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>⏳</span>
            <span style={{...styles.cardNumber, color: '#ca8a04'}}>{pendientes}</span>
            <span style={styles.cardLabel}>Pendientes</span>
          </div>
          <div style={styles.card}>
            <span style={styles.cardIcon}>✅</span>
            <span style={{...styles.cardNumber, color: '#16a34a'}}>{completadas}</span>
            <span style={styles.cardLabel}>Completadas</span>
          </div>
        </div>

        <div style={styles.progressCard}>
          <div style={styles.progressHeader}>
            <span style={styles.progressTitle}>Progreso general</span>
            <span style={styles.progressPercent}>{porcentaje}%</span>
          </div>
          <div style={styles.progressBar}>
            <div style={{
              ...styles.progressFill,
              width: `${porcentaje}%`,
            }} />
          </div>
          <p style={styles.progressText}>
            {completadas} de {total} tareas completadas
          </p>
        </div>

        <div style={styles.priorityCard}>
          <h2 style={styles.priorityTitle}>Tareas por prioridad</h2>

          <div style={styles.priorityRow}>
            <span style={styles.priorityLabel}>🔴 Alta</span>
            <div style={styles.priorityBarContainer}>
              <div style={{
                ...styles.priorityBarFill,
                width: total === 0 ? '0%' : `${Math.round((altas / total) * 100)}%`,
                backgroundColor: '#dc2626',
              }} />
            </div>
            <span style={styles.priorityCount}>{altas}</span>
          </div>

          <div style={styles.priorityRow}>
            <span style={styles.priorityLabel}>🟡 Media</span>
            <div style={styles.priorityBarContainer}>
              <div style={{
                ...styles.priorityBarFill,
                width: total === 0 ? '0%' : `${Math.round((medias / total) * 100)}%`,
                backgroundColor: '#ca8a04',
              }} />
            </div>
            <span style={styles.priorityCount}>{medias}</span>
          </div>

          <div style={styles.priorityRow}>
            <span style={styles.priorityLabel}>🟢 Baja</span>
            <div style={styles.priorityBarContainer}>
              <div style={{
                ...styles.priorityBarFill,
                width: total === 0 ? '0%' : `${Math.round((bajas / total) * 100)}%`,
                backgroundColor: '#16a34a',
              }} />
            </div>
            <span style={styles.priorityCount}>{bajas}</span>
          </div>
        </div>

        {total === 0 && (
          <div style={styles.empty}>
            <span style={styles.emptyIcon}></span>
            <p style={styles.emptyText}>
              Aún no tienes tareas. ¡Agrega algunas para ver tus estadísticas!
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    minHeight: 'calc(100vh - 60px)',
    padding: '32px 20px',
  },
  content: {
    maxWidth: '680px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '6px',
  },
  subtitle: {
    fontSize: '15px',
    color: '#6b7280',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '16px',
    marginBottom: '24px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  cardIcon: {
    fontSize: '28px',
  },
  cardNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  cardLabel: {
    fontSize: '13px',
    color: '#9ca3af',
    textAlign: 'center' as const,
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  progressTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  progressPercent: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  progressBar: {
    height: '12px',
    backgroundColor: '#e5e7eb',
    borderRadius: '999px',
    overflow: 'hidden',
    marginBottom: '8px',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4f46e5',
    borderRadius: '999px',
    transition: 'width 0.4s ease',
  },
  progressText: {
    fontSize: '13px',
    color: '#9ca3af',
  },
  priorityCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  priorityTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '20px',
  },
  priorityRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  priorityLabel: {
    fontSize: '14px',
    color: '#374151',
    width: '80px',
    flexShrink: 0,
  },
  priorityBarContainer: {
    flex: 1,
    height: '10px',
    backgroundColor: '#e5e7eb',
    borderRadius: '999px',
    overflow: 'hidden',
  },
  priorityBarFill: {
    height: '100%',
    borderRadius: '999px',
    transition: 'width 0.4s ease',
  },
  priorityCount: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#374151',
    width: '20px',
    textAlign: 'right' as const,
  },
  empty: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '32px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
  },
  emptyIcon: {
    fontSize: '40px',
    marginBottom: '12px',
  },
  emptyText: {
    fontSize: '15px',
    color: '#9ca3af',
  },
}

export default Stats