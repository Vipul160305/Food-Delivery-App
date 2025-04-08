import Shimmer2 from "./Shimmer2";
import MenuCategory from "./MenuCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const Restropage = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer2 />;

  const { name, costForTwoMessage, avgRating, cuisines, locality, areaName } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const type = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const category =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return c?.card?.card?.["@type"] == type;
      }
    );
  // console.log(category);

  return (
    <div className="restro-menu">
      <h2>{name}</h2>
      <div className="restro-menu-info">
        <p>
          Rating {avgRating} | {costForTwoMessage}
        </p>
        <p>{cuisines.join(",")} </p>
        <h5>{locality}</h5>
        <h5>{areaName}</h5>
      </div>

      {/* menu catagory */}
      {/* controled component */}
      {category.map((c, index) => {
        return (
          <MenuCategory
            key={c?.card?.card?.categoryId}
            data={c?.card?.card}
            showItem={index == showIndex ? true : false}
            // setShowIndex={()=>setShowIndex(index)}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        );
      })}
    </div>
  );
};

export default Restropage;
