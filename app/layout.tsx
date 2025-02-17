import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="flex">
        <Sidebar /> 
        <div className="flex-1">
          <Header />
          <main className="p-6">{children}</main> 
        </div>
      </body>
    </html>
  );
}
