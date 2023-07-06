'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ImagePost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('http://localhost:3000/api/images/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Handle the response data as per your requirements
      router.push('/image');
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
   
   <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center text-gray-800 font-bold mb-4">
          Image Upload
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="file"
            onChange={handleImageChange}
            className="py-2 px-4 border border-gray-300 rounded-lg mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
   
  );
};

  

export default ImagePost
