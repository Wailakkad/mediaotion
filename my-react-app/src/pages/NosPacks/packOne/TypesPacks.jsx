import { useState } from 'react';
import { Check, ArrowRight, Monitor, Palette, Video } from 'lucide-react';

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Function to handle checkout navigation
  const handleCheckout = (packageName, price) => {
    // Create URL with query parameters
    const queryParams = new URLSearchParams({
      service: 'packs basic',
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
          Nos packs / Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Choisissez le pack qui correspond le mieux à vos besoins et à votre budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Pack Site Vitrine */}
        <PricingCard
          icon={<Monitor />}
          iconColor="text-gray-700"
          iconBg="bg-gray-100"
          title="Pack Site Vitrine"
          price="5000"
          description="Donnez vie à votre présence en ligne avec un site élégant et performant."
          features={[
            "Jusqu'à 3 pages professionnelles",
            "Design sur mesure et attractif",
            "Responsive design (mobile, tablette, desktop)",
            "Optimisation SEO de base",
            "Intégration de vos contenus (textes, images, formulaires)",
          ]}
          idealFor="Idéal pour : Artisans, commerçants, consultants, indépendants"
          buttonVariant="outline"
          isHovered={hoveredCard === 'site-vitrine'}
          onMouseEnter={() => setHoveredCard('site-vitrine')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.1}
          onCheckout={() => handleCheckout('Pack Site Vitrine', '5000')}
        />

        {/* Pack Identité Visuelle */}
        <PricingCard
          icon={<Palette />}
          iconColor="text-violet-600"
          iconBg="bg-violet-100"
          title="Pack Identité Visuelle"
          price="900"
          description="Posez les bases d'une image de marque forte et cohérente."
          features={[
            "2 propositions de logo personnalisées",
            "Design 100% original",
            "Livraison du logo HD + carte de visite",
            "Délai express : 48h",
          ]}
          idealFor="Idéal pour : Startups, auto-entrepreneurs, nouvelles marques"
          buttonVariant="gradient"
          featured={true}
          isHovered={hoveredCard === 'identite-visuelle'}
          onMouseEnter={() => setHoveredCard('identite-visuelle')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.2}
          onCheckout={() => handleCheckout('Pack Identité Visuelle', '900')}
        />

        {/* Pack Motion Design */}
        <PricingCard
          icon={<Video />}
          iconColor="text-gray-700"
          iconBg="bg-gray-100"
          title="Pack Motion Design"
          price="4500"
          description="Communiquez efficacement avec une vidéo animée professionnelle."
          features={[
            "Vidéo animée jusqu'à 60 secondes",
            "Storyboard sur mesure",
            "Musique de fond libre de droits",
            "Texte ou voix-off (jusqu'à 150 mots)",
          ]}
          idealFor="Idéal pour : Réseaux sociaux, présentations, campagnes de lancement"
          buttonVariant="filled"
          isHovered={hoveredCard === 'motion-design'}
          onMouseEnter={() => setHoveredCard('motion-design')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.3}
          onCheckout={() => handleCheckout('Pack Motion Design', '4500')}
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

// Add global styles for animations
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