import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <header className="h-[60px] w-full flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold ">Hodlers Kit - Airdrop</h1>
        <p className="text-sm text-gray-500">
          a toolkit to simplify and streamline airdrops
        </p>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full">
        <form className="flex flex-col items-center justify-center h-full w-full gap-4">
          <input
            type="text"
            placeholder="Enter your X post's url to get started"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button type="submit">Submit</button>
        </form>
      </main>

      <footer className="h-[60px] w-full flex items-center justify-center">
        <a href="https://hodlerskit.com" target="_blank">
          Learn more about Hodlers Kit
        </a>
      </footer>
    </div>
  );
}

export default App;
