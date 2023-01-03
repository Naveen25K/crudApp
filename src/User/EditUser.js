import React, { useState, useEffect } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const EditUser = ()=>{


    const [user, setUser] = useState({
            name: "",
            username: "",
            email: ""
    });

    const {name, username, email} = user;

    const { id } = useParams();
    const history = useHistory();

    useEffect(()=>{
        loadData();
    }, []);

    const loadData = async () =>{
        const fetchData = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(fetchData.data);
    }

    const onInputChange = e =>{
        setUser({
            ...user, 
            [e.target.name]:e.target.value
        });
    }

    const onSubmitUser = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/");
    }

    return(
        <>
        
        <form onSubmit={onSubmitUser}>
        <div className="container centerContainer">
        <h2 className="text-white mb-4">Add New User</h2>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="name" value={name} onChange={e => onInputChange(e)} />
        
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">User Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="username" value={username} onChange={e => onInputChange(e)} />
        
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={email} onChange={e => onInputChange(e)} />
        
      </div>

      <button type="submit" onClick="" className="btn btn-success submitBtn">Add User</button>

      </div>

      </form>

    </>
    )
}

export default EditUser;