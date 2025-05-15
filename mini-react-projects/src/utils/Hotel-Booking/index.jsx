import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const HotelBooking = () => {
  const [formData, setFormData] = useState({
    checkIn: '8 February, 2024',
    checkOut: '12 February, 2024',
    adults: '1',
    children: '2'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Booking submitted:', formData);
  };

  return (
    <div className="bg-[#dba978] min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8" style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8 w-full max-w-xs">
          <div>
            <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1" htmlFor="checkin">
              Check In
            </label>
            <div className="relative">
              <input
                className="w-full bg-[#e6e6e6] text-[13px] text-[#666666] rounded-md py-2 px-3 pr-10 cursor-pointer"
                id="checkin"
                name="checkIn"
                readOnly
                type="text"
                value={formData.checkIn}
                onChange={handleChange}
              />
              <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1" htmlFor="checkout">
              Check Out
            </label>
            <div className="relative">
              <input
                className="w-full bg-[#e6e6e6] text-[13px] text-[#666666] rounded-md py-2 px-3 pr-10 cursor-pointer"
                id="checkout"
                name="checkOut"
                readOnly
                type="text"
                value={formData.checkOut}
                onChange={handleChange}
              />
              <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] pointer-events-none" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1" htmlFor="adults">
                Adults
              </label>
              <select
                className="w-full bg-[#e6e6e6] text-[13px] text-[#666666] rounded-md py-2 px-3 cursor-pointer"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1" htmlFor="children">
                Children
              </label>
              <select
                className="w-full bg-[#e6e6e6] text-[13px] text-[#666666] rounded-md py-2 px-3 cursor-pointer"
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <button
            className="mt-auto bg-[#ff8c00] text-white text-[13px] font-semibold rounded-full py-3 w-full hover:bg-[#e67e00] transition-colors"
            type="submit"
          >
            Book a room
          </button>
        </form>

        {/* Hotel Details */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="relative rounded-md overflow-hidden shadow-md">
            <img
              alt="Hotel room interior with warm lighting, bed with green pillows, wooden furniture and warm ambient light"
              className="w-full h-auto object-cover"
              height="300"
              src="https://storage.googleapis.com/a1aa/image/ceeeabdf-b634-4d40-7fe7-b80e45b5861d.jpg"
              width="600"
            />
            
            {/* Mini Calendar */}
            <div className="absolute top-2 left-2 bg-white rounded-md shadow-md p-2 text-[12px] text-center" style={{ width: '160px' }}>
              <div className="font-semibold mb-1">February 2024</div>
              <div className="grid grid-cols-7 gap-1 text-[10px] text-[#333]">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="font-semibold">{day}</div>
                ))}
                {[5, 6, 7, 8, 9, 10, 11].map(day => (
                  <div key={day} className={day === 9 || day === 12 ? 'bg-[#ff8c00] text-white rounded text-center' : ''}>
                    {day}
                  </div>
                ))}
                {[12, 13, 14, 15, 16, 17, 18].map(day => (
                  <div key={day} className={day === 9 || day === 12 ? 'bg-[#ff8c00] text-white rounded text-center' : ''}>
                    {day}
                  </div>
                ))}
                {[19, 20, 21, 22, 23, 24, 25].map(day => (
                  <div key={day}>{day}</div>
                ))}
                {[26, 27, 28, 29, '', '', ''].map((day, index) => (
                  <div key={index}>{day}</div>
                ))}
              </div>
            </div>
            
            {/* Hotel Info */}
            <div className="absolute bottom-2 left-2 text-white font-semibold text-sm drop-shadow-lg">
              Golden Apartments
              <div className="flex items-center text-xs mt-1 drop-shadow-lg">
                <FaMapMarkerAlt className="mr-1" />
                Punta Cana, Dominican Republic
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="flex gap-2">
            <img
              alt="Pool area with lounge chairs and umbrellas surrounded by greenery"
              className="rounded-md object-cover w-1/3 h-20"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/995675f4-49a0-4173-854c-e85be2e8fcf9.jpg"
              width="120"
            />
            <img
              alt="Modern hotel exterior with balconies and glass windows"
              className="rounded-md object-cover w-1/3 h-20"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/a8bdfc47-b595-4457-0028-b7d2c7c337dd.jpg"
              width="120"
            />
            <img
              alt="Pool with palm trees and sunset lighting reflecting on water"
              className="rounded-md object-cover w-1/3 h-20"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/bec49434-55bb-4db3-a5fe-95af7dd66841.jpg"
              width="120"
            />
          </div>
        </div>
      </div>

      {/* Custom scrollbar style for dropdown */}
      <style jsx>{`
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23666' class='bi bi-caret-down-fill' viewBox='0 0 16 16'%3e%3cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592c.859 0 1.319 1.013.753 1.658l-4.796 5.482a1 1 0 0 1-1.506 0z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1em;
          padding-right: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default HotelBooking;