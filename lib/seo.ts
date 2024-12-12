export const seo = {
  title: 'Xu Kai | 开发者、剪辑师、细节控、理想主义者',
  description:
    '我叫徐凯，一名开发者，剪辑师，是个细节控，同时也是个理想主义者。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://me.xukaiyyds.cn'
      : 'http://localhost:3000'
  ),
} as const
