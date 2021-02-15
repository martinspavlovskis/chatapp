import React, {useState} from 'react';
import axios from 'axios'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit= async (e) => {
        e.preventDefault();

        const authObject = 
        {'Project-ID':'97cbeb2f-bc03-4034-90a7-5e75147b2855',
        'User-Name': username,
        'User-Secret': password}

        try {
           await axios.get('https://api.chatengine.io/chats', {headers: authObject})
            
           localStorage.setItem('username', username);
           localStorage.setItem('password', password);

           window.location.reload(); 
        } catch (error) {
            setError('Oops, incorrect username or password')
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>chat app</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    required
                    className='input'
                    placeholder='username' 
                    type='text' 
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}/>
                    <input
                    required
                    className='input'
                    placeholder='password' 
                    type='password' 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}/>
                    <div align='center'>
                        <button 
                        type='submit'
                        className='button'>
                        <span>log in</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
