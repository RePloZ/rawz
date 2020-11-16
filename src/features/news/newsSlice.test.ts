import { 
    setArticles, 
    setMessage, 
} from "./newsSlice";
import thunk from "redux-thunk"
import configureMockStore from "redux-mock-store";
import fetchMock from 'fetch-mock';
import { sampleArticle } from "utils/sample";

const middleware = [thunk]
const mockStore = configureMockStore(middleware);

describe('actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('should create an action to set todo', () => {
        const sampleArticles = [sampleArticle()]

        const expectedAction = {
            type: "category/setArticles",
            payload: sampleArticles
        }
        
        expect(setArticles(sampleArticles)).toEqual(expectedAction)
    })
    
    it('should create an action to set message', () => {
        const message = "Test Message"
        
        const expectedAction = {
            type: "category/setMessage",
            payload: message
        }
        
        expect(setMessage(message)).toEqual(expectedAction)
    })
    
    //TODO Create an action for the redux-thunk action
})