import React, { Fragment, FunctionComponent } from "react";
import Article from "components/Article";
import { selectArticles } from "features/news/newsSlice";
import { useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import styles from "styles/filter.article.module.scss"

const FilterArticle : FunctionComponent = () => {
    const history = useHistory();
    const params : any = useParams();
    const articles = useSelector(selectArticles);

    const information = articles.find(article => article._id === params.id); 
    
    if (!information) {
        history.push("/404");
        return (<Fragment />)
    } else 
        return (<>
            <Link className={styles.retour} to="/">
                <ArrowLeft size={24} weight="fill" />
                Retour
            </Link>
            <Article article={information} fullscreen={true} />
        </>)
}

export default FilterArticle;