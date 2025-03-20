import nav from './nav.module.css'
export function Nav () {
    return (
        <nav className={nav.nav}>
            <ul>
                <li><a href="#hero">&gt; back to Top</a></li>
                <li><a href="#sec1">My Skillset</a></li>
            </ul>
        </nav>
    )
}