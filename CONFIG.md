# INTIAL CONFIG
npx create-next-app@latest .

## PACKAGE INSTALL
npx storybook@latest init
npm install swiper
npm install react-hook-form
npm install zustand
npm i @tailwindcss/forms
npm i tailwindcss-animated
npm install babel-plugin-inline-react-svg --save-dev




Configurar Tailwind CSS
Asegúrate de que tu archivo tailwind.config.js esté configurado correctamente. Para centrar contenedores por defecto y establecer un ancho máximo, puedes ajustar la configuración del contenedor así:

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}
Esta configuración centra automáticamente los contenedores y añade un padding horizontal predeterminado que se ajusta según el tamaño de la pantalla.

