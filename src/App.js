import logo from './logo.svg';
import './App.css';
import PersonalInfo from './pages/PersonalInfo';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    hobbies: "",
    image: null,
    degree:"",
    fieldofstudy:"",
    institution:"",
    gradyear:""
  })
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }
  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name] : value
      }
    })
  }
  return (
    <div className="App">
      <PersonalInfo name={formData.name} 
                    email={formData.email}
                    address={formData.address}
                    hobbies={formData.hobbies}
                    image={formData.image}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
