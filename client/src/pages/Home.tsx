import { Link } from 'wouter';
import PromotionCard from '@/components/PromotionCard';

const Home = () => {
  return (
    <>
      {/* Reward Days Banner - Hero Section */}
      <section className="border-b">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
          {/* Left Section with Star Logo */}
          <div className="md:w-1/2 bg-[#FFD280] p-8 flex items-center justify-center relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 relative mb-4">
                <div className="absolute inset-0 bg-[#2552FF] rounded-full flex items-center justify-center">
                  <span className="text-white text-5xl md:text-7xl font-bold">★</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-center text-[#111111] mb-2">REWARD DAYS</h2>
            </div>
            {/* Background Rays */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2 h-[200%] w-4 bg-[#FFBF4D] origin-bottom"
                  style={{ 
                    transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                    transformOrigin: 'bottom' 
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Right Section with Text */}
          <div className="md:w-1/2 bg-[#E8ECFF] p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">REWARD DAYS are happening soon</h2>
            <p className="mb-6 text-sm md:text-base">
              Boost your Reward-earning power with every sip during REWARD DAYS. 
              Starting May 1-14, Shuwaikh Coffee Rewards members can enjoy exclusive offers every week.
            </p>
            <Link href="#" className="inline-block bg-[#E8ECFF] text-[#2552FF] border border-[#2552FF] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#d9e0ff] transition w-fit">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Promotion Cards - New Layout */}
      <section>
        {/* Chai in Bloom - First Promotion Card */}
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto border-b">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 bg-[#FFF7E6]">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Chai in bloom</h2>
            <p className="text-sm md:text-base mb-6">
              Meet the new Iced Cherry Chai. A twist on your favourite Chai, with subtle floral and almond notes, and cherry flavoured cold foam.
            </p>
            <Link href="/menu" className="inline-block bg-[#FFF7E6] text-[#2552FF] border border-[#2552FF] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#FFE8CC] transition w-fit">
              Order now
            </Link>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-97286.jpg" 
              alt="Chai in bloom" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Lavender Matcha - Second Promotion Card */}
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto border-b">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Lavender Matcha" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#F3E8FF]">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Lavender, meet your matcha</h2>
            <p className="text-sm md:text-base mb-6">
              Welcome back Iced Lavender Cream Oat Matcha. Smooth matcha topped with lavender cream cold foam. Springtime in a cup.
            </p>
            <Link href="/menu" className="inline-block bg-[#F3E8FF] text-[#2552FF] border border-[#2552FF] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#E6D6FF] transition w-fit">
              Order now
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Promotions - Continuing New Layout */}
      <section>
        {/* Spicy Snacks Promotion */}
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto border-b">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Spicy food items" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Spice up your spring</h2>
            <p className="text-sm md:text-base mb-6">
              The new Jalapeño Chicken and Spicy Falafel Pockets are perfect snacks for any time of day, loaded with flavour.
            </p>
            <Link href="/menu" className="inline-block bg-white text-[#2552FF] border border-[#2552FF] rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-50 transition w-fit">
              Order now
            </Link>
          </div>
        </div>
        
        {/* Golden Goodness Promotion */}
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto border-b">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 bg-[#FFF9E6]">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Golden goodness on-the-go</h2>
            <p className="text-sm md:text-base mb-6">
              Delight in the bite-sized Maple Mini Pancakes and warm Belgian Liège Waffle. Two perfect coffee companions.
            </p>
            <Link href="/menu" className="inline-block bg-[#FFF9E6] text-[#2552FF] border border-[#2552FF] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#FFEFC9] transition w-fit">
              Order now
            </Link>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Pancakes and waffles" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Cortado Promotion */}
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coffee cup" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#E8ECFF]">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Small cup, bold flavour</h2>
            <p className="text-sm md:text-base mb-6">
              Enjoy the Cortado — a perfect combination of rich Blonde Espresso and steamed milk. Or try the Brown Sugar Oat Cortado.
            </p>
            <Link href="/menu" className="inline-block bg-[#E8ECFF] text-[#2552FF] border border-[#2552FF] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#D9E0FF] transition w-fit">
              Order now
            </Link>
          </div>
        </div>
      </section>

      {/* About Our Coffee */}
      <section className="py-16 px-4 bg-[#F9F9F9]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Committed to serving you the best coffee</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto">
              Every day, we go to work hoping to create a positive impact on our customers and communities. We're committed to doing business responsibly and creating an inclusive environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Ethically sourced coffee" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Ethically Sourced</h3>
                <p className="text-sm text-gray-700">We're committed to 100% ethically sourced coffee in partnership with Conservation International.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img 
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Community service" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Community Service</h3>
                <p className="text-sm text-gray-700">We strive to build stronger communities through volunteering and creating job opportunities.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img 
                src="https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Environment" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Environmental Stewardship</h3>
                <p className="text-sm text-gray-700">We're focusing on ways to reduce our environmental impact with reusable packaging and conservation efforts.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="#" className="inline-block bg-[#2552FF] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#1E48E8] transition">Learn More About Our Story</Link>
          </div>
        </div>
      </section>

      {/* Rewards Program CTA */}
      <section className="bg-[#2552FF] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Shuwaikh Coffee Rewards</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join Shuwaikh Coffee Rewards to earn Points for free food and drinks, get free refills, pay and order with your phone, and more.
          </p>
          <Link href="/rewards" className="inline-block bg-white text-[#2552FF] rounded-full px-8 py-3 font-semibold hover:bg-gray-100 transition">Join Now</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
