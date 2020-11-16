import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectArticles, Article, selectMessage } from "../articlesSlice";
import styles from "./article.module.scss";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const ArticleComponent = ({ article }: any) => {
    const { _id, image, title, publishedAt } = article;

    return (<Link to={`/article/${_id}`} className={styles.item} >
        <img className={styles.image} src={image} alt=""/>
        <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.date}>{new Intl.DateTimeFormat('fr-FR').format(new Date(publishedAt))}</p>
        </div>
    </Link>)
}

export const ArticleList: FunctionComponent = () => {
    const articles = useSelector(selectArticles);
    const message = useSelector(selectMessage)
    return (<div>
        {articles.length > 0 ? 
            articles.map((article: Article) => (<ArticleComponent key={uuid()} article={article} />))
            : <h1>{message}</h1>
        }
    </div>)
}