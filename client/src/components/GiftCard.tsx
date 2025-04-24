import { Link } from 'wouter';

interface GiftCardProps {
  id: string;
  imageUrl: string;
  title: string;
  width?: string;
}

const GiftCard = ({ id, imageUrl, title, width = 'w-64' }: GiftCardProps) => {
  return (
    <div className={`card ${width} flex-shrink-0`}>
      <Link href={`/gift/${id}`} className="block">
        <div className="overflow-hidden rounded-lg mb-2 aspect-[4/3]">
          <img 
            src={imageUrl} 
            alt={`${title} gift card`} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
          />
        </div>
        <p className="sr-only">{title}</p>
      </Link>
    </div>
  );
};

export default GiftCard;
