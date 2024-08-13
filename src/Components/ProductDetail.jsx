import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null); // تغير إلى كائن بدلاً من قائمة

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://192.168.1.158:8000/subcategory/12/get_product_detail/?product_id=${productId}`);
                console.log('Product fetched successfully:', response.data);
                setProduct(response.data); // تخزين الكائن مباشرة
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        if (productId) {
            fetchProduct();
        }
        
    }, [productId]);

    return (
        <div>
            <Navbar />
            <Navbar_second />
            {product ? ( // تحقق مما إذا كان هناك منتج
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.series}</p>
                    <p>{product.manfacturer}</p>
                    <p>{product.origin}</p>
                    <p>{product.eg_stock}</p>
                    <p>{product.ae_stock}</p>
                    <p>{product.tr_stock}</p>
                </div>
            ) : (
                <p>Loading...</p> // عرض رسالة تحميل إذا لم يتم تحميل المنتج بعد
            )}
        </div>
    );
};

export default ProductDetail;
