import styles from './page.module.css'
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to React</h1>
      <button>Simple Button</button>
      <Button variant="primary">Primary</Button>
    </main>
  )
}
