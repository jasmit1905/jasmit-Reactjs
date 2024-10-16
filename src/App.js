import logo from './logo.svg';
import './App.css';
import Example from './Components/Example';
import Navbar from './Components/Navbar';
// import Card from './Components/crud';
import { useState } from 'react';


function App() {
  const [category, setCategory] = useState("general")

  return (
  <>
  <Navbar setCategory={setCategory} />
  <Example category={category} />
  {/* <Crud/> */}

  </>
  );
}

export default App;