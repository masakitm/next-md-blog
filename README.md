# Next.js Markdown Blog

create date: 2019/02

Next.js と ReactMarkdown を組み合わせ、  
markdown をパースしルーティングして表示するシンプルなブログアプリです

## 実装について

ES6 + typescript にて実装を行なっております

## ディレクトリについて

```
project
	- articles // 記事のjsonファイルが入っています
		- md // 記事元となるmdが入っています
	- components // 見た目を担当するステートレスなコンポーネントが入っています
	- containers // ロジックを担当するステートフルなHoC用コンポーネントが入っています
	- layouts // レイアウト用コンポーネントが入っています
	- pages // ページコンポーネントが入っています
```

## アプリ構成について

markdown 形式で記事を書き、 `articles/md` へ格納  
その後 `processmd` を用いて `json` 形式へ変換、 `summary.json` を同時に出力  
json を元にページ内容を構築するシンプルな構成です  
サーバー側での md パースなどは行っていません

## CSS in JS について

コンポーネントの再利用を行う予定がないため、 基本的に `style` 属性の直書きで行います  
再利用が増えた場合は `emotion` または `styled-components` を利用します

## Container コンポーネントについて

今回は hooks を利用せず、HoC パターンを採用しました
詳細ページのマウント時に、router のパラメータを元に当該記事の json 内容を取得、state に格納
`components/Template` をラップして props として情報を渡しています
