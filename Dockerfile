# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /relatedItems

# Tell your container where your app's source code will live
WORKDIR /relatedItems

# What source code do you what to copy, and where to put it?
COPY . /relatedItems

# Does your app have any dependencies that should be installed?
RUN npm install nodemon @babel/preset-react react-dom react-bootstrap react mongoose file-loader express body-parser axios webpack webpack-cli

RUN npm install @babel/core @babel/preset-env babel-loader babel-preset-react css-loader style-loader
# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD [ "npm", "start" ]