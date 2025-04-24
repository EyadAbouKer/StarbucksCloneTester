import { Link } from 'wouter';
import PromotionCard from '@/components/PromotionCard';

const Home = () => {
  return (
    <>
      {/* Star Days Banner */}
      <section className="bg-[#006241] text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1573016452851-8654e4578120?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Star Days Promotion" 
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">STAR DAYS are happening soon</h2>
            <p className="mb-6">Boost your Star-earning power with every sip during STAR DAYS. Starting April 7-27, Starbucks Rewards members can enjoy exclusive offers every week.</p>
            <Link href="#" className="inline-block bg-white text-[#006241] rounded-full px-6 py-2 font-medium hover:bg-gray-100 transition">Learn more</Link>
          </div>
        </div>
      </section>

      {/* Seasonal Promotions */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Promotion 1 */}
            <PromotionCard
              title="Chai in bloom"
              description="Meet the new Iced Cherry Chai. A twist on your favourite Chai, with subtle floral and almond notes, and cherry flavoured cold foam."
              imageUrl="https://images.unsplash.com/photo-1543702440-18b2c5510d23?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              backgroundColor="purple-100"
              ctaLink="/menu"
              ctaText="Order now"
              imageOnRight={true}
            />
            
            {/* Promotion 2 */}
            <PromotionCard
              title="Lavender, meet your matcha"
              description="Welcome back Iced Lavender Cream Oat Matcha. Smooth matcha topped with lavender cream cold foam. Springtime in a cup."
              imageUrl="https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              backgroundColor="green-100"
              ctaLink="/menu"
              ctaText="Order now"
              imageOnRight={true}
            />
          </div>
        </div>
      </section>

      {/* More Promotions */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8">
            {/* Promotion 3 */}
            <PromotionCard
              title="Spice up your spring"
              description="The new Jalapeño Chicken and Spicy Falafel Pockets are perfect snacks for any time of day, loaded with flavour."
              imageUrl="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              backgroundColor="white"
              ctaLink="/menu"
              ctaText="Order now"
              imageOnRight={false}
            />

            {/* Promotion 4 */}
            <PromotionCard
              title="Golden goodness on-the-go"
              description="Delight in the bite-sized Maple Mini Pancakes and warm Belgian Liège Waffle. Two perfect coffee companions."
              imageUrl="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              backgroundColor="yellow-50"
              ctaLink="/menu"
              ctaText="Order now"
              imageOnRight={true}
            />

            {/* Promotion 5 */}
            <PromotionCard
              title="Small cup, bold flavour"
              description="Enjoy the Cortado — a perfect combination of rich Blonde Espresso and steamed milk. Or try the Brown Sugar Oat Cortado."
              imageUrl="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              backgroundColor="purple-50"
              ctaLink="/menu"
              ctaText="Order now"
              imageOnRight={false}
            />
          </div>
        </div>
      </section>

      {/* About Our Coffee */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Committed to serving you the best coffee</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Every day, we go to work hoping to create a positive impact on our customers and communities. We're committed to doing business responsibly and creating an inclusive environment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Ethically sourced coffee" 
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Ethically Sourced</h3>
                <p className="text-sm">We're committed to 100% ethically sourced coffee in partnership with Conservation International.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Community service" 
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Community Service</h3>
                <p className="text-sm">We strive to build stronger communities through volunteering and creating job opportunities.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Environment" 
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Environmental Stewardship</h3>
                <p className="text-sm">We're focusing on ways to reduce our environmental impact with reusable packaging and conservation efforts.</p>
              </div>
            </div>
          </div>
          
          <Link href="#" className="btn-primary mt-8 inline-block">Learn More About Our Story</Link>
        </div>
      </section>

      {/* Rewards Program CTA */}
      <section className="light-green py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Starbucks® Rewards</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join Starbucks Rewards to earn Stars for free food and drinks, get free refills, pay and order with your phone, and more.
          </p>
          <Link href="/rewards" className="btn-primary">Join Now</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
