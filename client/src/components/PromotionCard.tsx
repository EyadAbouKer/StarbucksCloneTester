import { Link } from 'wouter';

interface PromotionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  ctaLink: string;
  ctaText: string;
  imageOnRight?: boolean;
}

const PromotionCard = ({
  title,
  description,
  imageUrl,
  backgroundColor,
  ctaLink,
  ctaText,
  imageOnRight = true,
}: PromotionCardProps) => {
  return (
    <div className={`bg-${backgroundColor} rounded-lg overflow-hidden flex flex-col md:flex-row`}>
      {!imageOnRight && (
        <div className="md:w-1/2 h-48 md:h-auto">
          <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        </div>
      )}
      
      <div className="p-6 flex flex-col justify-center md:w-1/2">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <Link href={ctaLink} className="btn-primary w-fit">
          {ctaText}
        </Link>
      </div>
      
      {imageOnRight && (
        <div className="md:w-1/2 h-48 md:h-auto">
          <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default PromotionCard;
