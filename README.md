devcontainer を使っている

# 初回起動時

db の初期化が必要なはず

# コミット前

`npm run gen`で API をバックエンド-フロントエンド間で同期する

# ローカル起動

devcontainer で開く

`npm run dev`  
http://localhost:3010/ で Hello World

# Backend

migrate のやり方：  
`npm run migrate:dev -- <name>`

# TODO

- backend のほうは delete 余分な space の赤線が出てても Ctrl+S しても治らない フロントは治る ここの gap を埋めたい
- Lambda 化
- user 認証
- follow 機能
