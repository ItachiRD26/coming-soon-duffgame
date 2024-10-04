import React, { useState } from 'react';
import "../global.css"

interface Language {
  title: string;
  description: string;
  twitter: string;
  telegram: string;
  selectLanguage: string;
}

const languages: Record<string, Language> = {
  en: {
    title: "Under Construction",
    description: "We are diligently working on our main page. Thank you for your patience as we create something amazing for you!",
    twitter: "Follow us on Twitter",
    telegram: "Join our Telegram",
    selectLanguage: "Select language",
  },
  es: {
    title: "En Construcción",
    description: "Estamos desarrollando arduamente nuestra página principal. ¡Gracias por su paciencia mientras creamos algo increíble para usted!",
    twitter: "Síguenos en Twitter",
    telegram: "Únete a Telegram",
    selectLanguage: "Seleccionar idioma",
  },
  zh: {
    title: "正在建设中",
    description: "我们正在努力开发我们的主页。感谢您耐心等待，我们正在为您创造一些惊人的东西！",
    twitter: "在Twitter上关注我们",
    telegram: "加入Telegram",
    selectLanguage: "选择语言",
  },
  pt: {
    title: "Em Construção",
    description: "Estamos trabalhando arduamente na nossa página principal. Agradecemos sua paciência enquanto criamos algo incrível para você!",
    twitter: "Siga-nos no Twitter",
    telegram: "Junte-se ao Telegram",
    selectLanguage: "Selecionar idioma",
  },
};

export default function ComingSoon() {
  const [lang, setLang] = useState<keyof typeof languages>('en');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animated-background bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white px-4 relative">
      <div className="absolute top-4 right-4">
        <div className="relative">
          <select
            onChange={(e) => setLang(e.target.value as keyof typeof languages)}
            className="appearance-none bg-gray-800 text-white rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none"
            value={lang}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="zh">中文</option>
            <option value="pt">Português</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center space-y-8 max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          {languages[lang].title}
        </h2>
        <p className="text-xl text-gray-300">
          {languages[lang].description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://twitter.com/TheDuffGame" target='_blank' className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md transition duration-300 text-lg font-semibold">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            {languages[lang].twitter}
          </a>
          <a href="https://t.me/duffygame" target='_blank' className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md transition duration-300 text-lg font-semibold">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            {languages[lang].telegram}
          </a>
        </div>
      </div>
    </div>
  );
}
