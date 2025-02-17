'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname(); 

  const menuItems = [
    { href: "/", icon: "/icons/home.png", label: "Главная" },
    { href: "/events", icon: "/icons/events.png", label: "Мероприятия" },
    { href: "/education", icon: "/icons/education.png", label: "Обучение" },
    { href: "/it-services", icon: "/icons/it-services.png", label: "Сфера IT услуг" },
    { href: "/startups", icon: "/icons/startup.png", label: "Стартапы" },
    { href: "/news", icon: "/icons/news.png", label: "Новости" },
    { href: "/partners", icon: "/icons/partners.png", label: "Наши партнеры" },
    { href: "/investors", icon: "/icons/investors.png", label: "Для инвесторов" },
  ];

  const socialLinks = [
    { href: "#", icon: "/icons/facebook.png", alt: "Facebook" },
    { href: "#", icon: "/icons/instagram.png", alt: "Instagram" },
    { href: "#", icon: "/icons/linkedin.png", alt: "Linkedin" },
    { href: "#", icon: "/icons/TikTok.png", alt: "TikTok" },
    { href: "#", icon: "/icons/Telegram.png", alt: "Telegram" },
  ];

  return (
    <aside
      className="fixed left-0 top-0 h-screen p-4 bg-gray-100 border-r border-gray-300 font-sans flex flex-col justify-between
                 w-20 md:w-64"
    >
      <div>
        <div className="flex items-center space-x-3 mb-6">
        <Image
        src="/logo.png"
        alt="Logo"
        width={48}  
        height={48} 
        className="w-20 h-20" 
        />
          <span className="hidden md:inline-block text-lg font-bold">
            Abai IT Valley
          </span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 text-sm transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-[1.02] ${
                pathname === item.href ? "bg-gray-300 font-semibold" : ""
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={18}
                height={18}
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
              />
              <span className="hidden md:inline-block">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="hidden md:block space-y-4">
        <hr className="border-t border-gray-400" />

        <div className="space-y-3 text-sm text-gray-700">
          <h3 className="font-semibold text-gray-900">Контакты</h3>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/location.png"
              alt="Адрес"
              width={16}
              height={16}
            />
            <p>г. Семей, Абая 107</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/icons/email.png" alt="Email" width={16} height={16} />
            <p>example@mail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/phone.png"
              alt="Телефон"
              width={16}
              height={16}
            />
            <p>+7 (777) 123-45-67</p>
          </div>
        </div>

        <hr className="border-t border-gray-400" />

        <div className="space-y-3 text-sm text-gray-700">
          <h3 className="font-semibold text-gray-900">Мы в соцсетях</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
