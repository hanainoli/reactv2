# pull official base image
FROM node:latest

# set working directory

RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
# install app dependencies
#COPY package.json /usr/src/app/package.json
#COPY package-lock.json /usr/src/app/package-lock.json
# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build --production
#RUN npm install react-scripts@4.0.2 -g --silent

RUN npm install -g serve

CMD serve -s build
# add app
#COPY . .

EXPOSE 5000

# start app
#CMD ["npm", "start"]