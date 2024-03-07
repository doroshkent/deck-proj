import { combineReducers, legacy_createStore, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { DecksActions, decksReducer } from '../features/decks/decks-reducer.ts'
import { AppActions, appReducer } from 'app/app-reducer.ts'

const rootReducer = combineReducers({
  decks: decksReducer,
  app: appReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>
export type Actions = DecksActions | AppActions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, Actions>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector

// @ts-ignore
window.store = store
