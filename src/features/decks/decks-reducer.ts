import { Deck } from 'features/decks/decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    case 'CREATE-DECK':
      return { ...state, decks: [ action.deck, ...state.decks ] }
    default:
      return state
  }
}

export type DecksActions = ReturnType<typeof setDecksAC>
  | ReturnType<typeof createDeckAC>

export const setDecksAC = (decks: Deck[]) => ({ type: 'SET-DECKS', decks } as const)
export const createDeckAC = (deck: Deck) => ({ type: 'CREATE-DECK', deck } as const)
