import Header from './componentes/header/Header';
import './App.css';
import Book from './componentes/book/Book';
import Footer from './componentes/footer/Footer';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Header handleOpen={handleOpen}/>
      <Book open={open}/>
      <Footer/>
    </>
    
  );
}

export default App;
