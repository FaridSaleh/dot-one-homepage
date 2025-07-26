import { Header, AboutDotOne, CompaniesCategory } from './components'

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='min-h-[2000px]'>
        <AboutDotOne />
        <CompaniesCategory />
      </main>
      <footer>{/* <Button>Click me</Button> */}</footer>
    </div>
  )
}
