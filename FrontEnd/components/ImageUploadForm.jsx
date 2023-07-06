'use client'

import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MyPost = () => {
 
  const [data, setData] = useState([]);
  const router = useRouter()
  const deleteImage = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/api/images//api/images/${id}/`)
        console.log(`image with id ${id} deleted`)
    } catch (error) {
        console.log(`image with id ${id} is not deleted`)
    }
  }

const toHome = () => {
    router.push("/")
}

  const deleteHandler = (id) =>{
    deleteImage(id)
  };
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/images/');
      setData(response.data);
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  };

   useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen ">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex items-center justify-center ">
          {data.map((image) => (
             <div
              key={image.id}
              className="flex flex-col items-center bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow p-4  mt-6"
            >
              <img
                src={image.image}
                alt="Uploaded"
                className="w-full h-full object-cover  rounded-lg mb-4 "
                
              />
              <button
                onClick={() => deleteHandler(image.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Delete Image
              </button>
            </div>
          ))}
          
        </div>
         <div className="mt-2">
          <button
                onClick={toHome}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Back
              </button>
        </div>
      </div>
    
  );
};
 


export default MyPost

