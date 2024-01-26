import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [updateBody, setUpdateBody] = useState({
    name: "",
    email: "",
    role: ""
  })

  useEffect(() => {
    axios.get('https://charming-pig-pullover.cyclic.app/list')
      .then(response => {
        setData(response.data.list);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  async function del(id) {
    try {
      const response = await axios.delete(`https://charming-pig-pullover.cyclic.app/list/${id}`);
      console.log(response);
      // Refresh data after deletion
      const updatedData = data.filter(item => item._id !== id);
      setData(updatedData);

    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  async function update(id, updatedData) {
    try {
      
      const response = await axios.patch(`https://charming-pig-pullover.cyclic.app/list/update/${id}`, updatedData);
      console.log(response);


      
    const refreshedData = await axios.get('https://charming-pig-pullover.cyclic.app/list');
    
    setData(refreshedData.data.list);

    setEditIndex(null);

    console.log(refreshedData.data.list);

    
      // setData(response.data.list);
      // setEditIndex(null);
     
      console.log(response.data); 
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <div className='container'>
          <div className="flex justify-center items-center">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   NO
                </th>
                <th scope="col" className="px-6 py-3"> 
                                    Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Email
                </th>
                <th scope="col" className="px-6 py-3">
                   Role
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1}
                </th>
                <td className="px-6 py-4">
                  {editIndex === index ? (
                    <input
                      type="text"
                      name='name'
                      value={updateBody.name}
                      onChange={(e) => {
                       
                        const { value } = e.target;
                        setUpdateBody((prev) => ({
                          ...prev,
                          ['name']: value,
                        }))
                      }}
                    />
                  ) : (
                    item.name
                  )}
                </td>



                <td className="px-6 py-4">
                {editIndex === index ? (
                    <input
                      type="email"
                      value={updateBody.email}
                      name='email'
                      onChange={(e) => {
                        const { value } = e.target;
                        setUpdateBody((prev) => ({
                          ...prev,
                          ['email']: value,
                        }))
                      
                      }}
                    />
                  ) : (
                    item.email
                  )}
                </td>


                <td className="px-6 py-4">
                {editIndex === index ? (
                    <input
                      type="text"
                      name='role'
                      value={updateBody.role}
                      onChange={(e) => {
                        const { value } = e.target;  
                        setUpdateBody((prev) => ({
                          ...prev,
                          ['role']: value,
                        }))
                      }}
                    />
                  ) : (
                    item.role
                  )}
                 </td>


                <td className="px-6 py-4">
                  {editIndex === index ? (
                    <>
                      <button onClick={() => update(item._id, updateBody)}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <div>
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-4" onClick={() => handleEdit(index)}>Edit</a>
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => del(item._id)}>Delete</a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
