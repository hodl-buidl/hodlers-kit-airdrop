import { Layout } from "../Layout";

export const Airdrop = () => {
  return (
    <Layout>
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        <form className="flex flex-col items-center justify-center flex-grow w-full gap-4">
          <input
            type="text"
            autoFocus
            placeholder="Enter your X post's url to get started"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </Layout>
  );
};
