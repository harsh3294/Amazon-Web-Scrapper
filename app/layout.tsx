import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
export const metadata = {
  title: "Amazon Web Scrapper",
  description: "To scrap the data with the bright data and firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-[#F7FBFF] h-screen ">
        <Sidebar />
        <main className="p-10 max-width-6xl w-full mx-auto overflow-y-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
