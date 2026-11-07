import './App.css'

function App() {

  return (
    <main>
      <header className="app-header">
        <img src={"/logo.svg"} className="logo" alt="Erased Tapes" />

        <nav>
          <a href="">Our Blog </a>
          <a href="">Our Artists</a>
          <a href="">Our Story</a>
        </nav>
      </header>

      <article className="blogs-articles">
        <h1>Erased Tapes:
          <span className='subtitle'>
            Exploring the Sonic Frontier
          </span>
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem rerum animi quibusdam officiis sunt veritatis tempora delectus nemo, repellat, pariatur laboriosam! Pariatur odit quas dicta quaerat, soluta maiores exercitationem at libero harum cum.</p>

      </article>
    </main>
  )
}

export default App
