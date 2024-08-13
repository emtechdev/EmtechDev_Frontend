import React, { useState, useEffect } from 'react'
import MainNavbar from './Navbar/Navbar'
import NavbarSecond from './Navbar/Navbar_second'
import Navbar_third from './Navbar/Navbar_third'
import axios from 'axios';

function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [series, setSeries] = useState('');
    const [manfacturer, setManfacturer] = useState('');
    const [origin, setOrigin] = useState('');
    const [eg_stock, setEg_stock] = useState(0);
    const [ae_stock, setAe_stock] = useState(0);
    const [tr_stock, setTr_stock] = useState(0);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    useEffect(() => {
        const fetchSubcategories = async () => {
            try {
                const response = await axios.get('http://192.168.1.158:8000/subcategory/');
                setSubcategories(response.data);
            } catch (error) {
                console.error("There was an error fetching the subcategories!", error);
            }
        };

        fetchSubcategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://192.168.1.158:8000/product/', {
                subcategory: selectedSubcategory,
                name,
                series,
                description,
                manfacturer,
                origin,
                eg_stock,
                ae_stock,
                tr_stock
            });

            if (response.status === 201) {
                console.log("Product added successfully");
                setSelectedSubcategory('');
                setName('');
                setSeries('');
                setManfacturer('');
                setOrigin('');
                setDescription('');
                setEg_stock(0);
                setAe_stock(0);
                setTr_stock(0);
            }
        } catch (error) {
            console.error("There was an error adding the product!", error);
        }
    };
    return (
        <div>
            <MainNavbar />
            <NavbarSecond />
            <Navbar_third />
            <div className="w-full max-w-xs m-auto mt-5">
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border' onSubmit={handleSubmit}>
                    <h1 className='text-center mb-3'>Add Product</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subcategory">
                            SubCategory:
                        </label>
                        <select
                            id="subcategory"
                            name="subcategory"
                            autoComplete="subcategory"
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                            value={selectedSubcategory}
                            onChange={(e) => setSelectedSubcategory(e.target.value)}
                        >
                            <option value="">Select Subcategory</option>
                            {subcategories.map((subcategory) => (
                                <option key={subcategory.id} value={subcategory.id}>
                                    {subcategory.name}
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="series">
                            series:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="series"
                            type="text"
                            required
                            placeholder="series"
                            value={series}
                            onChange={(e) => setSeries(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manfacturer">
                            manfacturer:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="manfacturer"
                            type="text"
                            required
                            placeholder="manfacturer"
                            value={manfacturer}
                            onChange={(e) => setManfacturer(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin">
                            origin:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="origin"
                            type="text"
                            required
                            placeholder="origin"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eg_stock">
                            eg_stock:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="eg_stock"
                            type="number"
                            required
                            placeholder="eg_stock"
                            value={eg_stock}
                            onChange={(e) => setEg_stock(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=" ae_stock">
                            ae_stock:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id=" ae_stock"
                            type="number"
                            required
                            placeholder=" ae_stock"
                            value={ae_stock}
                            onChange={(e) => setAe_stock(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=" tr_stock">
                            tr_stock:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id=" tr_stock"
                            type="number"
                            required
                            placeholder=" tr_stock"
                            value={tr_stock}
                            onChange={(e) => setTr_stock(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            required
                            placeholder="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">ADD</button>
                </form>
            </div>

        </div>
    )
}

export default AddProduct