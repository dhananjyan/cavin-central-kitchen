import { Button } from "react-bootstrap";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import s from "./StockTransfer.module.scss";
import cx from "classnames";
import { ReactSVG } from "react-svg";

import avatarIcon from "../../assets/svg/avatar.svg"
export default function StockTransfer() {
    return (
        <div className={s.mainContainer}>
            <div className={cx(s.sidebar, s.sideBarleft)}>
                <LeftSideBar />
            </div>
            <div className={s.main}>
                <div className={s.messageTopSection}>
                    <div className={s.messageTopContainer}>
                        <div className={s.messageTop1Part}>
                            <div className={s.prodDetails}>
                                <div>SKU1234567</div>
                                <div>Milkshake 1</div>
                                <div className={s.priorityDetails}>
                                    <div>Priority</div>
                                    <div>-</div>
                                    <div>P1</div>
                                </div>
                            </div>
                            <div className={s.locDetails}>
                                <div>Requested From :</div>
                                <div>Chennai Depot</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Button>Requested</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.messageBodySection}>
                    <div className={s.date}>
                        <div className={s.msg}>Today</div>
                    </div>
                    <div className={cx(s.messageItem, s.leftMessage)}>
                        <ReactSVG src={avatarIcon} className={s.avatarIcon} />
                        <div className={s.content}>
                            <div className={s.userName}>Kadalur Depot</div>
                            <div className={s.msgContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </div>
                    <div className={cx(s.messageItem, s.rightMessage)}>
                        {/* <ReactSVG src={avatarIcon} className={s.avatarIcon} /> */}
                        <div className={s.content}>
                            {/* <div className={s.userName}>Kadalur Depot</div> */}
                            <div className={s.msgContent}>Lorem Iqqqqqqqqqpsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </div>
                    <div className={cx(s.messageItem, s.leftMessage)}>
                        <ReactSVG src={avatarIcon} className={s.avatarIcon} />
                        <div className={s.content}>
                            <div className={s.userName}>Kadalur Depot</div>
                            <div className={s.msgContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </div>
                </div>
                <div className={s.messageInputSection}>
                    <ReactSVG src={avatarIcon} className={s.avatarIcon} />
                    <input placeholder="Type a message" />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M9.33061 13.6616L9.91044 14.6763C10.2796 15.3223 10.4641 15.6453 10.4641 15.9993C10.4641 16.3534 10.2796 16.6764 9.91044 17.3224L9.33061 18.3371C7.67954 21.2265 6.854 22.6712 7.49777 23.3876C8.14154 24.104 9.66595 23.4371 12.7148 22.1032L12.7148 22.1032L21.0823 18.4424C23.4763 17.3951 24.6733 16.8714 24.6733 15.9993C24.6733 15.1273 23.4763 14.6036 21.0823 13.5563L12.7148 9.89549C9.66595 8.56162 8.14154 7.89469 7.49777 8.61112C6.854 9.32755 7.67954 10.7722 9.33061 13.6616Z" stroke="#28292D" stroke-width="1.33333" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={cx(s.sidebar, s.sideBarRigth)}>
                <RightSideBar />
            </div>
        </div>
    )
}
