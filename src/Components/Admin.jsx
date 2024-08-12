import React, { useState } from 'react';
import axios from 'axios';
import NavbarSecond from './Navbar/Navbar_second';
import MainNavbar from './Navbar/Navbar';

function Admin() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('', {
                username,
                email,
                password
            });
            
            if (response.status === 201) {
                console.log("User added successfully");
                setUsername('');
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.error("There was an error adding the user!", error);
        }
    };

    return (
        <div>
            <MainNavbar />
            <NavbarSecond />
            <div className="w-full max-w-xs m-auto mt-5">
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border' onSubmit={handleSubmit}>
                    <h1 className='text-center mb-3'>Add User</h1> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"

                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="adduser-email"
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="adduser-password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">ADD</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
