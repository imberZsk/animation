interface NavigationSection {
  id: string
  name: string
  path: string
  src: string
}

export const navigationSections: NavigationSection[] = [
  { id: 'split', name: 'Split Text - GSAP', path: '/animations/split', src: '/animations/split.mov' },
  { id: 'blur', name: 'Blur Text', path: '/animations/blur', src: '/animations/blur.mov' },
  { id: 'add', name: 'Add Text', path: '/animations/add', src: '/animations/add.mov' },
  { id: 'shiny', name: 'Shiny Text - CSS', path: '/animations/shiny', src: '/animations/shiny.mov' },
  {
    id: 'stagger-framer',
    name: 'Stagger - Framer Motion',
    path: '/animations/stagger/framer',
    src: '/animations/stagger.mov'
  },
  { id: 'stagger-gsap', name: 'Stagger - GSAP', path: '/animations/stagger/gsap', src: '/animations/stagger.mov' },
  {
    id: 'timeline-framer',
    name: 'Timeline - Framer Motion',
    path: '/animations/timeline/framer',
    src: '/animations/timeline.mov'
  },
  {
    id: 'timeline-gsap',
    name: 'Timeline - GSAP',
    path: '/animations/timeline/gsap',
    src: '/animations/timeline.mov'
  },
  {
    id: 'exit-framer',
    name: 'Exit - Framer Motion',
    path: '/animations/exit/framer',
    src: '/animations/exit.mov'
  },
  { id: 'exit-gsap', name: 'Exit - GSAP', path: '/animations/exit/gsap', src: '/animations/exit.mov' },
  { id: 'layout', name: 'Layout - Framer Motion', path: '/animations/layout', src: '/animations/layout.mov' },
  { id: 'tab', name: 'Tab - Framer Motion', path: '/animations/tab', src: '/animations/tab.mov' },
  { id: 'scroll', name: 'Scroll - GSAP', path: '/animations/scroll/gsap', src: '/animations/scroll.mov' },
  { id: 'scroll', name: 'Scroll - Framer Motion', path: '/animations/scroll/framer', src: '/animations/scroll.mov' },
  { id: 'fade', name: 'Fade - GSAP', path: '/animations/fade/gsap', src: '/animations/fade.mov' },
  { id: 'fade', name: 'Fade - Framer Motion', path: '/animations/fade/framer', src: '/animations/fade.mov' },
  { id: 'pin', name: 'Pin - GSAP', path: '/animations/pin/gsap', src: '/animations/pin.mov' },
  { id: 'pin', name: 'Pin - Framer Motion', path: '/animations/pin/framer', src: '/animations/pin.mov' },
  { id: 'parallax', name: 'Parallax - GSAP', path: '/animations/parallax/gsap', src: '/animations/parallax.mov' },
  {
    id: 'parallax',
    name: 'Parallax - Framer Motion',
    path: '/animations/parallax/framer',
    src: '/animations/parallax.mov'
  },
  { id: 'svg', name: 'SVG - GSAP', path: '/animations/svg/gsap', src: '/animations/svg.mov' },
  { id: 'svg', name: 'SVG - Framer Motion', path: '/animations/svg/framer', src: '/animations/svg.mov' }
]
