FROM node:20-slim

RUN apt-get update && apt-get install -y \
    curl unzip zip git postgresql-client procps \
    && rm -rf /var/lib/apt/lists/*

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install

# nest CLI をグローバルインストール
RUN npm install -g @nestjs/cli

RUN corepack enable && npm install -g aws-cdk

WORKDIR /workspace