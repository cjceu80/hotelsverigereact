import PropTypes from 'prop-types';

import SearchResultCard from './SearchResultCard';



export function isJSONString(testString) {
    try {
        JSON.parse(testString);
    } catch (e) {
        return false;
    }
    return true;
  }

export function handleDates(datesString){
    if (!datesString || !isJSONString(datesString))
      return;
  
    const dates = JSON.parse(datesString);
    const start = new Date(dates.s).toLocaleDateString();
    const end = new Date(dates.e).toLocaleDateString();
    
    return [start, end];
  }


//Component for displaying all the search results.
//Gets props from default.jsx after a user has made a search
export default function SearchResults(props) {
    const hotels = props.hotels;

    return (
        <>
            {/* Show how many hotels are in our array and the city */}
            <h2 className="py-3">{hotels.hotels.length} hotell funna i {hotels.search.length > 0 ? hotels.search[0].toUpperCase() + hotels.search.slice(1).toLowerCase() : "alla destinationer"}</h2>
            {hotels.hotels.map((hotel) => <SearchResultCard hotel={hotel} dates={hotels.dates} key={hotel.id} />)}
        </>
    );
}

SearchResults.propTypes = {
    hotels: PropTypes.object.isRequired
}
