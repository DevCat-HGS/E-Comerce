import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    name: "Laptop Pro X1",
    description: "Potente laptop con procesador de última generación, perfecta para trabajo y gaming.",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Smartphone Ultra",
    description: "Teléfono inteligente con cámara de alta resolución y batería de larga duración.",
    price: 799.99,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    name: "Auriculares Premium",
    description: "Auriculares inalámbricos con cancelación de ruido activa.",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    name: "Tablet Pro",
    description: "Tablet perfecta para creativos y profesionales.",
    price: 599.99,
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    name: "Smartwatch Elite",
    description: "Reloj inteligente con monitoreo de salud y notificaciones.",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    name: "Cámara Digital Pro",
    description: "Cámara profesional para fotografía y video de alta calidad.",
    price: 899.99,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Productos Destacados</h2>
          <div className="flex gap-2">
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400">
              <option>Todos</option>
              <option>Electrónicos</option>
              <option>Accesorios</option>
              <option>Gadgets</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400">
              <option>Ordenar por</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Más Vendidos</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TiendaAzul</h3>
              <p className="text-gray-400">Tu tienda de confianza para productos electrónicos.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">Email: info@tiendaazul.com</p>
              <p className="text-gray-400">Teléfono: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 TiendaAzul. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;