import './App.scss'
import Navigation from './features/navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './features/footer/Footer'

const App: React.FC = () => {
    return (
        <main>
            <Navigation />
            <Outlet />
            <div className="mt-5">
                <Footer />
            </div>
        </main>
    )
}

export default App
