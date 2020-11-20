import React, { Fragment, FunctionComponent } from "react";
import Article from "components/Article";
import { fetchNewsByCategory, selectArticles } from "features/news/newsSlice";
import { useSelector } from "react-redux";
import { CATEGORIES } from "app/constants";

const ListArticle : FunctionComponent = () => {
    const articles = useSelector(selectArticles);

    if (articles.length === 0) {
        fetchNewsByCategory(CATEGORIES.ALL)
    }

    return (<>
        {
            articles.map(article => <Article key={article._id} article={article} fullscreen={false} />)
        }
    </>)
}

export default ListArticle;