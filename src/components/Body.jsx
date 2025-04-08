import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredListofRestaurant, setFilteredListofRstaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  // fech api data
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListofRstaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus=useOnlineStatus();

  if(onlineStatus===false)
  {
    return <h1>Opps..!!! somthing went wrong ... Please check your internet connection</h1>
  }
  else if(listOfRestaurants.length === 0)
  {
    return   <Shimmer />
  }

  return  (
    <div className="body">
      <div className="body-top">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurants) => restaurants.info.avgRating > 4
              );
              filteredList.sort((a, b) => b.info.avgRating - a.info.avgRating);
              setFilteredListofRstaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="serch for restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              // console.log(searchText);
              const filteredrestroList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListofRstaurant(filteredrestroList);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="restro-card-container">
        {filteredListofRestaurant.map((restaurants) => (
          <Link
            key={restaurants?.info?.id}
            to={"/Restaurant/" + restaurants?.info?.id}
          >
            <RestroCard data={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
