import React from "react";

const mockIntegrators = [
  {
    name: "Ashwagandha Complex",
    brand: "NutraVita",
    use: "Stress, energia, sonno",
    ingredients: "Ashwagandha, Vitamina B6, Magnesio",
    link: "https://example.com/ashwagandha"
  },
  {
    name: "Omega 3 Ultra",
    brand: "BioPlus",
    use: "Cuore, cervello, infiammazioni",
    ingredients: "EPA, DHA da olio di pesce",
    link: "https://example.com/omega3"
  },
  {
    name: "Curcuma Premium",
    brand: "PhytoLife",
    use: "Infiammazione, digestione",
    ingredients: "Curcumina, Pepe Nero",
    link: "https://example.com/curcuma"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 p-6">
      <h1 className="text-3xl font-bold mb-6">DOMINIVM</h1>
      <p className="mb-4 text-sm text-neutral-600">Motore di ricerca per integratori funzionali</p>
      <div className="flex gap-4 mb-8">
        <input placeholder="Cerca un integratore..." className="w-full max-w-md border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Cerca</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockIntegrators.map((item, idx) => (
          <div key={idx} className="shadow-lg border rounded p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-sm text-neutral-600 mb-1">Marca: {item.brand}</p>
            <p className="text-sm text-neutral-600 mb-1">Uso: {item.use}</p>
            <p className="text-sm text-neutral-600 mb-2">Ingredienti: {item.ingredients}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              Vai al prodotto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}