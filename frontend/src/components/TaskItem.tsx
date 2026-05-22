// src/components/TaskItem.tsx

import { Button, Tag } from 'antd'
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'
import type { Task } from '../types/task'

interface TaskItemProps {
  task: Task
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

const priorityColor = {
  Alta: 'red',
  Media: 'gold',
  Baja: 'green',
}

function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
  return (
    <div style={{
      ...styles.container,
      backgroundColor: task.completed ? '#f9fafb' : 'white',
      borderLeft: `4px solid ${task.completed ? '#d1d5db' : '#4f46e5'}`,
    }}>
      <div style={styles.left}>
        <Button
          shape="circle"
          type={task.completed ? 'primary' : 'default'}
          icon={<CheckOutlined />}
          onClick={() => onToggle(task.id)}
          size="small"
        />
        <div style={styles.info}>
          <span style={{
            ...styles.title,
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#9ca3af' : '#1f2937',
          }}>
            {task.title}
          </span>
          <Tag color={priorityColor[task.priority]}>
            {task.priority}
          </Tag>
        </div>
      </div>

      <div style={styles.right}>
        <Tag color={task.completed ? 'success' : 'default'}>
          {task.completed ? '✅ Completada' : '⏳ Pendiente'}
        </Tag>
        <Button
          danger
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(task.id)}
          size="small"
        />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderRadius: '10px',
    marginBottom: '12px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    gap: '12px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    flex: 1,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  title: {
    fontSize: '15px',
    fontWeight: '500',
  },
}

export default TaskItem