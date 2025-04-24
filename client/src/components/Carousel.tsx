import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  title?: string;
  seeAllLink?: string;
}

const Carousel = ({ children, title, seeAllLink }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true); 

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      setShowLeftButton(carouselRef.current.scrollLeft > 0);
      setShowRightButton(
        carouselRef.current.scrollLeft <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const currentRef = carouselRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollButtons);
      // Initial check
      checkScrollButtons();
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

  return (
    <div className="mb-10">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="uppercase font-bold text-sm tracking-wider">{title}</h2>
          {seeAllLink && (
            <a href={seeAllLink} className="text-sm text-primary hover:underline">
              See all
            </a>
          )}
        </div>
      )}

      <div className="relative">
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <div ref={carouselRef} className="carousel scrollbar-hide">
          {children}
        </div>

        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
