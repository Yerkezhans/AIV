"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <section className="px-6 py-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-sans">Ближайшие мероприятия</h2>
        <button className="text-black text-sm font-medium hover:underline font-sans">
          Все мероприятия
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }} 
        >
          <Image
            src="/images/event1.png"
            alt="Startup Garage"
            width={320}
            height={180}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/event2.png"
            alt="Роль AI в бизнесе"
            width={320}
            height={180}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/event3.png"
            alt="Как создать MVP"
            width={320}
            height={180}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }} 
          className="bg-gray-100 p-4 rounded-lg border border-gray-300 font-sans shadow-md flex"
        >
          <div className="flex-1">
            <div className="flex items-center text-gray-500 text-sm mb-2 font-sans">
              <Image
                src="/icons/logo.png"
                alt="Логотип"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <p>27 января, 2025 год</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 font-sans">
              Профориентационные мероприятия для школьных преподавателей
            </h3>
            <p className="text-gray-700 mt-2 text-sm font-sans">
              В конце января 2025 года Abai IT-Valley совместно с отделом
              образования города Семей организовал профориентационные мероприятия
              для преподавателей школы №42.
            </p>
          </div>
          <Image
            src="/images/event4.png"
            alt="Доклад"
            width={200}
            height={150}
            className="rounded-lg ml-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }} 
          className="bg-gray-100 p-4 font-sans rounded-lg border border-gray-300 shadow-md flex"
        >
          <div className="flex-1">
            <div className="flex items-center text-gray-500 text-sm mb-2 font-sans">
              <Image
                src="/icons/logo.png"
                alt="Логотип"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <p>28 января, 2025 год</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 font-sans">
              Мероприятие &quot;3D печать и перспектива применения AI&quot;
            </h3>
            <p className="text-gray-700 mt-2 text-sm font-sans">
              24 января 2025 года состоялась встреча с Анет Турсынжан, основателем центра аддитивных технологий Oner. 
              Он рассказал о том, как 3D-печать меняет подходы к производству и как искусственный интеллект открывает новые горизонты для технологий будущего.
            </p>
          </div>
          <Image
            src="/images/event5.png"
            alt="3D печать"
            width={200}
            height={150}
            className="rounded-lg ml-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }} 
          className="bg-gray-100 font-sans p-4 rounded-lg border border-gray-300 shadow-md flex"
        >
          <div className="flex-1">
            <div className="flex items-center font-sans text-gray-500 text-sm mb-2">
              <Image
                src="/icons/logo.png"
                alt="Логотип"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <p>5 февраля, 2025 год</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 font-sans">
              Запуск онлайн-инкубационной программы ScaleUp Valley
            </h3>
            <p className="text-gray-700 mt-2 text-sm font-sans">
              С 1 февраля по 30 мая 2025 года проходит онлайн-инкубационная программа ScaleUp Valley, 
              направленная на поддержку стартапов. В рамках программы участники получают практические знания от экспертов, 
              навыки в области стартапов, бизнеса и маркетинга, а также поддержку в запуске MVP и возможность выиграть денежный грант.
            </p>
          </div>
          <Image
            src="/images/event6.png"
            alt="ScaleUp Valley"
            width={200}
            height={150}
            className="rounded-lg ml-4"
          />
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }} 
        className="text-2xl font-bold text-gray-900 mb-10 font-sans mt-10"
      >
        Рекомендуемые курсы
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }} 
          className="flex items-center bg-white rounded-lg border border-gray-300 shadow-md p-4"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 font-sans">Advanced Python</h3>
            <ul className="text-gray-700 text-sm mt-2 font-sans">
              <li>• Для начинающих</li>
              <li>• 28 недель</li>
              <li>• Выделено квот: 2</li>
            </ul>
            <p className="font-bold text-gray-900 mt-2 font-sans">540 000 Т</p>
            <button className="bg-[#070D59] text-white px-4 py-2 mt-2 font-sans rounded font-sans">Записаться</button>
          </div>
          <Image
            src="/images/python_course.png"
            alt="Advanced Python"
            width={250}
            height={100}
            className="ml-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }} 
          className="flex items-center bg-white rounded-lg border border-gray-300 shadow-md p-4"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 font-sans">UX/UI Design</h3>
            <ul className="text-gray-700 text-sm mt-2 font-sans">
              <li>• Для начинающих</li>
              <li>• 18 недель</li>
              <li>• Выделено квот: 2</li>
            </ul>
            <p className="font-bold text-gray-900 mt-2 font-sans">400 000 Т</p>
            <button className="bg-[#070D59] text-white px-4 py-2 mt-2 rounded font-sans">Записаться</button>
          </div>
          <Image
            src="/images/3d_modeling.png"
            alt="UX/UI Design"
            width={250}
            height={100}
            className="ml-4"
          />
        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  whileHover={{ scale: 1.05 }} 
  className="flex items-center bg-white rounded-lg border border-gray-300 shadow-md p-4"
>
  <div className="flex-1">
    <h3 className="text-lg font-semibold text-gray-900 font-sans">Аналитика данных</h3>
    <ul className="text-gray-700 text-sm mt-2 font-sans">
      <li>• Для начинающих</li>
      <li>• 28 недель</li>
      <li>• Выделено квот: 3</li>
    </ul>
    <p className="font-bold text-gray-900 mt-2 font-sans">540 000 Т</p>
    <button className="bg-[#070D59] text-white font-sans px-4 py-2 mt-2 rounded">Записаться</button>
  </div>
  <Image
    src="/images/data_analytics.png"
    alt="Аналитика данных"
    width={250}
    height={100}
    className="ml-4"
  />
</motion.div>
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  whileHover={{ scale: 1.05 }} 
  className="flex items-center bg-white rounded-lg border border-gray-300 shadow-md p-4"
>
<div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 font-sans">Web Developer</h3>
            <ul className="text-gray-700 text-sm mt-2 font-sans">
              <li>• Для начинающих</li>
              <li>• 42 недели</li>
              <li>• Выделено квот: 2</li>
            </ul>
            <p className="font-bold text-gray-900 mt-2">600 000 Т</p>
            <button className="bg-[#070D59] text-white font-sans px-4 py-2 mt-2 rounded">Записаться</button>
          </div>
          <Image src="/images/web_dev.png" alt="Web Developer" width={250} height={100} className="ml-4" />
</motion.div>
      </div>
    </section>
  );
};

export default Events;
