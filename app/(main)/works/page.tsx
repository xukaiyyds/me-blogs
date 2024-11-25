import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import TiktokQR from './tiktok-qr.png'

const title = '我的作品'
const description = '只用剪映粗剪了一些短视频，目前水平一般……'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function WorksPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的剪辑作品集
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>抖音短视频</h2>
        <p>以下是我抖音的相关作品：</p>
        <ul>
          <li>
            <b>享受就寿</b>：
            <RichLink href="https://v.douyin.com/iD8Pwr9U/" target="_blank">
              iD8Pwr9U
            </RichLink>
          </li>
        </ul>
        <p>更多作品请在抖音搜索<code>594kxg</code>，或者直接扫描下面的二维码：</p>
        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={TiktokQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">抖音码</span>
          </span>
        </p>

        <h2>B站长视频</h2>
        <p>以下是我哔哩哔哩的相关作品：</p>
        <ul>
          <li>
            <strong>敬请期待</strong>
          </li>
        </ul>
        <p>更多作品请查看
          <RichLink
            href="https://space.bilibili.com/2039366031"
            favicon={false}
            target="_blank"
          >
            我的B站主页
          </RichLink>。
        </p>
      </article>
    </Container>
  )
}
