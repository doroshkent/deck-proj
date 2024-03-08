import s from './DecksList.module.css'
import { DeckItem } from 'features/decks/DecksList/DeckItem/DeckItem.tsx'
import { useFetchDecksList } from 'features/decks/DecksList/useFetchDecksList.ts'
import { DeckItemSkeleton } from 'features/decks/DecksList/DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecksList()

  return (
    <ul className={s.list}>
      {isLoading && decks.length === 0 && <DeckItemSkeleton count={10} />}
      {decks.map((d) => (
        <DeckItem key={d.id} deck={d} />
      ))}
    </ul>
  )
}
