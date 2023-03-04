import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl text-center mt-2 text-black mb-5 font-bold">
        Welcome to the Amazon Web Scrapper
      </h1>
    </div>
  );
}

export default HomePage;
