import './Header.css';

function Header(){
    return <div className="header">
        <div className="wrap">
            <div className="logo"><a href="/">Food</a></div>
            <div className="right">
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;