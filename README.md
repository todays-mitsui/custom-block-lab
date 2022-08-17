# Custom Block Lab

カスタムブロック構築のノウハウとかサンプルとかいろいろ。

## ローカル環境立ち上げ

[wp-env](https://ja.wordpress.org/team/handbook/block-editor/reference-guides/packages/packages-env/) を使ってローカルに管理画面を立ち上げて動作確認できます。

```shell
$ npm install
$ npm run wp-env
```

wp-env を立ち上げたあと http://localhost:8888/wp-admin/ にアクセスすると管理画面を表示できます。
ユーザー名は `admin` 、パスワードは `password` です。

## カスタムブロックのコンパイル

カスタムブロックのソースコードは `plugins/custom-block-lab/src/` に格納されています。  
ソースコードに変更を加えた後は、動作確認する前に **コンパイル** が必要です。

下記のコマンドを叩くとコンパイルが走ります。

```shell
$ npm start
```

自動でファイルの変更を監視してくれます。ソースコードを変更して保存をかけるたびにコンパイルしてくれるので便利です。
