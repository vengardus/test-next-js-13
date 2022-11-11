import Link from "next/link"
import style from '../styles/Navigation.module.css'


const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Posts',
  route: '/posts'
}]

export default function Navigation() {
  return (
    <header className={style.header}>
      <nav >
        <ul className={style.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}