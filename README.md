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

# VSCode

settings.sample.json を.vscode/settings.json にコピー（既にあるならうまいことマージ）すると frontend/backend にちゃんと eslint があたる

# TODO

- frontend、料金制限
- Lambda 化
- frontend と backend の繋ぎ込み
- user 認証
- follow 機能
