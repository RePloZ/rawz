import { ArrowLeft } from "phosphor-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { selectArticles } from "../newsSlice";
import styles from "./info.module.scss";

const Info = () => {
    let { id } = useParams();

    const article = useSelector(selectArticles).find(article => id === article._id );
    
    return (article ?
        <div>
            <Link className={styles.retour} to="/">
                <ArrowLeft size={24} weight="fill" />
                Retour
            </Link>
            <div className={styles.item}>
                <img className={styles.image} src={article.image} alt=""/>
                <div className={styles.text}>
                    <h2>{article.auteur}</h2>
                    <h3 className={styles.title}>{article.title}</h3>
                    <p className={styles.date}>{new Intl.DateTimeFormat('fr-FR').format(new Date(article.publishedAt))}</p>
                    <p className={styles.description}>{article.description}</p>
                </div>
            </div>
            <p className={styles.description}>{article.content}</p>
        </div>
        : <div>
            <p>Nous ne trouvons pas l'article que vous avez selectionné</p>
            <Link to="/">Cliquez ici pour retourner au menu</Link>
        </div>)
}

export default Info;