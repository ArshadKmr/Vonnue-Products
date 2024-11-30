import { Card } from 'flowbite-react';
import StarRating from '../starRating/StarRating';

const Products = () => {
    const products = [
        { id: 1, name: 'Product A', description: 'Description A', price: 10, averageRating: 4, image: 'https://picsum.photos/200/125' },
        { id: 2, name: 'Product B', description: 'Description B', price: 20, averageRating: 3.5, image: "https://picsum.photos/200" },
        { id: 2, name: 'Product C', description: 'Description C', price: 30, averageRating: 2.5, image: "https://picsum.photos/150" },
        { id: 2, name: 'Product D', description: 'Description D', price: 40, averageRating: 3.8, image: "https://picsum.photos/190" },
        { id: 2, name: 'Product E', description: 'Description E', price: 50, averageRating: 2.2, image: "https://picsum.photos/180" },
    ]
    return (
        <>
            {/* <h1>Products</h1> */}
            <div className="min-h-screen flex justify-center  items-center bg-gray-100">
                <div className='mx-auto p-7 w-full'>
                    <h1 className='text-4xl w-10 font-medium p-5 text-cyan-600 hover:text-cyan-800'>Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {products.map((product) => (
                            <Card key={product.id}
                                className="max-w-sm"
                                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                                imgSrc={product.image}
                            >
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                    </h5>
                                </a>
                                <div className="flex items-center mt-2">
                                    <span className="ml-2 text-sm text-gray-500">
                                        <StarRating rating={product.averageRating} />
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <a
                                        href="#"
                                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    >
                                        Add to cart
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products