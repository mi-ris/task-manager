// src/components/TaskForm.tsx

import { useState } from 'react'
import { Button, Card, Form, Input, Select, Typography } from 'antd'
import type { Task } from '../types/task'

const { Title } = Typography

interface TaskFormProps {
  onAdd: (task: Task) => void
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<Task['priority']>('Media')

  const handleSubmit = () => {
    if (title.trim() === '') return

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      priority,
      completed: false,
    }

    onAdd(newTask)
    setTitle('')
    setPriority('Media')
  }

  return (
    <Card style={styles.card}>
      <Title level={4} style={styles.formTitle}>Nueva Tarea</Title>

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Nombre de la tarea"
          validateStatus={title.trim() === '' ? '' : 'success'}
        >
          <Input
            placeholder="Ej: Estudiar React..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="large"
          />
        </Form.Item>

        <Form.Item label="Prioridad">
          <Select
            value={priority}
            onChange={(value) => setPriority(value)}
            size="large"
            options={[
              { value: 'Alta', label: '🔴 Alta' },
              { value: 'Media', label: '🟡 Media' },
              { value: 'Baja', label: '🟢 Baja' },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            disabled={title.trim() === ''}
          >
            ➕ Agregar Tarea
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

const styles = {
  card: {
    borderRadius: '12px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  formTitle: {
    color: '#4f46e5',
    marginBottom: '16px',
  },
}

export default TaskForm