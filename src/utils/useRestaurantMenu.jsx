import { useEffect,useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu=(resId)=>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchRestoInfo();
      }, []);
    
    
  const fetchRestoInfo = async () => {
    const restroInfo = await fetch(MENU_API + resId);
    const json = await restroInfo.json();
    // console.log(json);
    setResInfo(json);
  };

    return resInfo;
}
export default useRestaurantMenu;