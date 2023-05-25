import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElementListEquipage from '../ElementListEquipage';
import SearchBar from '../SearchBar'; 

const ListEquipage = () => {
  const [equipage, setEquipage] = useState([]);
  const [filteredEquipage, setFilteredEquipage] = useState([]);

  useEffect(() => {
    fetchEquipage();
  }, []);

  const fetchEquipage = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/crew');
      setEquipage(response.data);
      setFilteredEquipage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    const filteredData = equipage.filter((data) => {
      const name = data.name.toLowerCase();
      const agency= data.agency.toLowerCase();
      return  name.includes(query.toLowerCase())||agency.includes(query.toLowerCase());

    });
    setFilteredEquipage(filteredData);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div>
        {filteredEquipage.map((data) => (
          <ElementListEquipage key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default ListEquipage;
