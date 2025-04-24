import Carousel from "@/components/Carousel";
import GiftCard from "@/components/GiftCard";
import { giftCards, giftCardCategories } from "@/lib/giftCardData";

const GiftCards = () => {
  return (
    <section className="py-8 px-4 md:py-12">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Gift cards</h1>
        
        {/* Featured Cards Section */}
        <Carousel title="FEATURED" seeAllLink="/gift/all">
          {giftCards.featured.map((card) => (
            <GiftCard
              key={card.id}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
            />
          ))}
        </Carousel>
        
        {/* Group Gift Card Promo */}
        <div className="bg-gray-100 rounded-lg p-6 mt-6 mb-10 flex items-center">
          <svg className="w-16 h-16 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#006241" />
            <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5Z" fill="white" />
            <path d="M12 8.25V12L15 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-sm">Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
        </div>
        
        {/* Received a Gift Card Section */}
        <div className="light-green rounded-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-xl font-bold mb-2 md:mb-0">Received a gift card?</h2>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm">Earns 2★ per $1</span>
              <button className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-gray-50 transition">Add or Reload</button>
              <button className="bg-[#111111] text-white rounded-full px-4 py-1 text-sm font-medium hover:bg-gray-800 transition">Check balance</button>
            </div>
          </div>
          <a href="#" className="text-sm text-[#111111] mt-4 block hover:underline text-right">Card Terms & Conditions</a>
        </div>
        
        {/* Admin Appreciation Section */}
        <Carousel title="ADMIN APPRECIATION | 4/23">
          {giftCards.adminAppreciation.map((card) => (
            <GiftCard
              key={card.id}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
            />
          ))}
        </Carousel>
        
        {/* Birthday Section */}
        <Carousel title="BIRTHDAY">
          {giftCards.birthday.map((card) => (
            <GiftCard
              key={card.id}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
            />
          ))}
        </Carousel>
        
        {/* Thank You Section */}
        <Carousel title="THANK YOU">
          {giftCards.thankYou.map((card) => (
            <GiftCard
              key={card.id}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
            />
          ))}
        </Carousel>
        
        {/* Rest of categories */}
        {giftCardCategories.map((category) => (
          giftCards[category.id] && giftCards[category.id].length > 0 && (
            <Carousel key={category.id} title={category.title.toUpperCase()}>
              {giftCards[category.id].map((card) => (
                <GiftCard
                  key={card.id}
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                />
              ))}
            </Carousel>
          )
        ))}
      </div>
    </section>
  );
};

export default GiftCards;
