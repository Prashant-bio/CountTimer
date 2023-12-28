import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
 
  const [pastSearchTerms, setPastSearchTerms] = useState([]);
  
  const [showPastSearches, setShowPastSearches] = useState(false);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); 

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      setPastSearchTerms((prevTerms) => [...prevTerms, searchTerm]);
      localStorage.setItem('pastSearchTerms', JSON.stringify([...pastSearchTerms, searchTerm]));
    }
  };


  const handleTogglePastSearches = () => {
    setShowPastSearches((prevShow) => !prevShow);
  };


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    const storedPastSearchTerms = JSON.parse(localStorage.getItem('pastSearchTerms')) || [];
    setPastSearchTerms(storedPastSearchTerms);
  }, []);

  return (
    <div className='m-10'>
    <div className='flex  gap-6'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
        className='border w-36 rounded-md outline-none text-center'
      />
      <button className='hover:bg-blue-600 w-20 hover:text-white p-1 border rounded-md bg-blue-200' onClick={handleSearchSubmit}>Search</button>

      <button className='hover:bg-blue-600  hover:text-white border p-1 rounded-md bg-blue-200' onClick={handleTogglePastSearches}> Past Searches</button>
      </div>
      {/* Display past search terms */}
      {showPastSearches && (
        <div className='text-center'>
          <p className='text-2xl font-bold'>Past Searches:-</p>
          <ul>
            {pastSearchTerms.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>
      )}

     
      <table className='border m-6 w-full text-center'>
        <thead className='border'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className='border'>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
