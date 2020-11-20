import React, { FunctionComponent } from "react"
import { useHistory } from "react-router-dom";
import { Information } from "features/news/newsSlice"
import styles from "./article.module.scss"
import classNames from "classnames";

interface articleProps {
    fullscreen?: boolean,
    article: Information
}

const Article : FunctionComponent<articleProps> = ({fullscreen = false, article}) => {
    const history = useHistory();
    const description = classNames(styles.description, fullscreen ? "" : styles.none)
    
    const titleDate = (<>
        <h2>{article.auteur}</h2>
        <h3>{article.title}</h3>
        <p className={styles.date}>{new Intl.DateTimeFormat('fr-FR').format(new Date(article.publishedAt))}</p>
    </>)

    return (<>
        <div className={classNames(styles.title, fullscreen ? "" : styles.border)} onClick={() => !fullscreen && history.push(`/article/${article._id}`)}>
        { fullscreen ? titleDate : null }
        </div>
        <div className={classNames(styles.item, fullscreen ? "" : styles.border)} onClick={() => !fullscreen && history.push(`/article/${article._id}`)}>
            <img src={article.image} className={styles.image} />
            <div className={styles.text}>
                { fullscreen ? null : titleDate }
                <p className={description} hidden={!fullscreen}>{article.description}</p>
            </div>
        </div>
        <p className={description} hidden={!fullscreen} >{article.content}</p>
    </>)
}

export default Article;