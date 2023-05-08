# ベースイメージを指定
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 依存関係のコピーとインストール
COPY package*.json ./
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# 3000番ポートを公開
EXPOSE 3000

# アプリケーションの実行
CMD ["npm", "run", "start:dev"]
