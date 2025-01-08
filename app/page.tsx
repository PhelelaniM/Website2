import Hero from '../components/hero'
import Projects from '../components/projects'
import Stack from '../components/stack'
import Expertise from '../components/expertise'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Projects />
      <Stack />
      <Expertise />
    </main>
  )
}
