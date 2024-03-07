import s from './DecksList.module.css'
import { DeckItem } from 'features/decks/DecksList/DeckItem/DeckItem.tsx'
import { useFetchDecksList } from 'features/decks/DecksList/useFetchDecksList.ts'

export const DecksList = () => {
  const { decks } = useFetchDecksList()

  return (
    <ul className={s.list}>
      {decks.map((d) => (
        <li key={d.id}>
          <DeckItem deck={d} />
        </li>
      ))}
    </ul>
  )
}
