
import './iconsBar.scss'

import icon1 from "../../assets/icons/icons-bar/icon-1.svg";
import icon2 from "../../assets/icons/icons-bar/icon-2.svg";
import icon3 from "../../assets/icons/icons-bar/icon-3.svg";
import icon4 from "../../assets/icons/icons-bar/icon-4.svg";
import icon5 from "../../assets/icons/icons-bar/icon-5.svg";

const icons = [ icon1,icon2,icon3,icon4,icon5 ]

export default function IconsBar  () {
    return (
        <div className="icons-bar">
           {
            icons.map((icon) => (
                <img src={icon} alt="icon" />
            ))}
        </div>
    )
} 