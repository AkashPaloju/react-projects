import { useState } from "react";
import axios from "axios" ;

function SampleForm () {

  const [formData, setFormData] = useState ({
    username: "",
    address: "",
    isOrphan: false,
    employment: "",
    age : 0,
    favColor : "",
  })

  const [state, setState] = useState({})


  // MOST IMPORTANT THING TO REMEMBER
  // You need to give each input a name attribute(name should be same as in object key) 
  // For controlled components,
  // and make the each input 'value' equal to the corresponding value of 'name' of state object


  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value 
      }
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault(); // prevent default behavior of refreshing the page
    
    try {

      console.log(formData)
      const result = await axios.post("http://localhost:8000/api/result",formData);
      console.log(result);
      setState(result.data);

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form className="sampleform" onSubmit = {handleSubmit}>

      {/* ----- TEXT INPUT ----- */}
      <label htmlFor="username" >Username</label>
      <input 
        type="text"
        placeholder="Username"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      {/* ----- TEXTAREA INPUT ----- */}
      <label htmlFor="address" >Address</label>
      <textarea
        placeholder="Address"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      {/* ----- CHECKBOX INPUT ----- */}
      <label htmlFor="isOrphan" >Are You an Orphan</label>
      <input 
        type="checkbox"
        id="isOrphan"
        name="isOrphan"
        checked={formData.isOrphan}
        onChange={handleChange}
      />

      {/* ----- RADIO INPUT ----- */}
      <legend>Employment Status</legend><br></br>
      <label htmlFor="unemployed" >Unemployed</label>
      <input 
        type="radio"
        id="unemployed"
        name="employment"
        value="unemployed"
        checked={formData.employment === "unemployed"}
        onChange={handleChange}
      />
      <label htmlFor="part-time" >Part-time</label>
      <input 
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        checked={formData.employment === "part-time"}
        onChange={handleChange}
      />
      <label htmlFor="full-time" >Full-time</label>
      <input 
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        checked={formData.employment === "full-time"}
        onChange={handleChange}
      />
      

      {/* ----- RANGE INPUT ----- */}
      <label htmlFor="age" >Age</label>
      {/* Age range input */}
      <input 
        type="range"
        id="age"
        name="age"
        min="0"
        max="100"
        value={formData.age}
        onChange={handleChange}
      />
      

      {/* ----- NUMBER INPUT ----- */}
      <input 
        type="number"
        id="age"
        name="age"
        min="0"
        max="100"
        value={formData.age}
        onChange={handleChange}
      /> <br></br>


      {/* ----- DROPDOWN/SELECT INPUT ----- */}
      <label htmlFor="favColor" >Favorite Color</label>
      <select 
        id="favColor"
        name="favColor"
        value={formData.favColor}
        onChange={handleChange} 
      >
        <option value="">--Choose--</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>


      {/* SUBMIT  BY DEFAULT BUTTON IN A FORM ELEMENT IS TREATED AS SUBMIT BUTTON BY REACT */}
      <button>Submit</button>


    </form>
  )

}

export default SampleForm;