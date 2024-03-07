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
    case 'DECKS/DELETE-DECK':
      return { ...state, decks: state.decks.filter((deck) => deck.id !== action.id) }
    case 'DECKS/UPDATE-DECK':
      return {
        ...state,
        decks: state.decks.map((deck) => (deck.id === action.updatedDeck.id ? action.updatedDeck : deck)),
      }
    default:
      return state
  }
}

export type DecksActions =
  | ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDeckAC>
  | ReturnType<typeof deleteDeckAC>
  | ReturnType<typeof updateDeckAC>

export const setDecksAC = (decks: Deck[]) => ({ type: 'DECKS/SET-DECKS', decks }) as const
export const addDeckAC = (deck: Deck) => ({ type: 'DECKS/ADD-DECK', deck }) as const
export const deleteDeckAC = (id: string) => ({ type: 'DECKS/DELETE-DECK', id }) as const
export const updateDeckAC = (updatedDeck: Deck) => ({ type: 'DECKS/UPDATE-DECK', updatedDeck }) as const
