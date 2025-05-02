devcontainer を使っている

# コミット前およびローカル起動前

backend と frontend の API 同期のため、  
backend 下で`npm run generate:swagger`  
frontend 下で`npm run generate:client`  
を毎回やる

# ローカル起動

devcontainer で開く

frontend 下で`npm run dev`  
backend 下で`npm run start:dev`
http://localhost:3010/ で Hello World

# TODO

- ルートディレクトリから frontend や backend のスクリプトを叩けるようにする
- postgres のパスワード
- backend のほうは delete 余分な space の赤線が出てても Ctrl+S しても治らない フロントは治る ここの gap を埋めたい
- Prisma
- Lambda 化
- user 作り
- follow 機能
