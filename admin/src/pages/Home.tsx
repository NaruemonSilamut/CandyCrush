import React, { useState, useEffect } from "react";
import axios from "axios";

interface IceCream {
  iceCreamId: string;
  iceCreamName: string;
  iceCreamFlavor: string;
  iceCreamPrice: number;
  iceCreamDescription: string;
  iceCreamImage: string;
}

const Home: React.FC = () => {
  const [iceCreams, setIceCreams] = useState<IceCream[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setIceCreams(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {iceCreams.map((iceCream) => (
        <div
          key={iceCream.iceCreamId}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
        >
          <img
            src={iceCream.iceCreamImage}
            alt={iceCream.iceCreamName}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold text-purple-700">{iceCream.iceCreamName}</h2>
          <p className="text-gray-600">{iceCream.iceCreamFlavor}</p>
          <p className="text-gray-800 font-bold">฿{iceCream.iceCreamPrice}</p>
          <p className="text-sm text-gray-500 mt-2">{iceCream.iceCreamDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
