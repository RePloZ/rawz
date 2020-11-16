import { v4 as uuid } from "uuid";
import { Article } from "features/article/articlesSlice";

export const sampleArticle : () => Article = () => ({
    _id: uuid(),
    title: "Titre",
    image: "Link to image",
    description: "Description",
    auteur: "Auteur",
    publishedAt: Date.now(),
    content: "Lorem Ipsum ..."
});