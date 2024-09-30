// app/components/Hero.tsx

export default function Hero() {
    return (
      <section id="home" className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-white bg-opacity-75 p-8 rounded">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welkom bij MijnWebsite</h1>
          <p className="text-gray-600 mb-6">Wij bieden de beste oplossingen voor jouw online aanwezigheid.</p>
          <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Neem Contact Op</a>
        </div>
      </section>
    );
  }
  