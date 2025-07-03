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

