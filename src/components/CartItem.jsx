
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="  flex hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 "> 

        <div className="h-[180px]">
          <img src={item.image} className="w-50% h-full" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart} className="rounded-full opacity:25">
              <MdDelete/>
            </div>
          </div>
        </div>

      </div>
      <hr className="font-size-5px text-gray-700"/>
    </div>
  );
};

export default CartItem;
