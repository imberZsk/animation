// import SidebarNoteItem from '@/components/SidebarNoteItem'
// import { getAllNotes } from '@/lib/strapi'

// export default async function NoteList() {
//   const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
//   await sleep(2000)
//   const notes = await getAllNotes()

//   const arr = Object.entries(notes)

//   if (arr.length == 0) {
//     return <div className="notes-empty">{'No notes created yet!'}</div>
//   }

//   return (
//     <ul className="notes-list">
//       {arr.map(([noteId, note]) => {
//         return (
//           <li key={noteId}>
//             <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

// import SidebarNoteListFilter from '@/components/SidebarNoteListFilter'
// import { getAllNotes } from '@/lib/strapi'
// import { sleep } from '@/lib/utils'

// export default async function NoteList() {
//   await sleep(3000)
//   const notes = await getAllNotes()

//   if (Object.entries(notes).length == 0) {
//     return <div className="notes-empty">{'No notes created yet!'}</div>
//   }

//   return <SidebarNoteListFilter notes={notes} />
// }

import SidebarNoteListFilter from '@/components/SidebarNoteListFilter'
import SidebarNoteItem from '@/components/SidebarNoteItem'
import { getAllNotes } from '@/lib/strapi'
import { sleep } from '@/lib/utils'

export default async function NoteList({ lng }) {
  await sleep(2000)
  const notes = await getAllNotes()

  if (Object.entries(notes).length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>
  }

  return (
    <SidebarNoteListFilter>
      {Object.entries(notes).map(([noteId, note], index) => {
        return (
          <SidebarNoteItem
            lng={lng}
            noteId={noteId}
            note={JSON.parse(note)}
            key={index}
          />
        )
      })}
    </SidebarNoteListFilter>
  )
}

// 尝试5
// import SidebarNoteListFilter from '@/components/SidebarNoteListFilter'
// import { getAllNotes } from '@/lib/strapi'
// import { sleep } from '@/lib/utils'
// import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader'

// export default async function NoteList() {
//   await sleep(2000)
//   const notes = await getAllNotes()

//   if (Object.entries(notes).length == 0) {
//     return <div className="notes-empty">{'No notes created yet!'}</div>
//   }

//   return (
//     <SidebarNoteListFilter
//       notes={Object.entries(notes).map(([noteId, note]) => {
//         const noteData = JSON.parse(note)
//         return {
//           noteId,
//           note: noteData,
//           header: (
//             <SidebarNoteItemHeader
//               title={noteData.title}
//               updateTime={noteData.updateTime}
//             />
//           )
//         }
//       })}
//     />
//   )
// }
