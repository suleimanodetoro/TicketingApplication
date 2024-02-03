import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import "@fortawesome/fontawesome-svg-core/styles.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description:
    "This app was created to help me conceptualize another application haha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* because we want the nav bar to take up the full width of the screen, we use use the following styles */}
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          {/* because the "page" color has already been defined in the tailwind config file, it works just fine */}
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
          {children}

          </div>
        </div>
      </body>
    </html>
  );
}
