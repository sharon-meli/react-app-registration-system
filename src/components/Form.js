function Form(){
    return(
        <div>
<form className="patientForm" class="patientDetails">
       
       <label  class="form-label">Patient's id</label>
       <input type="number" class="form-control" id="idInput" placeholder="Enter your id"/>
       

       <label  class="form-label">Patient's Name</label>
       <input type="text" class="form-control" id="nameInput" placeholder="Enter your Full Name"/>

       <label  class="form-label">Gender</label>
       <input type="text" class="form-control" id="genderInput" placeholder ="Enter your gender"/>

       <label  class="form-label">Age</label>
       <input type="number" class="form-control" id="ageInput" placeholder="Enter your age"/>

       <label  class="form-label">Residence</label>
       <input type="text" class="form-control" id="residenceInput" placeholder ="Enter your place of residence"/>
      
       <label  class="form-label">Date</label>
       <input type="date" class="form-control" id="dateInput" placeholder ="Date"/>

       <label  class="form-label">Weight</label>
       <input type="number" class="form-control" id="weightInput"  placeholder="Enter your weight"/>
       <br/>
       <button type="submit" class="btn btn-success">Submit</button>
     </form>
        </div>
)
}
export default Form;