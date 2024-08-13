import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faList } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useParams } from 'react-router-dom';

const PLC = () => {
    const { subcategoryId } = useParams();
    const [showForm, setShowForm] = useState(false);
    const [showListView, setShowListView] = useState(false);
    const [showCardView, setShowCardView] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log(`Fetching products for subcategory ID: ${subcategoryId}`);
                const response = await axios.get(`http://192.168.1.158:8000/subcategory/${subcategoryId}/get_product/`);
                setProducts(response.data);
            } catch (error) {
                console.error("There was an error fetching the products!", error);
            }
        };

        if (subcategoryId) {
            fetchProducts();
        }
    }, [subcategoryId]);

    const showCards = () => {
        setShowListView(false);
        setShowCardView(true);
    };

    const showList = () => {
        setShowListView(true);
        setShowCardView(false);
    };
    return (
        <>
            <Navbar />
            <Navbar_second />
            <div className="container mx-auto">
                <h1
                    className="pb-3 mx-4 mt-5 font-open-sans text-[34px]">
                    Programmable Logic Controllers (PLC)</h1>
                <button className="py-3 px-5 mx-4 bg-gray-500 text-center text-white rounded-lg" onClick={() => setShowForm(!showForm)}>Filter by</button>
                {showForm && (
                    <form className="mx-4 mb-4">

                        <fieldset className="mt-5 w-full md:w-auto">
                            <label className="block">Model</label>
                            <input
                                type="text"
                                className="form-control form-check-label border-2 rounded p-2 w-full"
                                id="myInput"
                                name="myInput"
                            />
                        </fieldset>
                        <div className="flex flex-wrap gap-3">
                            <fieldset className="mt-5 w-full md:w-1/4">
                                <label className="block">Brand</label>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="Mitsubishi"
                                            className="form-check-input mr-2"
                                            name="filterStatus"
                                        />{' '}
                                        Mitsubishi
                                    </span>
                                    <span className="text-gray-500">0</span>
                                </div>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2 border-t-0">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="Omron"
                                            className="form-check-input mr-2"
                                            name="filterStatus"
                                        />{' '}
                                        Omron
                                    </span>
                                    <span className="text-gray-500">11</span>
                                </div>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2 border-t-0">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="GMT"
                                            className="form-check-input mr-2"
                                            name="filterStatus"
                                        />{' '}
                                        GMT
                                    </span>
                                    <span className="text-gray-500">0</span>
                                </div>
                            </fieldset>

                            <fieldset className="mt-5 w-full md:w-1/6">
                                <label className="block">DI</label>
                                <input
                                    type="number"
                                    className="form-control form-check-label border-2 rounded p-2 w-full"
                                    id="di_search"
                                    name="di_search"
                                />
                                <label className="block mt-2">DO</label>
                                <input
                                    type="number"
                                    className="form-control form-check-label border-2 rounded p-2 w-full"
                                    id="do_search"
                                    name="do_search"
                                />
                            </fieldset>

                            <fieldset className="mt-5 w-full md:w-1/6">
                                <label className="block">AI</label>
                                <input
                                    type="number"
                                    className="form-control form-check-label border-2 rounded p-2 w-full"
                                    id="ai_search"
                                    name="ai_search"
                                />
                                <label className="block mt-2">AO</label>
                                <input
                                    type="number"
                                    className="form-control form-check-label border-2 rounded p-2 w-full"
                                    id="ao_search"
                                    name="ao_search"
                                />
                            </fieldset>

                            <fieldset className="mt-5 w-full md:w-1/6">
                                <label className="block">Power Supply</label>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="24VDC"
                                            className="form-check-input mr-2"
                                            name="power_search"
                                        />{' '}
                                        24VDC
                                    </span>
                                    <span className="text-gray-500">5</span>
                                </div>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2 border-t-0">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="220VAC"
                                            className="form-check-input mr-2"
                                            name="power_search"
                                        />{' '}
                                        220VAC
                                    </span>
                                    <span className="text-gray-500">6</span>
                                </div>
                            </fieldset>

                            <fieldset className="mt-5 w-full md:w-1/5">
                                <label className="block">Communication</label>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="Ethernet"
                                            className="form-check-input"
                                            name="communication_search"
                                        />{' '}
                                        Ethernet
                                    </span>
                                    <span className="text-gray-500">4</span>
                                </div>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2 border-t-0">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="RS232"
                                            className="form-check-input mr-2"
                                            name="communication_search"
                                        />{' '}
                                        RS232
                                    </span>
                                    <span className="text-gray-500">6</span>
                                </div>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2 border-t-0">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="RS422"
                                            className="form-check-input mr-2"
                                            name="communication_search"
                                        />{' '}
                                        RS422
                                    </span>
                                    <span className="text-gray-500">1</span>
                                </div>
                                <div className="flex items-center justify-between mt-2 form-check-label border-2 border-t-0">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="RS485"
                                            className="form-check-input mr-2"
                                            name="communication_search"
                                        />{' '}
                                        RS485
                                    </span>
                                    <span className="text-gray-500">6</span>
                                </div>
                                <div className="flex items-center justify-between form-check-label border-2 border-t-0">
                                    <span>
                                        <input
                                            type="checkbox"
                                            value="USB"
                                            className="form-check-input mr-2"
                                            name="communication_search"
                                        />{' '}
                                        USB
                                    </span>
                                    <span className="text-gray-500">0</span>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                )}
                <div className="flex mx-4 mt-3 mb-3">
                    <div className="flex">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-lg"
                            onClick={showCards}
                        >
                            <FontAwesomeIcon icon={faGrip} />
                        </button>
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r-lg"
                            onClick={showList}
                        >
                            <FontAwesomeIcon icon={faList} />
                        </button>
                    </div>
                </div>

                {showListView && (
                    <div className="overflow-x-auto">
                        <table id="myTable" className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Brand</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Image</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody id="productTableBody" className="bg-white divide-y text-center divide-gray-200">
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.manfacturer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img src={product.image || 'default-image.jpg'} alt={product.name} className="h-10 w-10 rounded-full" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <a href={`${product.name}`} className="text-blue-600 hover:text-blue-900">
                                                {product.name}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div> {/* end container */}

            {showCardView && (
                <div className="bg-custom-emphasis">
                    <div className="container mx-auto mb-5">
                        <div id="cardView" className="flex flex-wrap justify-between items-center mx-4 ">
                            {products.map((product, index) => (
                                <div key={index} className="w-full sm:w-1/3 mt-8">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-2">
                                        <img src={product.image || 'default-image.jpg'} alt={product.name} className="h-full w-full" />
                                        <div className="px-4 pb-4">
                                            <a href={`/plc/${subcategoryId}/${product.name}/${product.id}`} className="text-blue-600 block pb-3 hover:text-blue-500">
                                                {product.name}
                                            </a>
                                            <p className="text-gray-700 text-base">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}
export default PLC;