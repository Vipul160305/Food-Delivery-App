
import CategoryItemList from "./CtegoryItemList";

const MenuCategory = ({ data,showItem ,setShowIndex}) => {

  const handleClick=()=>{
    // console.log("clicked")
    setShowIndex();
  }
  
  return (
    <div>
      {/* heading */}
        <div className="category" >
           <div className="category-name" 
           onClick={()=>handleClick()}>
             <span>
              {data?.title} ({data?.itemCards.length})
             </span>
             {/* <span>🔻</span> */}
             <span>{showItem ? "🔺" : "🔻"}</span>
            </div>
             {showItem && <CategoryItemList data={data.itemCards} />}
        </div>
    </div>
  );
};
export default MenuCategory;
