import { ReactNode } from 'react'
import Navigation from '../navigation/Navigation'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>
                <Navigation />
                {children}
            </main>
        </div>
    )
}

export default Layout
