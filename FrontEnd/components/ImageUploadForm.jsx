'use client'

import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const MyPost = () => {
 
  const [data, setData] = useState([]);
  const router = useRouter()
  const deleteImage = async (id) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/api/images/${id}/`)
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
    window.location.reload()
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
    <div className="bg-gray-400 h-full ">
      <br /><br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mx-6 ">
          {data.map((image) => (
             <div
              key={image.id}
              className="flex flex-col h-[85%] w-fit items-center  bg-gray-200 rounded-lg shadow pt-4 px-4   mt-6"
            >
            <img
              src={image.image}
              alt="Uploaded"
              className="w-full object-contain h-[80%] rounded-md  mb-4"
            />
              <button
                onClick={() => deleteHandler(image.id)}
                className="bg-gray-400 font-semibold py-2 px-4 rounded-lg "
              >
                Delete Image
              </button>
            </div>
          ))}
          
        </div>
         <div className="mt-2">
          <button
                onClick={toHome}
                className="bg-blue-400 text-white py-2 px-4 rounded-lg absolute top-0 m-5"
              >
                Back
              </button>
        </div>
      </div>
    
  );
};
 


export default MyPost

