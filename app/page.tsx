import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';
import ThemeSwitch from '@/components/Switch';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Header />
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ThemeSwitch />
    </main>
  );
}
