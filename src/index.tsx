import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import store from './shared/store'
import { Provider } from 'react-redux'
import HomePage from './Pages/HomePage'
import ItemsListPage from './Pages/ItemsListPage'
import SingleProductPage from './Pages/SignalItemPage'

const router = createHashRouter([
    {
        element: <App />,
        // errorElement: <ErrorPage />,
        
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/items',
                element: <ItemsListPage />,
            },
            {
                path: '/items/:id',
                element: <SingleProductPage />,
            },
        ],
    }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
