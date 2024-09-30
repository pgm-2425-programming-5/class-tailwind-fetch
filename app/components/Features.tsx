// app/components/Features.tsx
import fs from 'fs/promises';
import path from 'path';

type Feature = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

type FeaturesProps = {
    features: Feature[];
};

export default async function Features() {
    let data = await fs.readFile(path.join(process.cwd(), 'public/data/features.json'), 'utf-8');
    let features: Feature[] = JSON.parse(data).features;
    return (
        <section id="features" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Onze Features</h2>
                <div className="flex flex-wrap justify-center">
                    {features.map((feature) => (
                        <div key={feature.id} className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={feature.icon} alt={feature.title} className="mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
