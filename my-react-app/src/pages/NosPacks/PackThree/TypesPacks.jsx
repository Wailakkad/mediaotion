import { useState } from 'react';
import { Check, Monitor, Rocket, ShoppingCart, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Function to handle checkout navigation
  const handleCheckout = (packageName, price) => {
    // Create URL with query parameters
    const queryParams = new URLSearchParams({
      service: 'web services',
      package: packageName,
      price: price
    }).toString();
    
    // Navigate to checkout page with query parameters
    window.location.href = `/checkout?${queryParams}`;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-violet-700">
          SERVICES SITE WEB
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
           Choisissez le pack qui correspond le mieux à vos besoins et à votre budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Pack Basic */}
        <PricingCard
          icon={<Monitor />}
          iconColor="text-gray-700"
          iconBg="bg-gray-100"
          title="Pack Basic"
          price="5000"
          description="L'essentiel pour une présence en ligne professionnelle."
          features={[
            "Site vitrine de 1 à 3 pages",
            "Design responsive (mobile, tablette, desktop)",
            "Interface attractive et claire",
            "Optimisation SEO de base",
            "1 séance de consulting gratuite"
          ]}
          idealFor="Recommandé pour : Indépendants, artisans, petites structures"
          buttonVariant="outline"
          isHovered={hoveredCard === 'basic'}
          onMouseEnter={() => setHoveredCard('basic')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.1}
          onCheckout={() => handleCheckout('Pack Basic', '5000')}
        />

        {/* Pack Start-up */}
        <PricingCard
          icon={<Rocket />}
          iconColor="text-violet-600"
          iconBg="bg-violet-100"
          title="Pack Start-up"
          price="8500"
          description="Un site robuste pour lancer et développer votre activité."
          features={[
            "Site de 1 à 10 pages",
            "Design avancé et personnalisé",
            "Optimisation SEO avancée",
            "Compatible tous supports",
            "2 séances de consulting offertes"
          ]}
          idealFor="Recommandé pour : PME, projets en lancement, agences"
          buttonVariant="gradient"
          featured={true}
          isHovered={hoveredCard === 'startup'}
          onMouseEnter={() => setHoveredCard('startup')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.2}
          onCheckout={() => handleCheckout('Pack Start-up', '8500')}
        />

        {/* Pack E-commerce */}
        <PricingCard
          icon={<ShoppingCart />}
          iconColor="text-gray-700"
          iconBg="bg-gray-100"
          title="Pack E-commerce"
          price="15000"
          description="Une boutique en ligne professionnelle, évolutive et performante."
          features={[
            "Produits en illimité",
            "Site 100% responsive",
            "Design moderne et ergonomique",
            "SEO naturel pour visibilité optimale",
            "3 séances de consulting personnalisées"
          ]}
          idealFor="Recommandé pour : Boutiques en ligne, commerçants, marques"
          buttonVariant="filled"
          isHovered={hoveredCard === 'ecommerce'}
          onMouseEnter={() => setHoveredCard('ecommerce')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.3}
          onCheckout={() => handleCheckout('Pack E-commerce', '15000')}
        />
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">Des questions? Contactez notre équipe pour un devis personnalisé</p>
      </div>
    </div>
  );
}

function PricingCard({
  icon,
  iconColor,
  iconBg,
  title,
  price,
  description,
  features,
  idealFor,
  buttonVariant,
  featured = false,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onCheckout,
  delay = 0
}) {
  // Animation values
  const translateY = isHovered ? "-translate-y-2" : "translate-y-0";
  const scale = isHovered ? "scale-[1.03]" : "scale-100";
  const shadow = isHovered 
    ? "shadow-xl shadow-violet-100" 
    : featured 
      ? "shadow-lg shadow-violet-50" 
      : "shadow-md";

  // Card border styles
  const cardBorder = featured
    ? "before:absolute before:inset-0 before:rounded-2xl before:p-0.5 before:bg-gradient-to-b before:from-violet-600 before:to-black before:z-0"
    : "";

  // Button styles based on variant
  const buttonStyles = {
    outline: "border border-black text-black hover:bg-gray-50",
    filled: "bg-black text-white hover:bg-gray-800",
    gradient: "bg-gradient-to-r from-violet-600 to-black text-white hover:from-violet-700 hover:to-gray-900"
  };

  return (
    <div
      className={`relative ${featured ? "z-10" : ""} ${translateY} ${scale} transition-all duration-300 ease-in-out`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `fadeSlideIn 0.6s ${delay}s forwards`
      }}
    >
      <div 
        className={`
          relative bg-white ${shadow} rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300
          ${cardBorder}
          ${featured ? "border-0" : "border border-gray-200"}
        `}
      >
        {featured && (
          <div className="absolute inset-0 rounded-2xl bg-white m-0.5 z-0"></div>
        )}
        
        {featured && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-black text-white text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg z-10">
            Populaire
          </div>
        )}

        <div className={`p-8 flex-1 relative ${featured ? "z-10" : ""}`}>
          <div className={`w-14 h-14 ${iconBg} rounded-full flex items-center justify-center mb-6 transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`}>
            <div className={`${iconColor} w-7 h-7`}>
              {icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          
          <div className="flex items-baseline mb-2">
            <span className="text-4xl font-extrabold">{price}</span>
            <span className="text-gray-500 ml-2 text-base">MAD</span>
          </div>
          
          <p className="text-gray-600 mb-6">{description}</p>
          
          <p className="font-medium mb-4"><strong>Ce qui est inclus</strong> :</p>
          
          <ul className="space-y-4 mb-6">
            {features.map((text, idx) => (
              <Feature 
                key={idx} 
                text={text} 
                isHovered={isHovered}
                delay={idx * 0.05}
              />
            ))}
          </ul>
          
          <p className="text-sm font-medium text-green-600 mb-8">{idealFor}</p>
        </div>
        
        <div className={`px-8 pb-8 relative ${featured ? "z-10" : ""}`}>
          <button 
            className={`
              w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center
              transition-all duration-300 ease-in-out ${buttonStyles[buttonVariant]}
              group
            `}
            onClick={onCheckout}
          >
            <span>Commander</span>
            <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""} group-hover:translate-x-1`} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ text, isHovered, delay }) {
  return (
    <li 
      className={`
        flex items-start transition-all duration-300
        ${isHovered ? "transform translate-x-1" : ""}
      `}
      style={{ 
        transitionDelay: `${delay}s`
      }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="rounded-full bg-green-100 p-1 flex items-center justify-center">
          <Check className="h-3 w-3 text-green-600" />
        </div>
      </div>
      <p className="ml-3 text-gray-600">{text}</p>
    </li>
  );
}

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleSheet);