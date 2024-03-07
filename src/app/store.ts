import { combineReducers, legacy_createStore, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { DecksActions, decksReducer } from '../features/decks/decks-reducer.ts'
import { appReducer } from 'app/app-reducer.ts'

const rootReducer = combineReducers({
  decks: decksReducer,
  app: appReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>
export type AppActions = DecksActions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActions>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
