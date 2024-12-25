import { Link } from "react-router-dom";
import "./App.css";
import { Layout } from "@/components/Layout";
import airdropImage from "@/assets/images/airdrop.webp";

function App() {
  return (
    <Layout>
      <main className="w-full grid grid-cols-3 grid-rows-4 gap-2">
        <Link
          className="flex flex-col items-center justify-between p-2 rounded-lg shadow-lg bg-sky-200"
          to="/airdrop"
        >
          <img src={airdropImage} alt="Airdrop" className="w-10 h-10" />
          <h2 className="text-base font-bold">Airdrop</h2>
        </Link>
      </main>
    </Layout>
  );
}

export default App;
