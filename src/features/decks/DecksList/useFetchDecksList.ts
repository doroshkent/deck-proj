import { useAppDispatch } from 'app/store.ts'
import { useSelector } from 'react-redux'
import { selectDecks } from 'features/decks/decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from 'features/decks/decks-thunks.ts'

export const useFetchDecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return { decks }
}
