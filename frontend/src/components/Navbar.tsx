// src/components/Navbar.tsx

import { Link, useLocation } from 'react-router-dom'
import { Button } from 'antd'

function Navbar() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: ' Inicio' },
    { path: '/tasks', label: ' Tareas' },
    { path: '/stats', label: ' Estadísticas' },
  ]

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}> TaskManager</span>
      <div style={styles.links}>
        {navItems.map(item => (
          <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
            <Button
              type={location.pathname === item.path ? 'primary' : 'text'}
              style={{
                color: location.pathname === item.path ? 'white' : 'rgba(255,255,255,0.75)',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              }}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4f46e5',
    padding: '12px 32px',
  },
  logo: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '8px',
  },
}

export default Navbar