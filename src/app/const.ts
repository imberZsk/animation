interface NavigationSection {
  id: string
  name: string
  path: string
  src: string
}

export const navigationSections: NavigationSection[] = [
  { id: 'split', name: 'Split Text', path: '/animations/text/split', src: '/animations/split.mov' },
  { id: 'blur', name: 'Blur Text', path: '/animations/text/blur', src: '/animations/blur.mov' },
  { id: 'add', name: 'Add Text', path: '/animations/text/add', src: '/animations/add.mov' },
  { id: 'shiny', name: 'Shiny Text', path: '/animations/text/shiny', src: '/animations/shiny.mov' },
  {
    id: 'stagger-framer',
    name: 'Stagger Framer Motion',
    path: '/animations/stagger/framer',
    src: '/animations/stagger.mov'
  },
  { id: 'stagger-gsap', name: 'Stagger GSAP', path: '/animations/stagger/gsap', src: '/animations/stagger.mov' },
  {
    id: 'timeline-framer',
    name: 'Timeline Framer Motion',
    path: '/animations/timeline/framer',
    src: '/animations/timeline.mov'
  },
  {
    id: 'timeline-gsap',
    name: 'Timeline GSAP',
    path: '/animations/timeline/gsap',
    src: '/animations/timeline.mov'
  },
  {
    id: 'exit-framer',
    name: 'Exit Framer Motion',
    path: '/animations/exit/framer',
    src: '/animations/exit.mov'
  },
  { id: 'exit-gsap', name: 'Exit GSAP', path: '/animations/exit/gsap', src: '/animations/exit.mov' },
  { id: 'layout', name: 'Layout', path: '/animations/layout', src: '/animations/layout.mov' }
]
