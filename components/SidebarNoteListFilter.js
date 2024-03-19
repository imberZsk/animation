// 'use client'

// import SidebarNoteItem from '@/components/SidebarNoteItem'
// import { useSearchParams } from 'next/navigation'

// export default function SidebarNoteListFilter({ notes }) {
//   const searchParams = useSearchParams()
//   const searchText = searchParams.get('q')

//   return (
//     <ul className="notes-list">
//       {Object.entries(notes).map(([noteId, note]) => {
//         const noteData = JSON.parse(note)
//         if (
//           !searchText ||
//           (searchText &&
//             noteData.title.toLowerCase().includes(searchText.toLowerCase()))
//         ) {
//           return (
//             <li key={noteId}>
//               <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
//             </li>
//           )
//         }
//         return null
//       })}
//     </ul>
//   )
// }

'use client'

import { useSearchParams } from 'next/navigation'
import { Children } from 'react'

export default function SidebarNoteList({ children }) {
  const searchParams = useSearchParams()
  const searchText = searchParams.get('q')
  return (
    <ul className="notes-list">
      {Children.map(children, (child, index) => {
        const title = child.props.title
        if (
          !searchText ||
          (searchText && title.toLowerCase().includes(searchText.toLowerCase()))
        ) {
          return <li key={index}>{child}</li>
        }
        return null
      })}
    </ul>
  )
}

// 尝试5
// 'use client'

// import { useSearchParams } from 'next/navigation'
// import SidebarNoteItemContent from '@/components/SidebarNoteItemContent'

// export default function SidebarNoteList({ notes }) {
//   const searchParams = useSearchParams()
//   const searchText = searchParams.get('q')
//   return (
//     <ul className="notes-list">
//       {notes.map((noteItem) => {
//         const { noteId, note, header } = noteItem
//         if (
//           !searchText ||
//           (searchText &&
//             note.title.toLowerCase().includes(searchText.toLowerCase()))
//         ) {
//           return (
//             <SidebarNoteItemContent
//               key={noteId}
//               id={noteId}
//               title={note.title}
//               expandedChildren={
//                 <p className="sidebar-note-excerpt">
//                   {note.content.substring(0, 20) || <i>(No content)</i>}
//                 </p>
//               }
//             >
//               {header}
//             </SidebarNoteItemContent>
//           )
//         }

//         return null
//       })}
//     </ul>
//   )
// }
