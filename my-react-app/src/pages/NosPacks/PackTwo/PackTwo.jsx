import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import TypePacks from "./TypesPacks";
import WebsiteShowcase from './Websites';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'apparition des éléments
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white mt-38">
        {/* Formes flottantes */}
        <div className="absolute top-8 left-30 w-24 h-24 rounded-full bg-purple-300 opacity-40 animate-bounce" />
        <div className="absolute top-8 right-30 w-24 h-24 rounded-full bg-pink-200 opacity-30 animate-bounce" />
        <div className="absolute bottom-20 left-60 w-20 h-20 rounded-full bg-indigo-200 opacity-30 animate-bounce" />
        <div className="absolute bottom-20 right-60 w-20 h-20 rounded-full bg-purple-200 opacity-40 animate-bounce" />
        {/* Cercle flou plus grand en arrière-plan */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-xl " />
        <div className="absolute top-1/4 right-135 w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-xl" />
        <div className="absolute top-8 left-1/4 w-72 h-72 rounded-full bg-pink-300 opacity-20 blur-xl" />
        <div className="absolute top-8 right-1/4 w-72 h-72 rounded-full bg-pink-300 opacity-20 blur-xl" />
        {/* Badge "Click Below" */}
        <div className="absolute top-4 inset-x-0 flex justify-center">
          <div className="bg-white border-2 border-black text-black text-xs rounded-full px-4 py-1 font-medium">
            Scroll below
          </div>
        </div>
        {/* Contenu principal */}
        <div className={`text-center flex flex-col items-center px-6 max-w-full transition-all duration-1000  ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h1 className="text-4xl md:text-7xl font-bold max-w-[800px] text-gray-900 mb-4">
            PACKS CONCEPTION GRAPHIQUE
          </h1>

          <p className="text-gray-700 mb-8  text-center max-w-lg leading-relaxed">
          Une identité visuelle forte est essentielle. Nous créons des designs percutants, fidèles à vos valeurs, pour capter l’attention et renforcer votre image de marque.
          </p>
   
          {/* Boutons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           <a href="/contact">
               <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-md shadow transition-all">
              Contact us
            </button>
           </a>
            <a href="/portfolio">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md shadow transition-all">
              See our work
            </button>
          </a>
          </div>
        </div>

        {/* Flèche vers le bas */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce">
          <ChevronDown size={24} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      <div>
        <TypePacks />
      </div>
      <div>
        <WebsiteShowcase />
      </div>
    </div>
  );
}
