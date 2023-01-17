import Image from "next/image";
import LiftedFounderAvatar from "../../public/images/piotr_purzycki.png";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const profile = {
  name: "Piotr Purzycki",
  role: "Front-End Developer",
  profileImage: LiftedFounderAvatar,
};

const navigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/purzyk",
      icon: (props) => <FaGithub />,
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/piotr-purzycki/",
      icon: (props) => <FaLinkedin />,
    },
  ],
};

export default function Header() {
  return (
    <div>
      <div className=" mb-2 mt-2 md:mb-8 md:pt-10">
        <div className="flex flex-row md:flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex">
              <div className="relative h-28 w-28 rounded-full">
                <Image
                  src={profile.profileImage}
                  layout="fill"
                  alt={`profile picture ${profile.name}`}
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {profile.name}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  {profile.role}
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-4 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="md:mt-2 flex  space-x-6 items-end  flex-col md:flex-row md:justify-center md:items-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 mb-2"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
              <a
                className="text-gray-400 hover:text-gray-500 flex items-center"
                target="_blank"
                rel="noreferrer"
                href="/Piotr_Purzycki-CV.pdf"
              >
                <FaFileDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
