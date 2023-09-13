import TabButtons from "../../TabButtons/TabButtons"
import s from "./LeftSideBar.module.scss"

import searchIcon from "../../../assets/svg/search.svg"
import avatarIcon from "../../../assets/svg/avatar.svg"
import { ReactSVG } from "react-svg"

export default function LeftSideBar() {
    return (
        <div>
            <div className={s.topBar}>
                <TabButtons />
                <div className={s.searchContainer}>
                    <ReactSVG src={searchIcon} className={s.searchIcon} />
                    <input className={s.searchInput} placeholder="Search" />
                    <div className={s.filterIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9.65811 19.7806L9.81622 20.255H9.81622L9.65811 19.7806ZM14.6581 18.114L14.8162 18.5883H14.8162L14.6581 18.114ZM19.7071 7.29289L20.0607 7.64645L19.7071 7.29289ZM15.2929 11.7071L14.9393 11.3536L15.2929 11.7071ZM5 4.5H19V3.5H5V4.5ZM4.5 6.58579V5H3.5V6.58579H4.5ZM9.06065 11.3535L4.64645 6.93934L3.93934 7.64645L8.35355 12.0607L9.06065 11.3535ZM8.49999 12.4142V19.3063H9.49999V12.4142H8.49999ZM8.49999 19.3063C8.49999 19.9888 9.16869 20.4708 9.81622 20.255L9.49999 19.3063V19.3063H8.49999ZM9.81622 20.255L14.8162 18.5883L14.5 17.6396L9.49999 19.3063L9.81622 20.255ZM14.8162 18.5883C15.2246 18.4522 15.5 18.0701 15.5 17.6396H14.5L14.8162 18.5883ZM15.5 17.6396V12.4142H14.5V17.6396H15.5ZM19.3536 6.93934L14.9393 11.3536L15.6464 12.0607L20.0607 7.64645L19.3536 6.93934ZM19.5 5V6.58579H20.5V5H19.5ZM20.0607 7.64645C20.342 7.36514 20.5 6.98361 20.5 6.58579H19.5C19.5 6.71839 19.4473 6.84557 19.3536 6.93934L20.0607 7.64645ZM15.5 12.4142C15.5 12.2816 15.5527 12.1544 15.6464 12.0607L14.9393 11.3536C14.658 11.6349 14.5 12.0164 14.5 12.4142H15.5ZM8.35355 12.0607C8.44731 12.1544 8.49999 12.2816 8.49999 12.4142H9.49999C9.49999 12.0164 9.34196 11.6349 9.06065 11.3535L8.35355 12.0607ZM3.5 6.58579C3.5 6.98361 3.65804 7.36514 3.93934 7.64645L4.64645 6.93934C4.55268 6.84557 4.5 6.71839 4.5 6.58579H3.5ZM19 4.5C19.2761 4.5 19.5 4.72386 19.5 5H20.5C20.5 4.17157 19.8284 3.5 19 3.5V4.5ZM5 3.5C4.17157 3.5 3.5 4.17157 3.5 5H4.5C4.5 4.72386 4.72386 4.5 5 4.5V3.5Z" fill="#28292D" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={s.menuSection}>
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
                <div className={s.divider} />
                <div className={s.menuItem}>
                    <div className={s.avatar}>
                        <ReactSVG src={avatarIcon} />
                    </div>
                    <div className={s.menu}>
                        <div className={s.menuTitle}>12345678</div>
                        <div className={s.menuDesc}>Need 2000 Stocks of #123...</div>
                    </div>
                    <div className={s.alert}>
                        <div className={s.label}>P1</div>
                        <div className={s.notifyNoOfUnread}>2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
