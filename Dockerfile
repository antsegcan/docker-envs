# I am taking a base image with NodeJS and Nginx
FROM hoosin/alpine-nginx-nodejs:latest
# Telling Docker I like to work in the app workdir
WORKDIR /app
# Copying all files I need
COPY dist /app/dist
COPY define-env.js /app
COPY environments.json /app

# My environment variable for runtime purposes (dev by devfault)
ENV APP_ENV dev
# This instruction I think is failing, but when I swap it with
# CMD instead RUN and put a console.log works without troubles
RUN node define-env.js 

# Once I have all the files I move it to the Nginx workspace
RUN mv ./dist/* /usr/share/nginx/html

# Setup Nginx server
EXPOSE 80
CMD node define-env && mv ./dist/* /usr/share/nginx/html && nginx -g 'daemon off;'