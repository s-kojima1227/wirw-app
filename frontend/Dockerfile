# ベースイメージを指定
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のコピーとインストール
COPY package*.json ./
RUN npm ci

# アプリケーションのコードをコピー
COPY . .

# ポートを公開
EXPOSE 5173

# アプリケーションの実行
CMD ["npm", "run", "dev"]
