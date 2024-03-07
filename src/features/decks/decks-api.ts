import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksResponse>('/v2/decks')
  },
  createDeck(params: AddDeckParams) {
    return instance.post<Deck>('/v1/decks', params)
  },
}

// types
export type AddDeckParams = {
  name: string
}
export type Deck = {
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
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

// response types
type GetDecksResponse = {
  items: Deck[]
  pagination: Pagination
}
