import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from '@redux-devtools/extension'

const initialState = JSON.parse(localStorage.getItem('scene-it')) || undefined

const composeEnhancers = composeWithDevTools({});

const localStorageMiddleware = storeAPI => next => action => {
    const state = storeAPI.getState()
    localStorage.setItem('scene-it', JSON.stringify(state))

    return next(action)
}

const middlewareEnhancer = applyMiddleware(localStorageMiddleware)

export const store = createStore(rootReducer, initialState, composeEnhancers(middlewareEnhancer))

export default store