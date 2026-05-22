

import type { Task } from '../types/task'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

interface TasksProps {
  tasks: Task[]
  onAdd: (task: Task) => void
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

function Tasks({ tasks, onAdd, onDelete, onToggle }: TasksProps) {
  const pendientes = tasks.filter(task => !task.completed).length
  const completadas = tasks.filter(task => task.completed).length

  return (
    <div style={styles.container}>
      <div style={styles.content}>

        <div style={styles.header}>
          <h1 style={styles.title}>✅ Mis Tareas</h1>
          <p style={styles.subtitle}>
            Gestiona y organiza tus tareas del día
          </p>
        </div>

        <div style={styles.counters}>
          <div style={styles.counter}>
            <span style={styles.counterNumber}>{tasks.length}</span>
            <span style={styles.counterLabel}>Total</span>
          </div>
          <div style={styles.divider} />
          <div style={styles.counter}>
            <span style={{
              ...styles.counterNumber,
              color: '#ca8a04',
            }}>
              {pendientes}
            </span>
            <span style={styles.counterLabel}>Pendientes</span>
          </div>
          <div style={styles.divider} />
          <div style={styles.counter}>
            <span style={{
              ...styles.counterNumber,
              color: '#16a34a',
            }}>
              {completadas}
            </span>
            <span style={styles.counterLabel}>Completadas</span>
          </div>
        </div>

        <TaskForm onAdd={onAdd} />
        <TaskList
          tasks={tasks}
          onDelete={onDelete}
          onToggle={onToggle}
        />

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
  counters: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    gap: '0',
  },
  counter: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    flex: 1,
    gap: '4px',
  },
  counterNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  counterLabel: {
    fontSize: '13px',
    color: '#9ca3af',
  },
  divider: {
    width: '1px',
    height: '40px',
    backgroundColor: '#e5e7eb',
  },
}

export default Tasks