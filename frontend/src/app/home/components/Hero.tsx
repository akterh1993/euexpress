export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to EUExpress</h1>
        <p className="text-lg mb-6">Your One-Stop Multi-Vendor E-Commerce platform</p>
        <button className="px-6 py-3 bg-white text-indigo-600 rounded-full shadow hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
