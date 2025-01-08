# Portfolio Template - React + TypeScript

Un template moderno y minimalista para crear tu portfolio profesional como desarrollador. Basado en React, TypeScript y Tailwind CSS.

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/79fa2db7-af9b-4c5c-9b8f-aefcb0c6f56f" />

## 🚀 Características

- ⚡ Desarrollado con React 18 y TypeScript
- 🎨 Diseño moderno y minimalista
- 📱 Totalmente responsive
- 🌙 Modo oscuro incluido
- ⚙️ Fácilmente personalizable
- 🎯 SEO optimizado
- 💨 Tailwind CSS para estilos

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- npm o yarn
- Git

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/holasoymalva/portfolio-template.git
```

2. Navega al directorio del proyecto:
```bash
cd portfolio-template
```

3. Instala las dependencias:
```bash
npm install
# o
yarn install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## 📝 Personalización

### Estructura del Proyecto

```
src/
├── components/        # Componentes React
├── types/            # Tipos TypeScript
├── data/            # Datos del portfolio
├── styles/          # Estilos globales
└── App.tsx          # Componente principal
```

### Modificar el Contenido

1. Abre el archivo `src/data/portfolio-data.ts`
2. Modifica la información según tus necesidades:
   - Información personal
   - Proyectos
   - Servicios
   - Habilidades
   - Enlaces de contacto

```typescript
export const portfolioData = {
  header: {
    name: "Tu Nombre",
    title: "Tu Título",
    // ...
  },
  // ...
};
```

### Personalizar Estilos

El proyecto utiliza Tailwind CSS. Puedes modificar los estilos:

1. Editando las clases de Tailwind en los componentes
2. Modificando el archivo `tailwind.config.js` para cambiar:
   - Colores
   - Fuentes
   - Espaciados
   - Breakpoints

## 📦 Despliegue

Para construir el proyecto para producción:

```bash
npm run build
# o
yarn build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

### Plataformas de Despliegue Recomendadas

- Vercel
- Netlify
- GitHub Pages

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una nueva rama (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- Abre un issue en GitHub
- Envía un email a [tu-email@ejemplo.com]

## 🙌 Agradecimientos

- Diseño inspirado en tendencias modernas de portfolios de desarrolladores
- Iconos por [Lucide React](https://lucide.dev)
- Fuentes de Google Fonts

## 🔄 Actualizaciones y Versionado

El proyecto sigue el versionado semántico:

- Major.Minor.Patch
- Ejemplo: 1.0.0

### Historial de Versiones

- 1.0.0
  - Lanzamiento inicial
  - Componentes base
  - Tema oscuro
  - Responsive design

## ⚠️ Notas Importantes

- El proyecto requiere Node.js 14 o superior
- Se recomienda usar npm o yarn, no mezclar gestores de paquetes
- Asegúrate de tener derechos sobre las imágenes que utilices
- Realiza pruebas en diferentes navegadores antes de desplegar

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev       # Inicia el servidor de desarrollo

# Construcción
npm run build     # Construye el proyecto para producción
npm run preview   # Preview de la build de producción

# Linting y Tipos
npm run lint      # Ejecuta el linter
npm run typecheck # Verifica los tipos de TypeScript
```
