import {
  Header,
  AboutDotOne,
  CompaniesCategory,
  Blog,
  CompaniesIntroduction,
  ContactUs,
  Footer,
} from './components'

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='overflow-hidden'>
        <AboutDotOne />
        <CompaniesCategory />
        <Blog />
        <CompaniesIntroduction />
        <ContactUs />
        <Footer />
      </main>
    </div>
  )
}
