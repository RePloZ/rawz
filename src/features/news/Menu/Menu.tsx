import React, { FunctionComponent } from "react";
import styles from "./menu.module.scss";
import { useDispatch } from "react-redux";
import { Horse, Briefcase, Monitor, Heartbeat, GameController, ChartPie, Newspaper } from "phosphor-react";
import { setAsyncCategory } from "../newsSlice";
import { AppThunk } from "app/store";
import { useHistory } from "react-router-dom";
import { CATEGORIES } from "app/constants";

interface Item {
    title: string,
    SVG: (props: any) => JSX.Element,
    action: AppThunk
}

const items :Item[] = [
    { action: () => setAsyncCategory(CATEGORIES.BUSINESS) , title: "Business", SVG: (props) => <Briefcase {...props} /> },
    { action: () => setAsyncCategory(CATEGORIES.SCIENCE) , title: "Science", SVG: (props) => <ChartPie {...props} /> },
    { action: () => setAsyncCategory(CATEGORIES.ENTERTAINMENT) , title: "Entertainment", SVG: (props) => <Monitor {...props} /> },
    { action: () => setAsyncCategory(CATEGORIES.SPORTS) , title: "Sports", SVG: (props) => <Horse {...props} /> },
    { action: () => setAsyncCategory(CATEGORIES.HEALTH) , title: "Hospital", SVG: (props) => <Heartbeat {...props} /> },
    { action: () => setAsyncCategory(CATEGORIES.TECHNOLOGY) , title: "Technology", SVG: (props) => <GameController {...props} /> },
]

interface ButtonProps {
    action: Function,
    title: string
}

const Button: FunctionComponent<ButtonProps> = ({action, children, title, ...props}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
        dispatch(action())
    }

    return (<div className={styles.link} onClick={handleClick} {...props} >
        <div className={styles.svg}>
            {children}
        </div>
        <span className={styles.text}>{title}</span>
    </div>)
}

export const Menu: FunctionComponent = () => {
    return (<div className={styles.navbar}>
        <ul className={styles.nav}>
            <li className={styles.item}>
                <Button action={() => setAsyncCategory(CATEGORIES.ALL)} title="Accueil" >
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