import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import axios from 'axios';

const Products = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategoriesAndSubcategories = async () => {
            try {
                const categoriesResponse = await axios.get('http://192.168.1.158:8000/category/');
                const categoriesData = categoriesResponse.data;

                const categoriesWithSubcategories = await Promise.all(
                    categoriesData.map(async (category) => {
                        const subcategoriesResponse = await axios.get(`http://192.168.1.158:8000/category/${category.id}/get_subcategory/`);
                        return {
                            ...category,
                            subcategories: subcategoriesResponse.data,
                        };
                    })
                );

                setCategories(categoriesWithSubcategories);
            } catch (error) {
                console.error("There was an error fetching the categories and subcategories!", error);
            }
        };

        fetchCategoriesAndSubcategories();
    }, []);

    return (
        <>
            <Navbar />
            <Navbar_second />
            <div className="container mx-auto">
                <h1 className="pb-5 mx-4 mt-5 font-open-sans text-[34px]">Products</h1>
            </div>
            <div className="bg-custom-emphasis">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {categories.map((category) => (
                            <div key={category.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-10">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="bg-gray-200 py-3 pl-4">
                                        <a href={`/${category.name.toLowerCase()}`} className="text-custom-blue text-[15px] font-bold font-sans">
                                            {category.name}
                                        </a>
                                    </div>
                                    <div className="p-4">
                                        <ul className="list-disc">
                                            {category.subcategories.map((subcategory) => (
                                                <li key={subcategory.id}>
                                                    <a href={`/${subcategory.name.toLowerCase()}/${subcategory.id}`} className="text-black hover:text-blue-600 font-sans text-[14px]">
                                                        {subcategory.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
