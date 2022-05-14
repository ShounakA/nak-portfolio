FROM ghcr.io/shounaka/shounak-rubynodeimage:1.0.0

WORKDIR /webapp

COPY package*.json ./

RUN npm install
COPY . .

RUN yarn build

CMD ["yarn", "preview"]