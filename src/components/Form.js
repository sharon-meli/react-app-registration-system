import "./style.css"


function Form(){
    return(
        <div>
<form className="patientForm">
       
       <label  className="form-label">Patient's id</label>
       <input type="number" className="form-control" id="idInput" placeholder="Enter your id"/>
       

       <label  className="form-label">Patient's Name</label>
       <input type="text" className="form-control" id="nameInput" placeholder="Enter your Full Name"/>

       <label  className="form-label">Gender</label>
       <input type="text" className="form-control" id="genderInput" placeholder ="Enter your gender"/>

       <label  className="form-label">Age</label>
       <input type="number" className="form-control" id="ageInput" placeholder="Enter your age"/>

       <label  className="form-label">Residence</label>
       <input type="text" className="form-control" id="residenceInput" placeholder ="Enter your place of residence"/>
      
       <label  className="form-label">Date</label>
       <input type="date" className="form-control" id="dateInput" placeholder ="Date"/>

       <label  className="form-label">Weight</label>
       <input type="number" className="form-control" id="weightInput"  placeholder="Enter your weight"/>
       <br/>
       <button type="submit" className="btn btn-success">Submit</button>
     </form>
        </div>
)
}
export default Form;