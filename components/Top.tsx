import * as React from 'react';
import * as summary from "../articles/summary.json";
import Link from "next/link";

interface FileMap { 
	[key: string]: {
		"title": String,
		"dir": String,
		"base": String,
		"ext": String,
		"sourceBase": String,
		"sourceExt": String
	}
}

const Top = () => {
  const { fileMap }: FileMap = summary;

  return (
    <div>
      {Object.keys(fileMap).map(key => (
        <div key={fileMap[key].sourceBase}>
          <Link href={`/article?id=${fileMap[key].base.replace(".json", "")}`}>
            <a>{fileMap[key].title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Top;
