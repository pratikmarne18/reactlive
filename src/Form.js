import React, { useState } from 'react';

const Form = () =>{

    const [fullName, setfullName] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: '',
    });

    const inputEvent = (event) =>{
        console.log(event.target.value);

        const value = event.target.value;
        const name = event.target.name;

        setfullName((prevValue) =>{
            console.log(prevValue)
            return{
                ...prevValue,
                [name]: value,
            }
        });
    }

    const onSubmits = (e) =>{
        e.preventDefault();
        alert(`First name: ${fullName.fname} Last Name: ${fullName.lname}`);
    }

    return(
        <>
        <form onSubmit={onSubmits}>
            <div>
                <h1>Hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <input type="text" className="form-control" placeholder="Enter your first name" name="fname" onChange={inputEvent} value={fullName.fname} autoComplete="off" />
                <br />
                <input type="text" className="form-control" placeholder="Enter your last name" name="lname" onChange={inputEvent} value={fullName.lname} autoComplete="off"/>
                <br />
                <input type="email" className="form-control" placeholder="Enter your email address" name="email" autoComplete="off" onChange={inputEvent} value={fullName.email}/>
                <br />
                <input type="password" className="form-control" placeholder="Enter your password" name="password" autoComplete="off" onChange={inputEvent} value={fullName.password}/>
                <br />
                <input type="number" className="form-control" placeholder="Enter your phone number" name="phone" onChange={inputEvent} value={fullName.phone} autoComplete="off"/>
                <br />
                <button type="submit" class="btn btn-primary">Click Me</button>

            </div>
        </form>
        </>
    );
}

export default Form