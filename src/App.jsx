<<<<<<< HEAD
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Works from './pages/Works'
=======
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import PlaylistPublic from './pages/PlaylistPublic'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import PlaylistDetail from './pages/PlaylistDetail'
import TrackDetail from './pages/TrackDetail'
import ArtistDetail from './pages/ArtistDetail'
import Page404 from './pages/Page404'
import PrivateRoutes from './components/auth/PrivateRoutes'
>>>>>>> 578618ee33eb280a09355b9f8359f0e32f97a601

function App() {
  
  return (
<<<<<<< HEAD
    <main className='bg-primary h-full'>
      <section className='grid justify-center pt-4 md:px-2'>
      <div className='bg-white w-[270px] sm:w-[400px] sm:rounded-t-full md:w-[900px] md:rounded-t-full rounded-t-full'>
        <nav className='flex justify-between md:justify-end md:gap-6 md:pr-10 p-3 border-r-8 border-secondary rounded-tr-full font-semibold'>
          <Link className='hover:text-blue-600' to="/">Inicio</Link>
          <Link className='hover:text-blue-600' to="/blog">Curriculum</Link>
          <Link className='hover:text-blue-600' to="/works">Trabajos</Link>
        </nav>
      </div>
      </section>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/works' element={<Works />}/>
      </Routes>
    </main>
=======
    <>
      <Routes>
        {/*//? Rutas publicas */}
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/paylist/public/:id' element={<PlaylistPublic />}/>
        
        {/* //?Rutas privadas */}
        <Route element={<PrivateRoutes />}>
          
          <Route path='/' element={<Home />}/>
          <Route path='/playlists' element={<Playlist />}/>
          <Route path='/playlists/:id' element={<PlaylistDetail />}/>
          <Route path='/tracks/:id' element={<TrackDetail />}/>
          <Route path='/artists/:id' element={<ArtistDetail />}/>
        </Route>

        {/*//! 404 */}
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </>
>>>>>>> 578618ee33eb280a09355b9f8359f0e32f97a601
  )
}

export default App
