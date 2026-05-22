

import type { Task } from '../types/task'
import TaskItem from './TaskItem'

interface TaskListProps {
  tasks: Task[]
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div style={styles.empty}>
        <span style={styles.emptyIcon}></span>
        <p style={styles.emptyText}>No tienes tareas todavía</p>
        <p style={styles.emptySubtext}>
          Agrega una tarea usando el formulario de arriba
        </p>
      </div>
    )
  }

  const pendientes = tasks.filter(task => !task.completed)
  const completadas = tasks.filter(task => task.completed)

  return (
    <div>

      {pendientes.length > 0 && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
             Pendientes ({pendientes.length})
          </h3>
          {pendientes.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}

      {completadas.length > 0 && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
             Completadas ({completadas.length})
          </h3>
          {completadas.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}

    </div>
  )
}

const styles = {
  empty: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 24px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  emptyIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  emptyText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: '8px',
  },
  emptySubtext: {
    fontSize: '14px',
    color: '#9ca3af',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#6b7280',
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: '1px solid #e5e7eb',
  },
}

export default TaskList