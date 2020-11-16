export enum CATEGORIES {
    ALL = "",
    BUSINESS = "business",
    ENTERTAINMENT = "entertainment",
    HEALTH = "health",
    SCIENCE = "science",
    SPORTS = "sports",
    TECHNOLOGY = "technology"
}

export const ENDPOINT_API = (category: CATEGORIES) => (`http://newsapi.org/v2/top-headlines?country=fr&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}`)