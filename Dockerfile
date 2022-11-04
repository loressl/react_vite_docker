# escolhe a imagem a ser utilizada
FROM node:16-alpine

# criar diretório no container
WORKDIR /app_react_docker

# copia tudo que começa com package e tenha a extensão json para o diretório criado anteriormente
COPY package*.json ./

# instala as dependências
RUN yarn install

# copia o projeto para o diretório criado no container
COPY . .

# container irá ouvir nessa porta
EXPOSE 3000

# comando que roda a aplicação
CMD ["yarn", "dev"]

