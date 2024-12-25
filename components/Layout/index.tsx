import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <header className="h-fit w-full flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold ">X Copilot</h1>
        <p className="text-sm text-gray-500 break-words">
          A toolkit to streamline marketing on X
        </p>
      </header>

      {children}

      <footer className="h-11 w-full flex-shrink-0 flex flex-col items-center justify-between">
        <a
          href="https://hodlerskit.com/x-copilot"
          target="_blank"
          className="text-sm"
        >
          Learn more about X Copilot
        </a>
        <p className="text-sm text-gray-500">
          Made with love by{" "}
          <a href="https://hodlerskit.com" target="_blank">
            Hodlers Kit
          </a>
        </p>
      </footer>
    </div>
  );
};
