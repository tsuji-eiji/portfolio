import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";


export const metadata = {
  title: {
    default: "TECH 24",
    template: "%s | TECH 24",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="container mx-auto mb-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
