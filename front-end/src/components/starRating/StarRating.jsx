/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    const renderStars = (rating) => {
        // Ensure rating is a number and round to 2 decimal places
        const normalizedRating = Number(rating.toFixed(2));
        let stars = [];

        for (let i = 1; i <= 5; i++) {
            // Fully filled star
            if (i <= Math.floor(normalizedRating)) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            }
            // Handling fractional part
            else if (i === Math.ceil(normalizedRating)) {
                // Check for half star
                if (normalizedRating % 1 >= 0.25 && normalizedRating % 1 < 0.75) {
                    stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
                }
                // Check for partial filled star
                else if (normalizedRating % 1 >= 0.75) {
                    // Create a custom star with partial fill
                    stars.push(
                        <div key={i}>
                            <FaRegStar className="text-yellow-500 absolute" />
                            <div
                                className=" overflow-hidden"
                                style={{
                                    width: `${(normalizedRating % 1) * 100}%`,
                                    height: '100%',
                                }}
                            >
                                <FaStar className="text-yellow-500" />
                            </div>
                        </div>
                    );
                }
                // Empty star for remaining
                else {
                    stars.push(<FaRegStar key={i} className="text-yellow-500" />);
                }
            }
            // Empty stars
            else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }

        return stars;
    };

    return (
        <div className="flex items-center">
            {renderStars(rating)}
            <span className="ml-2 text-gray-600">({rating.toFixed(1)})</span>
        </div>
    );
};

export default StarRating;