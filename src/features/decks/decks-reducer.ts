import { DeckType } from 'features/decks/decks-api.ts'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    default:
      return state
  }
}

export type DecksActions = ReturnType<typeof setDecksAC>

export const setDecksAC = (decks: DeckType[]) => ({ type: 'SET-DECKS', decks } as const)
