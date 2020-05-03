# base image
FROM node:11.11.0
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install -g create-react-app yarn

# install and cache app dependencies
COPY package.json /app/package.json

# RUN mkdir -p /home/node/project
# RUN cd /home/node/project/
RUN yarn install
RUN npm rebuild node-sass --force
EXPOSE 3000 3001

CMD ["yarn", "local"]