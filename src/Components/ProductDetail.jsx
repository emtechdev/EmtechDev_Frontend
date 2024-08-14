import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import Navbar_third from './Navbar/Navbar_third';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const { productId, subcategoryId } = useParams();
    const [product, setProduct] = useState(null);
    const [pricing, setPricing] = useState([]);
    const [latestPricing, setLatestPricing] = useState(null);
    const navigate = useNavigate();
    const baseURL = "http://192.168.1.158:8000";

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://192.168.1.158:8000/subcategory/${subcategoryId}/get_product_detail/?product_id=${productId}`);
                console.log('Product fetched successfully:', response.data);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId, subcategoryId]);

    useEffect(() => {
        const fetchPricing = async () => {
            try {
                const response = await axios.get(`http://192.168.1.158:8000/product/${productId}/get_pricing/`);
                console.log('Pricing fetched successfully:', response.data);
                setPricing(response.data);
                
                // Find the latest pricing entry based on the highest ID
                const latestEntry = response.data.reduce((max, entry) => (entry.id > max.id ? entry : max), response.data[0]);
                setLatestPricing(latestEntry);
            } catch (error) {
                console.error('Error fetching pricing:', error);
            }
        };

        if (productId) {
            fetchPricing();
        }
    }, [productId]);


    const handleDelete = () => {
        axios.delete(`http://192.168.1.158:8000/product/${productId}/`)
            .then(response => {
                console.log('Product deleted successfully:', response.data);
                setProduct(null);
                navigate(`/subcategory/${subcategoryId}`);
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            })
    }

    return (
        <div>
            <Navbar />
            <Navbar_second />
            <Navbar_third />
            {product ? (
                <div key={product.id}>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap">
                            <div className="md:w-1/2">
                                <h1 className="mt-12 max-w-5xl font-open-sans text-4xl text-gray-800">{product.name}</h1>
                                <p className="text-lg font-open-sans text-blue-800 w-3/4 mt-3">{product.description}</p>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src={`${baseURL}${product.image}`}
                                    alt="model"
                                    className="w-72 h-72"
                                />
                                <div className="pdf mt-4">
                                    <a href="#">
                                        <img
                                            src="https://8z1xg04k.tinifycdn.com/downloads/datasheet/en/thumb/cj2m-cpu_,_-md21_cpu_units,_pulse_i_o_modules_datasheet_en.jpg"
                                            alt="pdf"
                                            className="w-12 h-12"
                                        />
                                    </a>
                                    <a
                                        href="https://drive.google.com/file/d/1ACWsTWGqD3FvdxiHznqQAr9rEoth3FPd/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 text-blue-800 underline"
                                    >
                                        CJ2M-CPU__, -MD21_ CPU Units, Pulse I/O Modules <span>DataSheet</span>
                                    </a>
                                </div>
                                <div className="pdf mt-4">
                                    <a href="#">
                                        <img
                                            src="https://8z1xg04k.tinifycdn.com/downloads/datasheet/en/thumb/cj2m-cpu_,_-md21_cpu_units,_pulse_i_o_modules_datasheet_en.jpg"
                                            alt="pdf"
                                            className="w-12 h-12"
                                        />
                                    </a>
                                    <a
                                        href="https://drive.google.com/file/d/1ACWsTWGqD3FvdxiHznqQAr9rEoth3FPd/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 text-blue-800 underline"
                                    >
                                        CJ2M-CPU__, -MD21_ CPU Units, Pulse I/O Modules <span>DataSheet</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <table className="table-auto w-full mt-8 min-w-full divide-y divide-gray-200">
                            <tbody id="productTableBody">
                                <tr className="border-b">
                                    <th className="text-left p-2">Brand</th>
                                    <td className="p-2">{product.manfacturer}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Model</th>
                                    <td className="p-2">{product.name}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Origin</th>
                                    <td className="p-2">{product.origin}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Series</th>
                                    <td className="p-2">{product.series}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Digital Input</th>
                                    <td className="p-2"></td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Analog Input</th>
                                    <td className="p-2"></td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Digital Output</th>
                                    <td className="p-2"></td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Analog Output</th>
                                    <td className="p-2"></td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Input Voltage</th>
                                    <td className="p-2"></td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left p-2">Communication</th>
                                    <td className="p-2"></td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        {latestPricing && (
                            <table className="table-auto w-full mt-8 min-w-full divide-y divide-gray-200">
                                <tbody id="productTableBody">
                                    <tr className="border-b">
                                        <th className="text-left p-2">eg_buy_price</th>
                                        <td className="p-2">{latestPricing.eg_buy_price}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="text-left p-2">eg_cost</th>
                                        <td className="p-2">{latestPricing.eg_cost}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="text-left p-2">eg_profit</th>
                                        <td className="p-2">{latestPricing.eg_profit}</td>
                                    </tr>
                                    {/* Add more fields if needed */}
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div className='flex items-center justify-center my-5 gap-5'>
                        <Link to={`/${product.name}/${product.id}/add_pricing`}>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hvr-pop"
                            >
                                Add Pricing
                            </button>
                        </Link>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hvr-pop"
                            onClick={() => {
                                navigate(`/addspecification`)
                            }}
                        >
                            Add Specification
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hvr-pop"
                            onClick={() => {
                                navigate(`/:productName/:productId`)
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg hvr-pop"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>

            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
};

export default ProductDetail;
