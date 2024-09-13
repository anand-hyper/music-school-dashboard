import React from 'react';
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CardComponentProps {
  number: number | string;
  description: string;
  avatarSrc: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ number, description, avatarSrc }) => (
  <Card className=" h-[120px] bg-white shadow-md rounded-lg p-4 flex-shrink-0 mr-4">
    <div className="flex items-start h-full">
      <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
        <Avatar className="w-8 h-8">
          <AvatarImage src={avatarSrc} alt="Avatar" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex flex-col justify-between h-full flex-grow">
        <div>
          <CardTitle className="text-2xl font-bold">{number}</CardTitle>
          <CardDescription className="text-gray-500">{description}</CardDescription>
        </div>
        
        <div className="self-end">
          <a href="#" className="text-pink-500">View</a>
        </div>
      </div>
    </div>
  </Card>
);

const ScrollableCardContainer: React.FC = () => {
  
  const cardData: CardComponentProps[] = [
    { number: 164, description: "total number of students", avatarSrc: "https://github.com/shadcn.png" },
    { number: 190, description: "total number of courses", avatarSrc: "https://github.com/shadcn.png" },
    { number: "$2000", description: "total amount earned", avatarSrc: "https://github.com/shadcn.png" },
    { number: "Guitar", description: "best performing course", avatarSrc: "https://github.com/shadcn.png" },
    { number: "Flute", description: "worst performing course", avatarSrc: "https://github.com/shadcn.png" },
    
    
  ];

  return (
    <div className="">
      <div className="flex flex-wrap p-4 gap-4">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            number={card.number}
            description={card.description}
            avatarSrc={card.avatarSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableCardContainer;