import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./products/components/CartContext"; // adjust path

export const metadata: Metadata = {
  title: "EUExpress",
  description: "E-commerce platform for clothing & accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}



// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


// export const metadata: Metadata = {
//   title: "EUExpress",
//   description: "E-commerce platform for clothing & accessories",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 text-gray-900">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


