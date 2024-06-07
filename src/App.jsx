import Intro from './componants/Intro'
import About from './componants/Nav/About'
import Navigation from './componants/Navigation'

function App() {
  return (
    <>
      <div className='flex min-h-screen flex-col bg-[#121212]'>
          <Navigation/>
        <div className='container mt-24 mx-auto px-12 py-4'>
        <Intro/>
        <About/>
        </div>
      </div>
    </>
  )
}

export default App
