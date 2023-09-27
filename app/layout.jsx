import "./globals.css";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
    title: "Cool Next 13 Website",
    description: "This is the description",
    keywords: "web next",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <Header />
                <main className='container'>{children}</main>
            </body>
        </html>
    );
}
