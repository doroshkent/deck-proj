import { Deck } from 'features/decks/decks-api.ts'
import { DecksState, decksReducer, setDecksAC, createDeckAC } from 'features/decks/decks-reducer.ts'

let startState: DecksState

const deck: Deck = {
  author: {
    id: '1',
    name: 'Author',
  },
  id: '1',
  userId: '1',
  name: 'Deck',
  isPrivate: true,
  cover: 'cover',
  created: new Date(),
  updated: new Date(),
  cardsCount: 5,
}

beforeEach( () => {
  startState = {
    decks: [],
    searchParams: {
      name: '',
    },
  }
} )

describe( 'decks reducer', () => {
  test( 'decks should be set', () => {
    const endState = decksReducer( startState, setDecksAC( [ deck ] ) )

    expect( endState.decks.length ).toBe( 1 )
    expect( endState.decks[0].name ).toBe( 'Deck' )
  } )

  test( 'a new deck should be created', () => {
    const newDeck: Deck = {
      author: { id: '2', name: 'New Author' },
      id: '2',
      userId: '2',
      name: 'New Deck',
      isPrivate: true,
      cover: 'new cover',
      created: new Date(),
      updated: new Date(),
      cardsCount: 8,
    }

    const endState = decksReducer( startState, createDeckAC( newDeck ) )

    expect( endState.decks.length ).toBe( 1 )
    expect( endState.decks[0].name ).toBe( 'New Deck' )
  } )
} )
