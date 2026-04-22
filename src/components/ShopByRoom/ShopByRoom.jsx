
import { Link } from "react-router-dom";
import arrowRightIcon from "../../assets/icons/arrow-right.svg"
import BedRoomImg from "../../assets/images/shop-by-room/modern-bedroom.jpg"
import LivinRoomImg from "../../assets/images/shop-by-room/modern-living-room.jpg"
import HallwayImg from "../../assets/images/shop-by-room/modern-hallway.jpg"
import KitchenImg from "../../assets/images/shop-by-room/modern-kitchen.jpg"

import "./ShopByRoom.scss";

export default function ShopByRoom() {
  return (
    <div className='shop-by-room'>
        <div className="container">
           
           <ul className="products-section-cards">
                <li className='section-card'>
                    <Link to="/">
                        <span className='with-arrow-right'>
                            Bedroom
                            <img src={arrowRightIcon} alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src={BedRoomImg} alt="bedroom" />
                </li>
                <li className='section-card'>
                    <Link to="/">
                        <span className='with-arrow-right'>
                            Living room
                            <img src={arrowRightIcon} alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src={LivinRoomImg} alt="living-room" />
                </li>
                <li className='section-card'>
                    <Link to="/">
                        <span className='with-arrow-right'>
                            Hallway
                            <img src={arrowRightIcon} alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src={HallwayImg} alt="hallway" />
                </li>
                <li className='section-card'>
                    <Link to="/">
                        <span className='with-arrow-right'>
                            Kitchen
                            <img src={arrowRightIcon} alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src={KitchenImg} alt="kitchen" />
                </li>
           </ul>
        </div>
    </div>
  )
}

