import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts"); // posts dir までのパスを取得

// mdファイルのデータを取り出す
export const getPostData = () => {
  const fileNames = fs.readdirSync(postsDirectory); //posts dir のファイル名の配列
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // .md の削除 .md を見付けて、 空文字へ変更する
    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
};

// getStaticPath で return で使う path を取得する
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory); //posts dir のファイル名の配列
  const allPostsIds = fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
  return allPostsIds;
};

// id に基づいてブログ投稿データを返す
export const getPostDataId = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContent);
  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHTML = blogContent.toString();
  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
};
