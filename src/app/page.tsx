import { Header, AboutDotOne, CompaniesCategory, Blog } from './components'

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='overflow-hidden mb-[60px]'>
        <AboutDotOne />
        <CompaniesCategory />
        <Blog />
      </main>
      <footer>{/* <Button>Click me</Button> */}</footer>
    </div>
  )
}
