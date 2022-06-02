import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Login.css';


const Login = () => {

    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        console.log(userName);
        dispatch({
            type: "GET_USERNAME",
            payload: userName
        });
        setUserName("");
        navigate("/pokedex");
    };

    return (
        <div className="card-login">
            <h2 className='title1'>Let's Catch Them All... </h2>
            <h3 className='title2'>..But first your name?</h3>

            <form
                action=""
                onSubmit={submit}

            >
                <input
                    type="text"
                    placeholder='name..?'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="submit"
                    value='Ok'

                />
            </form>
        </div>
    );
};

export default Login;