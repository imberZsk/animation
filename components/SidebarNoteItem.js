import SidebarNoteItemContent from '@/components/SidebarNoteItemContent'
import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader'
export default function SidebarNoteItem({ noteId, note, lng }) {
  const { title, content = '', updateTime } = note
  return (
    <SidebarNoteItemContent
      lng={lng}
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  )
}
