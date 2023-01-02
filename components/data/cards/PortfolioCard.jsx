import React from "react";
import Image from "next/image";
import TailwindSVG from "../../data/svg/TailwindSvg";
import GithubSvg from "../../data/svg/GithubSvg";
import Globe from "../svg/GlobeSvg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mb-6  bg-slate-50 p-4">
      <div className="md:col-span-6 flex flex-col justify-between pr-6">
        <div>
          <h2 className="text-2xl mb-1">{portfolio.fields.title}</h2>
          <div className="mb-6">
            {documentToReactComponents(portfolio.fields.description)}
          </div>
          {portfolio.fields.githubLink ? (
            <a
              className="text-xs flex items-center mb-2"
              href={portfolio.fields.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <GithubSvg />{" "}
              <span className="ml-2">{portfolio.fields.githubLink}</span>
            </a>
          ) : (
            ""
          )}

          {portfolio.fields.website ? (
            <a
              className="text-xs flex items-center"
              href={portfolio.fields.website}
              target="_blank"
              rel="noreferrer"
            >
              <Globe />
              <span className="ml-2"> {portfolio.fields.website}</span>
            </a>
          ) : (
            ""
          )}
        </div>
        <div>{portfolio.fields.tailwindCss && <TailwindSVG />}</div>
      </div>
      <figure className="md:col-span-6">
        <Image
          src={"https:" + portfolio.fields.coverImage.fields.file.url}
          alt={portfolio.fields.coverImage.fields.title}
          width={portfolio.fields.coverImage.fields.file.details.image.width}
          height={portfolio.fields.coverImage.fields.file.details.image.height}
        />
      </figure>
    </div>
  );
};

export default PortfolioCard;
