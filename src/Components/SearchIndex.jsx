import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getHotels } from '../hotellData.js';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import PopularDestinations from './PopularDestinations.jsx';

//Loader for component. Using async and await even though using a pretend backend insted of pull.
export async function loader({request}){
  if (request == null) return;
  
  //Return array of filtered hotels.
    return await getHotels(request.url);
}

export default function SearchIndex() {
  const loaderData = useLoaderData();
    return (
        <div className="text-center">
          {loaderData ? <h1></h1> : <h1 className="flexStart">Sök efter din resa</h1>}
        <SearchBar />
        
        {/* If no hotels in returned array, PopularDestination.*/}
        {loaderData ? <SearchResults hotels={loaderData} /> : <PopularDestinations />}
      </div>
    );
}