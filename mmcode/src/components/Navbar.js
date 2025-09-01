import '../styles/Navbar.css'
function Navbar() {
    return (
        <div className='Nav'>
            <ul>
                <li><a href="/">Domov</a></li>
                <li><a href="/Projects">Projekty</a></li>
                <li><a href="/Contacts">Kontakty</a></li>
            </ul>
            
        </div>
        );
}
export default Navbar;