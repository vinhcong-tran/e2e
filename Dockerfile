FROM ubuntu:focal

# Install node16
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

WORKDIR /usr/app

COPY . .

RUN npm i && npx playwright install chromium --with-deps

ENTRYPOINT ["/bin/bash","-c"]
