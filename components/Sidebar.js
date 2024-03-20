import React, { Suspense } from 'react'
import Link from 'next/link'
import SidebarSearchField from '@/components/SidebarSearchField'
import SidebarNoteList from '@/components/SidebarNoteList'
import EditButton from '@/components/EditButton'
import NoteListSkeleton from '@/components/NoteListSkeleton'
import LocaleSwitcher from '@/components/locale-switcher'

// // 移除数据请求部分，为 SidebarNoteList 添加 Suspense 以及 fallback UI NoteListSkeleton
export default async function Sidebar({ lng }) {
  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <SidebarSearchField />
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList lng={lng} />
          </Suspense>
        </nav>
        <div className="px-16">
          <LocaleSwitcher lang={lng}></LocaleSwitcher>
        </div>
      </section>
    </>
  )
}
