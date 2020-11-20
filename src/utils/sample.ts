import { v4 as uuid } from "uuid";
import { Information } from "features/news/newsSlice";
import faker from 'faker';

export const sampleArticle : () => Information = () => ({
    _id: uuid(),
    title: "Titre",
    image: faker.image.imageUrl(),
    description: faker.lorem.lines(2),
    auteur: faker.name.firstName() || "Auteur",
    publishedAt: new Date(faker.date.recent(1)).getTime(),
    content: faker.lorem.paragraph(5)
});