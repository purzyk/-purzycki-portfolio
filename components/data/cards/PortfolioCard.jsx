import React from "react";
import Image from "next/image";
import Link from "next/link";
const PortfolioCard = ({ portfolio }) => {
  return (
    <div>
      <div> portfolio Card</div>
      <Link href={`/portfolio/${portfolio.fields.slug}`}>
        <a href={`/portfolio/${portfolio.fields.slug}`}>
          {portfolio.fields.title}
        </a>
      </Link>
      <p>{portfolio.fields.cms}</p>
      <p>{portfolio.fields.technology}</p>

      <Image
        src={"https:" + portfolio.fields.coverImage.fields.file.url}
        alt={portfolio.fields.coverImage.fields.title}
        width={portfolio.fields.coverImage.fields.file.details.image.width}
        height={portfolio.fields.coverImage.fields.file.details.image.height}
      />
    </div>
  );
};

export default PortfolioCard;
