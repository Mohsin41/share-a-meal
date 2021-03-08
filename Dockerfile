FROM node:alpine

WORKDIR /app
COPY . /src

RUN npm install -g nodemon

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin
ADD src ./src

CMD ["nodemon","-L","--inspect=0.0.0.0"]
