import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faList } from '@fortawesome/free-solid-svg-icons';


const products = [
    {
        brand: 'Omron',
        image: 'https://emtech-eg.com/static/uploads/CP2E-S60DT1-D.jpg',
        model: 'CP2E-S60DT1-D',
        description: 'CP2E series compact PLC - Standard Type; 36 DI, 24DO; PNP output; Power supply 24 VDC; 8 kStep Program memory'
    },
    {
        brand: 'Omron',
        image: 'https://emtech-eg.com/static/uploads/CP2E-S60DT1-D.jpg',
        model: 'CP2E-S40DT1-D',
        description: 'CP2E series compact PLC - Standard Type; 24 DI, 16 DO; PNP output; Power supply 24 VDC; 8 kStep Program memory'
    },
    {
        brand: 'Omron',
        image: 'https://emtech-eg.com/static/uploads/CP2E-S60DT1-D.jpg',
        model: 'CP2E-S40DT1-D',
        description: 'CP2E series compact PLC - Standard Type; 24 DI, 16 DO; PNP output; Power supply 24 VDC; 8 kStep Program memory'
    },
    {
        brand: 'Omron',
        image: 'https://emtech-eg.com/static/uploads/CP2E-S60DT1-D.jpg',
        model: 'CP2E-S40DT1-D',
        description: 'CP2E series compact PLC - Standard Type; 24 DI, 16 DO; PNP output; Power supply 24 VDC; 8 kStep Program memory'
    },
];

const PLC = () => {
    const [showForm, setShowForm] = useState(false);
    const [showListView, setShowListView] = useState(true); 
    const [showCardView, setShowCardView] = useState(false);
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
                    <div class="overflow-x-auto">
                        <table id="myTable" className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Brand</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Image</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Model</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody id="productTableBody" className="bg-white divide-y text-center divide-gray-200">
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{product.brand}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img src={product.image} alt={product.model} className="h-10 w-10 rounded-full" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <a href={`${product.model}.html`} className="text-blue-600 hover:text-blue-900">
                                                {product.model}
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
                    <div className="container mx-auto">
                    <div id="cardView" className="flex flex-wrap justify-center items-center mx-4">
                        {products.map((product, index) => (
                            <div key={index} className="w-full sm:w-1/3 mt-8">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-2">
                                    <img src={product.image} alt={product.model} className="h-full w-full"/>
                                    <div className="px-4 pb-4">
                                    <a href={`${product.model}.html`} className="text-blue-600 block pb-3 hover:text-blue-500">
                                                {product.model}
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