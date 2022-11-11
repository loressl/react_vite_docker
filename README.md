<h1 align="center">React + Vite + Docker</h1>
<div align="center" justify-contente="space-around">
  <img width="50" alt="react" src="/src/assets/react.svg" />
  <img width="50" alt="vite" src="/public/vite.svg" />
  <img width="175" alt="docker" src="/public/docker.svg" />

  <br/>
  <br/>
  <br/>

  <span align="center">Este projeto foi criado para mostrar a utilização de imagens e containers em uma aplicação em React.</span>
</div>


### 🛠 Tecnologias

- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Docker](https://www.docker.com/)

### Executar projeto

```bash
  yarn install  
```

- Sem container
  ```bash
    yarn dev
  ```
- Com container
  ```bash
    docker build -t NOME_DA_IMAGEM .
  ```
  - Persistindo os dados:
    - Rodar o container mostrando o terminal em runtime
      ```bash
        docker run -p 3000:3000 -v $(pwd):/app_react_docker -e CHOKIDAR_USEPOLLING=true NOME_DA_IMAGEM
      ```
    - Rodar o container em background e o terminal livre
      ```bash
        docker run -d -p 3000:3000 -v $(pwd):/app_react_docker -e CHOKIDAR_USEPOLLING=true NOME_DA_IMAGEM
      ```
  - Lista container
    ```bash
      docker ps -a
    ```
  - Parar container
    ```bash
      docker stop -t=0 CONTAINER-ID
    ```
