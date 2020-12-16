import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'

const teamMembers = [{ 
  firstName:'Jacob',
  lastName:'Stephens',
  email:'jacobstephens.work@gmail.com',
  role:'Student',
}]

const initialState = {
  firstName:'',
  lastName:'',
  email:'', 
  role:'',
}

const StyledPlayerCard = styled.div`
display:flex;
flex:wrap;
flex-direction:column;
align-items:center;
border:1px red solid;
width:75%;
margin:2rem;
`

const StyledPage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:100%;
width:100%;


`

const CardLayout = styled.div`
max-width:100%;
display:flex;
flex:wrap;
justify-content:space-around;
flex-direction:row;

`



function SimpleTeam() {
  
  const [members, setMembers] = useState(teamMembers);

  const [team, setTeam] = useState(initialState);
  
  const updateForm = (inputName, inputValue) => {
    
    setTeam({...team, [inputName]: inputValue});
  };

  const submitForm = (event) => {
    const newMember = {
      firstName: team.firstName,
      lastName: team.lastName,
      email: team.email,
      role: team.role
    };

    setMembers(members.concat(newMember));
    setTeam(initialState);

  };

const onSubmit = (event) => {
  event.preventDefault();
  submitForm()
}

const onChange = (event) =>{
  const { name, value } = event.target;
  updateForm(name, value)
}
  return (

    <StyledPage>
      <h2>Current Team</h2>

      <CardLayout>
      {members.map((member, key) => {
        return (
          <StyledPlayerCard key={key}>
            <h2>
              Name: {member.firstName} {member.lastName}
            </h2>
            <h3>
              Email: {member.email}
            </h3>
            <h3>
              Role: {member.role}
            </h3>
          </StyledPlayerCard>
        );
      })}
      </CardLayout>   
      
      <h1>Add Team Member Below</h1>

      <form onSubmit={onSubmit}>
        <input
          placeholder="Enter First Name"
          name="firstName"
          type="text"
          value={members.firstName}
          onChange={onChange}
          >
        </input>

        <input
          placeholder="Enter Last Name"
          name="lastName"
          type="text"
          value={members.lastName}
          onChange={onChange}
          >
        </input>

        <input
        placeholder="Enter Email"
        name="email"
        type="text"
        value={members.email}
        onChange={onChange}
        >
        </input>
        
        <select 
        name="role"
        type="text"
        value={members.role}
        onChange={onChange}>
          <option>-----Select Role-----</option>
          <option>Instructor</option>
          <option>Student</option>
          <option>Web Developer</option>
          <option>Faculty Member</option>
        </select>
        <button>Submit</button>
      </form>
    </StyledPage>
  );
}


ReactDOM.render(

  <React.StrictMode>
    
    {/* <App /> */}
    
    <SimpleTeam  />
  
  </React.StrictMode>,
  
  document.getElementById('root')

  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
