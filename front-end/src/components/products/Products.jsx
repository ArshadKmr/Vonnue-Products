import StarRating from '../starRating/StarRating';
import { useState } from 'react';

const Products = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to manage the selected product for the review
    const [selectedProduct, setSelectedProduct] = useState(null);

    // State for rating and review inputs
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    // Function to handle modal open and set selected product
    const handleOpenReviewModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setRating(0); // Reset rating
        setReview(""); // Reset review
    };


    // Function to handle form submission
    const handleSubmitReview = (e) => {
        e.preventDefault();

        // Example logic for submitting review data
        console.log("Submitting review for:", selectedProduct.name);
        console.log("Rating:", rating);
        console.log("Review:", review);

        // Perform API call or other action here to save the review

        // Close the modal after submission
        handleCloseModal();
    };

    const products = [
        { id: 1, name: 'Product A', description: 'Description A', price: 10, averageRating: 4, image: 'https://picsum.photos/200' },
        { id: 2, name: 'Product B', description: 'Description B', price: 20, averageRating: 3.5, image: "https://picsum.photos/200" },
        { id: 2, name: 'Product C', description: 'Description C', price: 30, averageRating: 2.5, image: "https://picsum.photos/150" },
        { id: 2, name: 'Product D', description: 'Description D', price: 40, averageRating: 3.8, image: "https://picsum.photos/190" },
        { id: 2, name: 'Product E', description: 'Description E', price: 50, averageRating: 2.2, image: "https://picsum.photos/180" },
    ]
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-white">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-semibold text-center text-orange-600 mb-8 ">
                        Our Products
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product,index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl border border-gray-200 p-2 m-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-t-3xl p-2   "
                                />
                                <hr />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <span className="text-gray-700">Rating:</span>
                                            <span className="ml-2 text-yellow-500">
                                                <StarRating rating={product.averageRating} />
                                            </span>
                                        </div>
                                        <span className="text-lg font-bold text-gray-800">
                                            ₹{product.price}
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="flex space-x-2">
                                        <button
                                            // onClick={() => handleAddToCart(product)}
                                            className="w-1/2 bg-orange-700 text-white font-medium py-2 rounded-lg hover:bg-orange-500 transition"
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => handleOpenReviewModal(product)}
                                            className="w-1/2 bg-gray-200 text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-300 transition"
                                        >
                                            Add Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add Review Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
                            Add Review for {selectedProduct.name}
                        </h2>
                        <form
                            onSubmit={handleSubmitReview}
                            className="flex flex-col space-y-4"
                        >
                            <div>
                                <label className="block text-lg font-medium text-orange-700 mb-2">
                                    Rating
                                </label>
                                <div className="flex justify-between">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            type="button"
                                            key={star}
                                            className={`text-2xl ${star <= rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                            onClick={() => setRating(star)}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-orange-700 mb-2">
                                    Review
                                </label>
                                <textarea
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                                    rows="4"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    placeholder="Write your review here..."
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                    onClick={handleCloseModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>

    );
}

export default Products