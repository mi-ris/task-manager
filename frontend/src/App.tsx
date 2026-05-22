// src/App.tsx

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Stats from './pages/Stats'
import type { Task } from './types/task'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={
          <Tasks
            tasks={tasks}
            onAdd={addTask}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        } />
        <Route path="/stats" element={<Stats tasks={tasks} />} />
      </Routes>
    </div>
  )
}

export default App