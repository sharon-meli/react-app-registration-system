import { useState } from "react";
import "./style.css"


function Form({addPatient,patient, handlePatientData,formState}){

    function handleChange(event){
        // alert(event.target.name+" : "+event.target.value)
        handlePatientData(event.target.name, event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(formState==="post"){
        const dataToSubmit={...patient}
        delete dataToSubmit.id
        addPatient(dataToSubmit);
        }else{
        addPatient(patient)
        }
    }

    return (
    <div className="form">
        <form onSubmit={handleSubmit} className="patientForm">
        
        <label  className="form-label">Patient's id</label>
        <input onChange={handleChange}  value={patient.id} type="number" className="form-control" id="idInput" placeholder="Enter your id" disabled/>
        

        <label  className="form-label">Patient's Name</label>
        <input onChange={handleChange} value={patient.name} name="name" type="text" className="form-control" id="nameInput" placeholder="Enter your Full Name"/>

        <label  className="form-label">Gender</label>
        <input onChange={handleChange} value={patient.gender} name="gender"type="text" className="form-control" id="genderInput" placeholder ="Enter your gender"/>

        <label  className="form-label">Age</label>
        <input onChange={handleChange} value ={patient.age} name ="age"type="number" className="form-control" id="ageInput" placeholder="Enter your age"/>

        <label className="form-label">Residence</label>
        <input onChange={handleChange} value={patient.residence} name="residence"type="text" className="form-control" id="residenceInput" placeholder ="Enter your place of residence"/>
        
        <label  className="form-label">Date</label>
        <input onChange={handleChange} value={patient.date} name="date"type="date" className="form-control" id="dateInput" placeholder ="Date"/>

        <label  className="form-label">Weight</label>
        <input onChange={handleChange} value={patient.weight} name ="weight"type="number" className="form-control" id="weightInput"  placeholder="Enter your weight"/>
        <br/>
        <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
)
}
export default Form;