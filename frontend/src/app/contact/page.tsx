import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactMap from "./components/ContactMap";


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <main>
        <ContactHero />
        <ContactForm />
        <ContactMap />
      </main>
    </div>
  );
}
