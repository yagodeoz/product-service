# 🧱 Product Service - Inventario API

Este microservicio forma parte del sistema de gestión de inventario. Está desarrollado en **NestJS** usando **arquitectura hexagonal**, persistencia con **PostgreSQL**, documentado con **Swagger**, y desplegado vía **Docker**.

---

## 📦 Tecnologías principales

- NestJS (con TypeScript)
- Arquitectura Hexagonal (Domain → Application → Infrastructure)
- PostgreSQL
- TypeORM
- Swagger (OpenAPI)
- Docker + Docker Compose
- Configuración externalizada con `.env` y `@nestjs/config`

---

## 🚀 Levantar el proyecto

### ✅ Prerrequisitos

- Node.js `>=18.x`
- Docker y Docker Compose instalados

---

### 🐳 Levantar con Docker

1. Clona el proyecto

```bash
git clone https://github.com/yagodeoz/product-service.git
cd product-service
```

2. Crea un archivo `.env` basado en `.env.example`

```bash
cp .env.example .env
```

3. Levanta el entorno con Docker Compose:

```bash
docker-compose up --build
```

Esto levantará:
- `nest_inventory_service` en el puerto `3000`
- `postgres` en el puerto `5433` (para evitar conflicto si ya tienes uno local)

---

### 🧪 Endpoints Swagger

Una vez iniciado, accede a la documentación Swagger en:

📄 [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## 📂 Estructura del Proyecto (Hexagonal)

```
src/
└── commons
    inventory/
    └── product/
        ├── domain/          → Entidades y contratos (repos)
        ├── application/     → Casos de uso y DTOs
        ├── infrastructure/
        │   ├── controllers/ → Endpoints HTTP
        │   └── persistence/ → Repositorio concreto + ORM
        └── config/          → Conexión a base de datos
```

---

## ⚙️ Variables de entorno

Tu `.env` debe contener:

```env
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=productdb
```

> Ya están definidas en `docker-compose.yml`, por lo que no necesitas cambiarlas si solo usas Docker.

---

## 📦 Scripts útiles

```bash
# Desarrollo local
npm run start:dev

# Compilar
npm run build

# Producción
npm run start:prod
```

---

## 🔐 Buenas prácticas aplicadas

- Arquitectura limpia y mantenible
- Validación robusta con Joi y Pipes
- Filtro global de excepciones
- UUID como identificador
- Swagger para documentación interactiva
- Repositorio desacoplado (interface ↔ implementación)

---

## 🧩 Extensiones y mejoras futuras

- Autenticación con JWT
- Tests unitarios e integración
- CI/CD con GitHub Actions
- Soporte multiempresa / multialmacén
- Panel de administración

---

## 👨‍💻 Autor

Byron Santiago Segovia  
📧 byronsantiago@gmail.com

---

## 🧠 ¿Dudas o sugerencias?

Estoy abierto a feedback y colaboración. Si estás trabajando con NestJS o arquitectura hexagonal, ¡conversemos!
