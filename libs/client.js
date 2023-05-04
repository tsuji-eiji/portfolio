import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries) => {
  const listData = await client.getList({
    endpoint: "blogs",
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (contentId, queries) => {
  const detailData = await client.getListDetail ({
      endpoint: "blogs",
      contentId,
      queries,
    });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};

// 制作物一覧を取得
export const getWorks = async (queries) => {
  const listData = await client.getList({
    endpoint: "works",
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};