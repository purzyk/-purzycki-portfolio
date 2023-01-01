import Image from "next/image";
import LiftedFounderAvatar from "../../public/images/piotr_purzycki.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const profile = {
  name: "Piotr Purzycki",
  role: "Wordpress front-end developer",
  message: "Hello. Thank you for visiting. Have a look at my portfolio",
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
      <div className="mb-8 pt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <div className="relative h-28 w-28 rounded-full sm:h-28 sm:w-28">
                <Image
                  src={profile.profileImage}
                  layout="fill"
                  alt={`profile picture ${profile.name}`}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-12 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {profile.name}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  {profile.role} at
                </p>
                <p className="text-sm  font-light text-liftedgreen-600">
                  {profile.message}
                </p>
              </div>
              <div className="mt-4 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="mt-2 flex justify-center space-x-6">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {profile.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
