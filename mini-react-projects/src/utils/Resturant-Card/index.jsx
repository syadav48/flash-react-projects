import React, { useState } from 'react';
import { FaStar, FaHeart, FaRegHeart, FaMapMarkerAlt, FaUtensils, FaClock } from 'react-icons/fa';

const RestaurantCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Fake restaurant data
  const restaurant = {
    name: "Gourmet Haven",
    cuisine: "Italian • Mediterranean",
    rating: 4.7,
    reviewCount: 128,
    description: "Experience authentic Italian flavors with a modern twist. Our chef brings 20 years of culinary expertise from Naples, crafting handmade pastas and wood-fired pizzas in a cozy, elegant atmosphere.",
    location: "123 Culinary Street, Food District",
    priceRange: "$$$",
    openingHours: "11:00 AM - 10:30 PM",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ]
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-auto mt-12">
      {/* Image gallery */}
      <div className="relative">
        <img 
          className="w-full h-64 object-scale-down" 
          src={restaurant.images[activeImage]} 
          alt={restaurant.name} 
        />
        <div className="absolute top-4 right-4">
          <button 
            onClick={toggleFavorite}
            className="p-2 bg-white rounded-full shadow-md"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-600" />
            )}
          </button>
        </div>
        
        {/* Image thumbnails */}
        <div className="flex space-x-2 p-2 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent">
          {restaurant.images.map((img, index) => (
            <button 
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-12 h-12 rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-white' : 'border-transparent'}`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant info */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{restaurant.name}</h2>
            <div className="flex items-center mt-1 text-gray-600">
              <FaUtensils className="mr-1" />
              <span>{restaurant.cuisine}</span>
            </div>
          </div>
          <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="font-semibold">{restaurant.rating}</span>
            <span className="text-gray-500 ml-1">({restaurant.reviewCount})</span>
          </div>
        </div>

        {/* Location and hours */}
        <div className="mt-4 space-y-2 text-gray-600">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>{restaurant.location}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2" />
            <span>{restaurant.openingHours}</span>
            <span className="ml-4 font-medium">{restaurant.priceRange}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700">{restaurant.description}</p>

        {/* Reviews */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Recent Reviews</h3>
          <div className="mt-2 space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="font-medium">5.0</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">by Sarah M.</span>
              </div>
              <p className="mt-1 text-sm">The pasta was absolutely divine! Best carbonara I've had outside of Rome.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="font-medium">4.5</span>
                </div>
                <span className="ml-2 text-sm text-gray-500">by James L.</span>
              </div>
              <p className="mt-1 text-sm">Excellent service and atmosphere. The tiramisu is a must-try!</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold shadow-md transition duration-300">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;