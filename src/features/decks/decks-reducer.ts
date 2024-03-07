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
    case 'DECKS/SET-DECKS':
      return { ...state, decks: action.decks }
    case 'DECKS/ADD-DECK':
      return { ...state, decks: [action.deck, ...state.decks] }
    default:
      return state
  }
}

export type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: Deck[]) => ({ type: 'DECKS/SET-DECKS', decks }) as const
export const addDeckAC = (deck: Deck) => ({ type: 'DECKS/ADD-DECK', deck }) as const
