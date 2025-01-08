# Portfolio Template - React + TypeScript

Un template moderno y minimalista para crear tu portfolio profesional como desarrollador. Basado en React, TypeScript y Tailwind CSS.

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/bd0e2246-9875-4f9c-8383-524aa3d9aa4c" />

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

### Despliegue en GitHub Pages

1. Primero, instala gh-pages como dependencia de desarrollo:
```bash
npm install gh-pages --save-dev
```

2. Actualiza tu archivo `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nombre-repositorio/' // Reemplaza con el nombre de tu repositorio
})
```

3. Agrega los siguientes scripts en tu `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Configura tu repositorio en GitHub:
   - Crea un nuevo repositorio en GitHub
   - Inicializa Git en tu proyecto si aún no lo has hecho:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Conecta tu repositorio local con GitHub:
     ```bash
     git remote add origin https://github.com/username/nombre-repositorio.git
     git branch -M main
     git push -u origin main
     ```

5. Despliega tu sitio:
```bash
npm run deploy
```

6. Configura GitHub Pages:
   - Ve a la configuración de tu repositorio en GitHub
   - En la sección "Pages"
   - Selecciona la rama `gh-pages` como fuente
   - Guarda los cambios

Tu sitio estará disponible en: `https://username.github.io/nombre-repositorio`

### Resolución de Problemas Comunes en GitHub Pages

1. **Las imágenes no cargan**
   - Asegúrate de que las rutas de las imágenes sean relativas al repositorio
   - Usa la variable `base` en las rutas:
   ```jsx
   <img src={`${import.meta.env.BASE_URL}images/project1.jpg`} />
   ```

2. **404 en rutas personalizadas**
   - Crea un archivo `public/404.html`
   - Configura el redirector en el index.html

3. **Los estilos no se aplican**
   - Verifica que el `base` en `vite.config.ts` sea correcto
   - Asegúrate de que los assets estén siendo importados correctamente

4. **Problemas con las rutas**
   - Usa `createBrowserRouter` con la propiedad `basename`:
   ```typescript
   createBrowserRouter([...], {
     basename: import.meta.env.BASE_URL
   })
   ```

### Otras Plataformas de Despliegue

También puedes desplegar en otras plataformas:

#### Vercel
1. Crea una cuenta en Vercel
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto de Vite

#### Netlify
1. Crea una cuenta en Netlify
2. Arrastra y suelta la carpeta `dist` después de ejecutar `npm run build`
   O
3. Conecta tu repositorio de GitHub para despliegue continuo

Para construir el proyecto para producción en cualquier plataforma:

```bash
npm run build
# o
yarn build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

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
