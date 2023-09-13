import TabButtons from "../../TabButtons/TabButtons"
import s from "./RightSideBar.module.scss"

import ellipseIcon from "../../../assets/svg/ellipse.svg"
import avatarIcon from "../../../assets/svg/avatar.svg"
import { ReactSVG } from "react-svg"
import { Button } from "react-bootstrap"

export default function RightSideBar() {
    return (
        <div className={s.sideBarcontainer}>
            <div className={s.heading}>Timeline</div>
            <div className={s.timelineSection}>
                <div className={s.item}>
                    <div className={s.icon}>
                        <ReactSVG src={ellipseIcon} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                            <path d="M1 0V40" stroke="#D9D9D9" />
                        </svg>
                    </div>
                    <div className={s.content}>
                        <div className={s.title}>Stock Requested</div>
                        <div className={s.details}>
                            <div className={s.item}>24/06/2023</div>
                            <div className={s.item}>03 : 45 pm</div>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.icon}>
                        <ReactSVG src={ellipseIcon} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                            <path d="M1 0V40" stroke="#D9D9D9" />
                        </svg>
                    </div>
                    <div className={s.content}>
                        <div className={s.title}>Under Dicussion</div>
                        <div className={s.details}>
                            <div className={s.item}>24/06/2023</div>
                            <div className={s.item}>03 : 45 pm</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.buttonSection}>
                <Button>Reject</Button>
                <Button >Approve</Button>
            </div>
        </div>
    )
}
