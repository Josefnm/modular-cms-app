FROM node:12-alpine as react-build
ARG REACT_APP_FIREBASE_API_KEY
ENV REACT_APP_FIREBASE_API_KEY2=$REACT_APP_FIREBASE_API_KEY

WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
