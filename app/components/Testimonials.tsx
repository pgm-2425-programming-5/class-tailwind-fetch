// app/components/Testimonials.tsx
"use client"
import { useEffect, useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  feedback: string;
  photo: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials))
      .catch((error) => console.error('Error loading testimonials:', error));
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Wat Onze Klanten Zeggen</h2>
        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <img src={testimonials[current].photo} alt={testimonials[current].name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonials[current].name}</h3>
          <p className="text-gray-600 italic">"{testimonials[current].feedback}"</p>
          <div className="flex justify-center mt-4">
            <button onClick={prevTestimonial} className="bg-blue-500 text-white px-4 py-2 rounded-l hover:bg-blue-600">Vorige</button>
            <button onClick={nextTestimonial} className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">Volgende</button>
          </div>
        </div>
      </div>
    </section>
  );
}
