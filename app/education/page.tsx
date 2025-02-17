'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Course {
  title: string;
  description: string[];
  price: string;
  image: string;
  link: string; 
}

const courses: Course[] = [
  {
    title: "Game Dev: Разработка игр",
    description: ["Для начинающих", "28 недель", "Выделено квот: 2"],
    price: "540 000 Т",
    image: "/images/game_dev.png",
    link: "/courses/game-dev",
  },
  {
    title: "Advanced Python",
    description: ["Для начинающих", "28 недель", "Выделено квот: 2"],
    price: "540 000 Т",
    image: "/images/python.png",
    link: "/courses/advanced-python",
  },
  {
    title: "Аналитика данных",
    description: ["Для начинающих", "28 недель", "Выделено квот: 3"],
    price: "540 000 Т",
    image: "/images/data_analytics.png",
    link: "/courses/data-analytics",
  },
  {
    title: "Web Developer",
    description: ["Для начинающих", "42 недели", "Выделено квот: 2"],
    price: "600 000 Т",
    image: "/images/web_dev.png",
    link: "/courses/web-developer",
  },
  {
    title: "Python Pro",
    description: ["Для начинающих", "42 недели", "Выделено квот: 5"],
    price: "600 000 Т",
    image: "/images/python_pro.png",
    link: "/courses/python-pro",
  },
  {
    title: "Java от основ до первого Production проекта",
    description: ["Для начинающих", "42 недели", "Выделено квот: 3"],
    price: "600 000 Т",
    image: "/images/java.png",
    link: "/courses/java",
  },
  {
    title: "3D Modeling",
    description: [
      '"Blender Guru" от новичка до профессионала',
      "Для начинающих",
      "42 недели",
      "Выделено квот: 3",
    ],
    price: "600 000 Т",
    image: "/images/3d_modeling.png",
    link: "/courses/3d-modeling",
  },
];

export default function Education() {
  const router = useRouter();

  const navigateToCourse = (link: string) => {
    router.push(link);
  };

  return (
    <div className="px-6 pb-6 lg:ml-[260px]">
      <h1 className="text-2xl font-bold mb-6 font-sans">Обучение</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => navigateToCourse(course.link)}
            className="flex flex-col md:flex-row items-center bg-white rounded-xl border border-gray-300 shadow-lg p-6 w-full max-w-2xl
                       transition-transform transform hover:scale-105 cursor-pointer font-sans"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 font-sans">
                {course.title}
              </h3>
              <ul className="text-gray-700 text-sm mt-2">
                {course.description.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>
              <p className="font-bold text-gray-900 mt-3 font-sans">{course.price}</p>
            </div>
            <Image
              src={course.image}
              alt={course.title}
              width={250}
              height={100}
              className="mt-4 md:mt-0 md:ml-4 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
