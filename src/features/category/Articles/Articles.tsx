import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectArticles, Article, selectError } from "../categorySlice";
import styles from "./article.module.scss";
import { Link } from "react-router-dom";

const ArticleComponent = ({ article }: any) => {
    const { _id, image, title, publishedAt } = article;

    return (<Link key={_id} to={`/article/${_id}`} className={styles.item} >
        <img className={styles.image} src={image} alt=""/>
        <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.date}>{new Intl.DateTimeFormat('fr-FR').format(new Date(publishedAt))}</p>
        </div>
    </Link>)
}

export const ArticleList: FunctionComponent = () => {
    const articles = useSelector(selectArticles);
    const error = useSelector(selectError)
    return (<div>
        {articles.length > 0 ? 
            articles.map((article: Article) => (<ArticleComponent article={article} />))
            : <h1>{error}</h1>
        }
    </div>)
}