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
      
      
      <div>
        <TypePacks />
      </div>
      <div>
        <WebsiteShowcase />
      </div>
    </div>
  );
}