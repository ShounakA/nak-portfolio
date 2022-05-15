FROM ghcr.io/shounaka/shounak-rubynodeimage:1.0.0

WORKDIR /webapp

COPY package*.json ./

RUN yarn install
COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "preview"]