import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Välkommen till TODO-listan!
      </h1>
      <Image src="/viking.jpg" alt="Välkomstbild" width={300} height={200} />
      <nav className="mt-8">
        <Link
          href="/todo"
          className="text-darktext underline hover:text-primary"
        >
          TODO-lista
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
