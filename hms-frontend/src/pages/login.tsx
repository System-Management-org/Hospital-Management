import axios from "axios";
import { useState } from "react"

function Login(){
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');

    const submit = async (e:any) => {
        e.preventDefault();
        const user = {
            username:username,
            password:password
        };
        const {data} = await axios.post('http://localhost:8000/token/', user); 
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/doctor'
        
    }


    return(
        <>
                <h1>LOGIN</h1>
        <form onSubmit={submit}>
            <input placeholder="username" name="username" type="text" value={username} required onChange={e => setusername(e.target.value)}/>
            <input placeholder="password" name="password" type="password" value={password} required onChange={e => setpassword(e.target.value)}/>
            <button type="submit">login</button>
        </form>
        </>
    )
}

export default Login