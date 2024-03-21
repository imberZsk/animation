import { getDictionary } from '../get-dictionary'

export default async function Page({ params: { lng } }) {
  const data = await getDictionary(lng)

  return (
    <div className="note--empty-state">
      <span className="note-text--empty-state">{data.text}</span>
    </div>
  )
}
