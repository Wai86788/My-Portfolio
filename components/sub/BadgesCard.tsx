import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const BadgesCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-full shadow-lg border-4 border-[#2A0E61] ">
      <Image
        src={src}
        alt={title}
        width={700}
        height={700}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default BadgesCard;