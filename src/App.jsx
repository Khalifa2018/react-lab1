import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2024 Movie Explorer. All rights reserved.</p>
            <p className="text-sm mt-2">
              Powered by{' '}
              <a 
                href="https://www.themoviedb.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                The Movie Database
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
