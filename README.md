# Cero+ — Sitio Web Oficial

Página web oficial de Cero+, desarrollada con **React + Vite**.

## Stack
- React 18
- Vite
- React Router DOM
- CSS Modules (sin dependencias de UI externas)

## Instalación

```bash
npm install
npm run dev
```

## Build para producción
```bash
npm run build
```

## Configuración
1. Copia `.env.example` a `.env`
2. Reemplaza `VITE_WA_NUMBER` con tu número de WhatsApp
3. Reemplaza `VITE_WA_EMAIL` con tu email

## Bot ClienteAI
El espacio para el widget del bot está reservado en `src/components/WhatsAppFloat.jsx`.
Cuando el widget de ClienteAI esté listo, añade el script ahí.

## Deploy
Compatible con **Vercel** y **Netlify**. Solo corre `npm run build` y sube la carpeta `dist/`.
