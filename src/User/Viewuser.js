import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const Viewuser = ()=>{


    const [user, setUser] = useState({
            name: "",
            username: "",
            email: ""
    });

    const {name, username, email} = user;

    const { id } = useParams();

    useEffect(()=>{
        loadData();
    }, []);

    const loadData = async () =>{
        const fetchData = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(fetchData.data);
    }

    return(
        <>
        
        <div className="viewUser">
        <Link exact="true" to="/" className="btn btn-danger backToHome">Back To Home</Link> 
        <ul class="list-group">
        <li class="list-group-item"><p className="label">Name:</p> {name}</li>
        <li class="list-group-item"><p className="label">User Name:</p> {username}</li>
        <li class="list-group-item"><p className="label">Email:</p> {email}</li>
        </ul>
        </div>
    </>
    )
}

export default Viewuser;