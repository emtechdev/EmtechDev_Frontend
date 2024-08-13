import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import Navbar_third from "./Navbar/Navbar_third";
import axios from 'axios';

function Solutions() {
    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://192.168.1.158:8000/category/');
                setCategories(response.data);
            } catch (error) {
                console.error("There was an error fetching the categories!", error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://192.168.1.158:8000/subcategory/', {
                category: selectedCategory,
                name
            });

            if (response.status === 201) {
                console.log("SubCategory added successfully");
                setSelectedCategory('');
                setName('');
            }
        } catch (error) {
            console.error("There was an error adding the SubCategory!", error);
        }
    };
  return (
    <div>
        <Navbar/>
        <Navbar_second/>
        <Navbar_third/>
        <div className="w-full max-w-xs m-auto mt-5">
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border' onSubmit={handleSubmit}>
                    <h1 className='text-center mb-3'>Add SubCategory</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category:
                        </label>
                        <select
                            id="category"
                            name="category"
                            autoComplete="category"
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
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

export default Solutions