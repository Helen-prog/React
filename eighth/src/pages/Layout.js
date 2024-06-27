import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout(){
    return (
        <>
            <Header />
            <main className='content'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;