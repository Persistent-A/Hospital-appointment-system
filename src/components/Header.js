

const Header = ({showHome}) => {
  return (
    <header className="header-main">
        <h1>MC</h1>
        <nav className='nav-main'>
            <ul className="nav-main-links">
                <li onClick={showHome}>Home</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
