import axios from 'axios'

export const instance = axios.create( {
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
} )

export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksResponseType>( '/v2/decks' )
  },
}

// types
// entity types
export type DeckType = {
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: Date
  updated: Date
  cardsCount: number
}
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

// response types
type GetDecksResponseType = {
  items: DeckType[]
  pagination: PaginationType
}
