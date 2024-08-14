import React, { useState, useEffect } from 'react';
import MainNavbar from './Navbar/Navbar';
import NavbarSecond from './Navbar/Navbar_second';
import Navbar_third from './Navbar/Navbar_third';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

function EditProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const navigate = useNavigate();

  

    const handleEdit = async (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        try {
            const response = await axios.patch(`http://192.168.1.158:8000/product/${productId}/`, {
                name, // Send the updated name to the server
            });
            console.log('Product updated successfully:', response.data);
            setProduct(response.data);
            navigate('/products'); // Redirect to the products page after successful update
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <MainNavbar />
            <NavbarSecond />
            <Navbar_third />
            <div className="w-full max-w-xs m-auto mt-5">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border" onSubmit={handleEdit}>
                    <h1 className="text-center mb-3">Edit Product</h1>
                    {product ? (
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
                    ) : (
                        <p>Loading...</p>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 w-full mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Edit Product
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;
