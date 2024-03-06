import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const CertificateContent= ({ src, title}: Props) => {
  return (
    <div className="relative overflow-hidden   shadow-lg border border-[#2A0E61] rounded-50%">
      <Image
        src={src}
        alt={title}
        width={300}
        height={100}
        className="w-full object-contain"
      />

      
    </div>
  );
};

export default CertificateContent;