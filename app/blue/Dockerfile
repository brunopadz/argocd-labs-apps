FROM node:24.3.0-alpine3.21
LABEL authors="brunopadz"

ARG USER=app
ARG GROUP=app
ARG APP_PATH=/app

RUN addgroup -S $GROUP && adduser -S $USER -G $GROUP

WORKDIR $APP_PATH

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY src ./src/

RUN chown -R $USER:$GROUP $APP_PATH
USER $USER

EXPOSE 1337

CMD ["node", "src/app.js"]
