
import { Outlet } from 'react-router-dom'
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Header from './components/Header'


const App = () => {
return (
    <>
    <Header />
    <NavTabs />
    <main>
    <Outlet />
    </main>
    <Footer />
    

    </>
)
} 

export default App;
