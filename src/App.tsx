import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './assets/component/Navbar';
import HomePage from './assets/page/Home';
import Footer from './assets/component/Footer';

function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}

export default App
