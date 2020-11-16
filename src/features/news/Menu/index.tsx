import React, { FunctionComponent } from "react";
import styles from "./menu.module.scss";
import { useDispatch } from "react-redux";
import { Horse, Briefcase, Monitor, Heartbeat, GameController, ChartPie, Newspaper } from "phosphor-react";
import { fetchNewsByCategory } from "../newsSlice";
import { AppThunk } from "app/store";
import { useHistory } from "react-router-dom";
import { CATEGORIES } from "app/constants";

interface Item {
    title: string,
    SVG: (props: any) => JSX.Element,
    action: AppThunk
}

const items :Item[] = [
    { action: () => fetchNewsByCategory(CATEGORIES.BUSINESS) , title: "Business", SVG: (props) => <Briefcase {...props} /> },
    { action: () => fetchNewsByCategory(CATEGORIES.SCIENCE) , title: "Science", SVG: (props) => <ChartPie {...props} /> },
    { action: () => fetchNewsByCategory(CATEGORIES.ENTERTAINMENT) , title: "Entertainment", SVG: (props) => <Monitor {...props} /> },
    { action: () => fetchNewsByCategory(CATEGORIES.SPORTS) , title: "Sports", SVG: (props) => <Horse {...props} /> },
    { action: () => fetchNewsByCategory(CATEGORIES.HEALTH) , title: "Hospital", SVG: (props) => <Heartbeat {...props} /> },
    { action: () => fetchNewsByCategory(CATEGORIES.TECHNOLOGY) , title: "Technology", SVG: (props) => <GameController {...props} /> },
]

interface ButtonProps {
    action: Function,
    title: string
}

const Button: FunctionComponent<ButtonProps> = ({action, children, title, ...props}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        history?.push("/");
        dispatch(action())
    }

    return (<div className={styles.link} onClick={handleClick} {...props} >
        <div className={styles.svg}>
            {children}
        </div>
        <span className={styles.text}>{title}</span>
    </div>)
}

const Menu: FunctionComponent = () => {
    return (<div className={styles.navbar}>
        <ul className={styles.nav}>
            <li className={styles.item}>
                <Button action={() => fetchNewsByCategory(CATEGORIES.ALL)} title="Accueil" >
                    <Newspaper size={32} weight="fill" />                
                </Button>
            </li>
            { items.map((item, index) => (<li key={`${index}-header`} className={styles.item}>
                    <Button action={item.action} title={item.title}>
                        <item.SVG size={32} weight="fill" />
                    </Button>
                </li>)
            ) }
        </ul>
    </div>);
}

export default Menu 