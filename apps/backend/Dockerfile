# Base da aplicação
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar dependências e instalar
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copiar restante dos arquivos
COPY . .

# Compilar a aplicação
RUN pnpm build

# Porta e comando de start
EXPOSE 3000
CMD ["pnpm", "start"]
