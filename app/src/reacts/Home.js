function Home({ page, setPage }) {
  return (
    <div className="container2">
        <h2> The Burning Website</h2>
        <p> This website is purely a prototype. The aim is to create a game with it. <br />
        I hope you are interested for this project.</p>
        <p>Press the button to start the project.</p>
        <button onClick={() => setPage(1)}>Start Game</button>
        <p>Consider <span onClick={() => setPage(3)}><b><u>supporting</u></b></span> me if you like the project or wants more from me.</p>
    </div>
  )
}

export default Home