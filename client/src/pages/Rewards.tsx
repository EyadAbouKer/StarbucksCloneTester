import { Link } from 'wouter';
import RewardsTier from '@/components/RewardsTier';
import { rewardsTiers, rewardsBenefits } from '@/lib/rewardsData';

const Rewards = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="light-green py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">It's a great day for<br />free coffee.</h1>
              <p className="mb-6">Sign up and start enjoying the perks of Starbucks® Rewards.</p>
              <Link href="#" className="btn-primary mb-4 inline-block">Join now</Link>
              <p className="text-sm">It's even better <a href="#" className="text-primary hover:underline">with the app</a>.</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Coffee cup on table" 
                className="w-full rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Getting started is easy</h2>
          <p className="text-lg mb-10">Earn Stars and get rewarded in a few easy steps.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl">1</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Create an account</h3>
              <p className="text-sm">To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl">2</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Order and pay how you'd like</h3>
              <p className="text-sm">Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl">3</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Stars, get Rewards</h3>
              <p className="text-sm">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Tiers Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Get your favorites for free</h2>
          
          <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide snap-x">
            {rewardsTiers.map((tier) => (
              <RewardsTier
                key={tier.stars}
                stars={tier.stars}
                title={tier.title}
                description={tier.description}
                imageUrl={tier.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Endless Extras Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Endless extras</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewardsBenefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img 
                  src={benefit.imageUrl} 
                  alt={benefit.title} 
                  className="w-64 h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
                <button className="text-sm mt-2 text-primary hover:underline">
                  Learn more about {benefit.title.toLowerCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Pay Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Cash or card, you earn Stars</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">1<span className="text-xl">★</span>Star</span>
                <span className="text-lg ml-2">per dollar</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Pay as you go</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start mb-2">
                    <img 
                      src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/1A.png" 
                      alt="Scan and pay" 
                      className="w-16 h-16 mr-4" 
                    />
                    <h4 className="font-bold">Scan and pay separately</h4>
                  </div>
                  <p className="text-sm">Use cash or credit/debit card at the register.</p>
                </div>
                
                <div>
                  <div className="flex items-start mb-2">
                    <img 
                      src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/1B.png" 
                      alt="Save payment in app" 
                      className="w-16 h-16 mr-4" 
                    />
                    <h4 className="font-bold">Save payment in the app</h4>
                  </div>
                  <p className="text-sm">Check-out faster by saving a credit/debit card or PayPal to your account.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">2<span className="text-xl">★</span>Stars</span>
                <span className="text-lg ml-2">per dollar</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Add funds in the app</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start mb-2">
                    <img 
                      src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/2A.png" 
                      alt="Preload" 
                      className="w-16 h-16 mr-4" 
                    />
                    <h4 className="font-bold">Preload</h4>
                  </div>
                  <p className="text-sm">To save time and earn Stars twice as fast, add money to your digital Starbucks Card.</p>
                </div>
                
                <div>
                  <div className="flex items-start mb-2">
                    <img 
                      src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/2B.png" 
                      alt="Register gift card" 
                      className="w-16 h-16 mr-4" 
                    />
                    <h4 className="font-bold">Register your gift card</h4>
                  </div>
                  <p className="text-sm">Then use it to pay through the app. You can even consolidate balances from multiple cards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Now CTA */}
      <section className="py-12 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <Link href="#" className="btn-primary text-lg px-8 py-3">Join Starbucks® Rewards</Link>
          
          <div className="mt-12">
            <h3 className="font-bold text-xl mb-4">Questions?</h3>
            <p className="max-w-2xl mx-auto">
              We want to help in any way we can. You can ask your barista anytime or we've answered the most commonly asked terms right over here.
            </p>
          </div>
          
          <div className="mt-12 text-sm max-w-2xl mx-auto">
            <h4 className="font-bold mb-2">Terms and Conditions</h4>
            <p className="mb-4">At participating stores. Restrictions apply.</p>
            <p className="mb-2">* Earning Stars:</p>
            <p className="mb-2">
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.
            </p>
            <p>
              Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rewards;
