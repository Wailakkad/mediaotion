import { useState } from 'react';
import { Check, Monitor, Rocket, ShoppingCart, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WebServicesPricingSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { t } = useTranslation();

  // Navigate to checkout page with query parameters
  const handleCheckout = (packageName, price) => {
    const queryParams = new URLSearchParams({
      service: 'web services',
      package: packageName,
      price: price
    }).toString();
    window.location.href = `/checkout?${queryParams}`;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl mt-30">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-violet-700">
          {t('webSection.title')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {t('webSection.subtitle')}
        </p>
      </div>

      {/* Pricing grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Pack Basic */}
        <PricingCard
          icon={<Monitor />}
          iconColor="text-gray-700"
          iconBg="bg-gray-100"
          title={t('webPackages.basic.title')}
          price={t('webPackages.basic.price')}
          description={t('webPackages.basic.description')}
          features={t('webPackages.basic.features')}
          idealFor={t('webPackages.basic.idealFor')}
          buttonVariant="outline"
          isHovered={hoveredCard === 'basic'}
          onMouseEnter={() => setHoveredCard('basic')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.1}
          onCheckout={() =>
            handleCheckout(
              t('webPackages.basic.title'),
              t('webPackages.basic.price')
            )
          }
        />

        {/* Pack Start-up (featured) */}
        <PricingCard
          icon={<Rocket />}
          iconColor="text-violet-600"
          iconBg="bg-violet-100"
          title={t('webPackages.startup.title')}
          price={t('webPackages.startup.price')}
          description={t('webPackages.startup.description')}
          features={t('webPackages.startup.features')}
          idealFor={t('webPackages.startup.idealFor')}
          buttonVariant="gradient"
          featured={true}
          isHovered={hoveredCard === 'startup'}
          onMouseEnter={() => setHoveredCard('startup')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.2}
          onCheckout={() =>
            handleCheckout(
              t('webPackages.startup.title'),
              t('webPackages.startup.price')
            )
          }
        />

        {/* Pack E-commerce */}
        <PricingCard
          icon={<ShoppingCart />}
          iconColor="text-gray-700"
          iconBg="bg-gray-100"
          title={t('webPackages.ecommerce.title')}
          price={t('webPackages.ecommerce.price')}
          description={t('webPackages.ecommerce.description')}
          features={t('webPackages.ecommerce.features')}
          idealFor={t('webPackages.ecommerce.idealFor')}
          buttonVariant="filled"
          isHovered={hoveredCard === 'ecommerce'}
          onMouseEnter={() => setHoveredCard('ecommerce')}
          onMouseLeave={() => setHoveredCard(null)}
          delay={0.3}
          onCheckout={() =>
            handleCheckout(
              t('webPackages.ecommerce.title'),
              t('webPackages.ecommerce.price')
            )
          }
        />
      </div>

      {/* Footer note */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">{t('webSection.contactText')}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── Helper components ─────────────────────────── */

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
  const { t } = useTranslation();

  // Hover / featured styles
  const translateY = isHovered ? '-translate-y-2' : 'translate-y-0';
  const scale = isHovered ? 'scale-[1.03]' : 'scale-100';
  const shadow = isHovered
    ? 'shadow-xl shadow-violet-100'
    : featured
    ? 'shadow-lg shadow-violet-50'
    : 'shadow-md';
  const cardBorder = featured
    ? 'before:absolute before:inset-0 before:rounded-2xl before:p-0.5 before:bg-gradient-to-b before:from-violet-600 before:to-black before:z-0'
    : '';

  const buttonStyles = {
    outline: 'border border-black text-black hover:bg-gray-50',
    filled: 'bg-black text-white hover:bg-gray-800',
    gradient:
      'bg-gradient-to-r from-violet-600 to-black text-white hover:from-violet-700 hover:to-gray-900'
  };

  return (
    <div
      className={`relative ${featured ? 'z-10' : ''} ${translateY} ${scale} transition-all duration-300 ease-in-out`}
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
          ${featured ? 'border-0' : 'border border-gray-200'}
        `}
      >
        {/* Gradient frame for featured card */}
        {featured && (
          <div className="absolute inset-0 rounded-2xl bg-white m-0.5 z-0"></div>
        )}

        {/* Popular ribbon */}
        {featured && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-black text-white text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg z-10">
            {t('webSection.popular')}
          </div>
        )}

        {/* Card content */}
        <div className={`p-8 flex-1 relative ${featured ? 'z-10' : ''}`}>
          <div
            className={`w-14 h-14 ${iconBg} rounded-full flex items-center justify-center mb-6 transition-transform duration-300 ${
              isHovered ? 'rotate-12' : ''
            }`}
          >
            <div className={`${iconColor} w-7 h-7`}>{icon}</div>
          </div>

          <h3 className="text-2xl font-bold mb-2">{title}</h3>

          <div className="flex items-baseline mb-2">
            <span className="text-4xl font-extrabold">{price}</span>
            <span className="text-gray-500 ml-2 text-base">
              {t('webSection.currency')}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{description}</p>

          <p className="font-medium mb-4">
            <strong>{t('webSection.whatIsIncluded')}</strong> :
          </p>

          <ul className="space-y-4 mb-6">
            {Array.isArray(features) ? (
              features.map((text, idx) => (
                <Feature
                  key={idx}
                  text={text}
                  isHovered={isHovered}
                  delay={idx * 0.05}
                />
              ))
            ) : (
              <li className="text-gray-600">Loading features…</li>
            )}
          </ul>

          <p className="text-sm font-medium text-green-600 mb-8">{idealFor}</p>
        </div>

        {/* Action button */}
        <div className={`px-8 pb-8 relative ${featured ? 'z-10' : ''}`}>
          <button
            className={`
              w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center
              transition-all duration-300 ease-in-out ${buttonStyles[buttonVariant]}
              group
            `}
            onClick={onCheckout}
          >
            <span>{t('webSection.orderButton')}</span>
            <ArrowRight
              className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              } group-hover:translate-x-1`}
            />
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
        ${isHovered ? 'transform translate-x-1' : ''}
      `}
      style={{ transitionDelay: `${delay}s` }}
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

/* Global animation keyframes */
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
`;
document.head.appendChild(styleSheet);
