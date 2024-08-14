import React, { useState, useEffect } from 'react'
import MainNavbar from './Navbar/Navbar'
import NavbarSecond from './Navbar/Navbar_second'
import Navbar_third from './Navbar/Navbar_third'
import axios from 'axios';
import { useParams } from 'react-router';

function AddPricing() {
    const [eg_buy_price, setEg_buy_price] = useState(0);
    const [eg_cost, setEg_cost] = useState(0);
    const [eg_profit, setEg_profit] = useState(0);
    const [ae_buy_price, setAe_buy_price] = useState(0);
    const [ae_cost, setAe_cost] = useState(0);
    const [ae_profit, setAe_profit] = useState(0);
    const [tr_buy_price, setTr_buy_price] = useState(0);
    const [tr_cost, setTr_cost] = useState(0);
    const [tr_profit, setTr_profit] = useState(0);
    const { productId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://192.168.1.158:8000/product/${productId}/add_pricing/`, {
                eg_buy_price,
                eg_cost,
                eg_profit,
                ae_buy_price,
                ae_cost,
                ae_profit,
                tr_buy_price,
                tr_cost,
                tr_profit
            });


            if (response.status === 201) {
                console.log("Pricing added successfully");
                setEg_buy_price(0);
                setEg_cost(0);
                setEg_profit(0);
                setAe_buy_price(0);
                setAe_cost(0);
                setAe_profit(0);
                setTr_buy_price(0);
                setTr_cost(0);
                setTr_profit(0);
            }
        } catch (error) {
            console.error("There was an error adding the pricing!", error);
        }
    };

    return (
        <div>
            <MainNavbar />
            <NavbarSecond />
            <Navbar_third />
            {/* {
   
    "ae_buy_price": 200.5,
    "ae_cost": 170.0,
    "ae_profit": 30.5,
    "tr_buy_price": 180.0,
    "tr_cost": 150.0,
    "tr_profit": 30.0
} */}
            <div className="w-full max-w-xs m-auto mt-5">
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border' onSubmit={handleSubmit}>
                    <h1 className='text-center mb-3'>Add Pricing</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eg_buy_price">
                            eg_buy_price:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="eg_buy_price"
                            type="number"
                            required
                            placeholder="eg_buy_price"
                            value={eg_buy_price}
                            onChange={(e) => setEg_buy_price(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eg_cost">
                            eg_cost:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="eg_cost"
                            type="number"
                            required
                            placeholder="eg_cost"
                            value={eg_cost}
                            onChange={(e) => setEg_cost(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eg_profit">
                            eg_profit:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="eg_profit"
                            type="number"
                            required
                            placeholder="eg_profit"
                            value={eg_profit}
                            onChange={(e) => setEg_profit(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ae_buy_price">
                            ae_buy_price:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ae_buy_price"
                            type="number"
                            required
                            placeholder="ae_buy_price"
                            value={ae_buy_price}
                            onChange={(e) => setAe_buy_price(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ae_cost">
                            ae_cost:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ae_cost"
                            type="number"
                            required
                            placeholder="ae_cost"
                            value={ae_cost}
                            onChange={(e) => setAe_cost(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ae_profit">
                            ae_profit:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ae_profit"
                            type="number"
                            required
                            placeholder="ae_profit"
                            value={ae_profit}
                            onChange={(e) => setAe_profit(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tr_buy_price">
                            tr_buy_price:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tr_buy_price"
                            type="number"
                            required
                            placeholder="tr_buy_price"
                            value={tr_buy_price}
                            onChange={(e) => setTr_buy_price(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tr_cost">
                            tr_cost:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tr_cost"
                            type="number"
                            required
                            placeholder="tr_cost"
                            value={tr_cost}
                            onChange={(e) => setTr_cost(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tr_profit">
                            tr_profit:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tr_profit"
                            type="number"
                            required
                            placeholder="tr_profit"
                            value={tr_profit}
                            onChange={(e) => setTr_profit(e.target.value)}
                        />
                    </div>

                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddPricing