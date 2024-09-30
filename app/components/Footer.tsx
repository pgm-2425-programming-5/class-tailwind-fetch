// app/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-white shadow mt-20">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} MijnWebsite. Alle rechten voorbehouden.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  