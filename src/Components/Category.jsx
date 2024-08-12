import React, { useState } from 'react'
import MainNavbar from './Navbar/Navbar'
import NavbarSecond from './Navbar/Navbar_second'
import axios from 'axios';

function Category() {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('', {
                name
            });
            
            if (response.status === 201) {
                console.log("Category added successfully");
                setName('');
            }
        } catch (error) {
            console.error("There was an error adding the category!", error);
        }
    };
  return (
    <div>
        <MainNavbar/>
        <NavbarSecond/>
        <div className="w-full max-w-xs m-auto mt-5">
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border' onSubmit={handleSubmit}>
                    <h1 className='text-center mb-3'>Add Category</h1> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            required
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">ADD</button>
                </form>
            </div>
    </div>
  )
}

export default Category