import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form.js';
import Header from './components/Header.js';

import Logo from './components/Logo.js';
import Table from './components/Table.js'

function App() {
  const [table,setTable] = useState([])
  useEffect( ()=> {
    fetch("http://localhost:3000/patientDetails")
    .then(resp => resp.json())
    .then(data => setTable(data))
  },[])
console.log(table);
const displayData = table.map((array)=>{
return(
  <tr key={array.id}>
    <td>{array.id}</td>
    <td>{array.name}</td>
    <td>{array.gender}</td>
    <td>{array.age}</td>
    <td>{array.residence}</td>
    <td>{array.date}</td>
    <td>{array.weight}</td>
  </tr>
)
})
  return (
    <div className="App">
      <Logo/>
      <Header/>
      <Form/>
      <Table displayData={displayData}/>
    </div>
  );
}

export default App;
