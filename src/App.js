import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form.js';
import Header from './components/Header.js';
import Table from './components/Table.js';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [table,setTable] = useState([])
  const [search,setSearch] = useState("")
  const [formState,setFormState] = useState("post")
  const [patient,setPatient] = useState({
    id:0,
    name:"",
    gender:"",
    age:"",
    residence:"",
    date:"",
    weight:"",
  })
  const [showForm,setShowForm]=useState(false)

  useEffect( ()=> {
    fetch("http://localhost:3000/patientDetails?q="+search)
    .then(resp => resp.json())
    .then(data => setTable(data))
  },[search])
  function handleSearch(e){
    setSearch(e.target.value)
  }

  function handlePatientData(key, value) {
    setPatient({...patient,[key]: value})
  }

  function addPatient(formData){
    if (formState==="post"){
        fetch("http://localhost:3000/patientDetails",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(data=>setTable([data,...table]));
    }else{
    fetch(`http://localhost:3000/patientDetails/${formData.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then(response=>response.json())
    .then(data=>{
      setTable(table.map(patient =>{
        if(patient.id === data.id){
          return data
        }else{
          return patient
        }
      }))
    });
    }
  }

  function deletePatient(id){
    fetch(`http://localhost:3000/patientDetails/${id}`,{
      method:"DELETE"
    })
    setTable(table.filter(patient => patient.id !== id))
  }
  function handleEdit(id){
    setPatient(table.find(person => person.id === id))
  }

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
    <td className='delete-button'><button onClick={() => {
      deletePatient(array.id)
    }}>x</button></td>
    <td  onClick={()=>{
      handleEdit(array.id)
      setFormState("patch")
    }}><span className='editing'>Edit</span></td>
  </tr>
)
})
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      
      <Routes>
          <Route path="/" element={
          <>
          <Search handleSearch={handleSearch}showForm={showForm}setShowForm={setShowForm}/>
          <div className='main'>
          {showForm?<Form formState={formState} patient={patient} handlePatientData={handlePatientData}  addPatient={addPatient}/>:null}
          <Table displayData={displayData}/>
          </div>
          </>
          }/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
  );
}

export default App;
