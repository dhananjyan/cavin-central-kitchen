import cx from "classnames";
import s from "./style.module.scss";
import { ReactSVG } from "react-svg";

import questionSvg from "../../assets/svg/question.svg"
import bellNotifySvg from "../../assets/svg/bellNotify.svg"
import avatarSvg from "../../assets/svg/avatar.svg"
import { useDispatch, useSelector } from "react-redux";
import { updateActiveTab } from "../../redux/reducers/dashboardSlice";


export default function Header() {

    return (
        <div>
            <div className={cx(s.header)}>
                <center><h3>Central Kitchen - Inventory management</h3></center>
            </div>
        </div>
    )
}
