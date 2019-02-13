import * as React from "react";
import * as summary from "../articles/summary.json";
import ArticleItem from "./ArticleItem";
import Card from "./Card";
interface FileMap {
  [key: string]: {
    title: String;
    dir: String;
    base: String;
    ext: String;
    sourceBase: String;
    sourceExt: String;
  };
}

const hrefFromId: (id: string) => string = id => {
  return `/article?id=${id.replace(".json", "")}`;
};

const ArticleList = () => {
  const { fileMap }: FileMap = summary;

  return (
    <div
      style={{
        margin: "3rem 0 0"
      }}
    >
      {Object.keys(fileMap).map(key => (
        <Card key={fileMap[key].sourceBase}>
          <ArticleItem
            href={hrefFromId(fileMap[key].base)}
            title={fileMap[key].title}
          />
        </Card>
      ))}
    </div>
  );
};

export default ArticleList;
