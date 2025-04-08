import { IMG_URL } from "../utils/constants";

const RestroCard=(props)=>{
    const {data}=props
    const {deliveryTime}=data.info.sla
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    locality,
    areaName,
  } = data.info;

    return(
        <div className="restro-card">
            <img  className="restro-image"src={IMG_URL+cloudinaryImageId}
                alt="restro-imge"
            />
            <h4>{name}</h4>
            <h5>{cuisines.join(', ')}</h5>
            <h5>Ratings {avgRating}</h5>
            <h5>Delivery in {deliveryTime} mins</h5>
            <h6>{areaName}</h6>
            <h6>{locality}</h6>
        </div>
    )
}
export default RestroCard;