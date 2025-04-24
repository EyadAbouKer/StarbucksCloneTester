interface RewardsTierProps {
  stars: number;
  title: string;
  description: string;
  imageUrl: string;
}

const RewardsTier = ({ stars, title, description, imageUrl }: RewardsTierProps) => {
  return (
    <div className="rewards-tier flex-shrink-0 w-64 bg-white p-6 rounded-lg shadow-sm">
      <div className="text-2xl font-bold text-primary mb-4">
        {stars}<span className="text-xl">★</span>Stars
      </div>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-20 h-20 object-cover rounded-full mx-auto mb-4" 
      />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default RewardsTier;
