import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import TiktokQR from './tiktok-qr.png'

const title = '我的作品'
const description = '目前只粗剪过一些短视频，水平一般，还有很大的成长空间，作品可能略显粗糙，还望多多包涵，欢迎大佬们向我提建议。'

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
          我的视频剪辑作品合集
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>个人作品</h2>
        <p>以下是我抖音的相关作品：</p>
        <ul>
          <li>
            <RichLink href="https://v.douyin.com/iyrAqJrP/" target="_blank">
              相亲辩论赛
            </RichLink>
          </li>
          <li>
            <RichLink href="https://v.douyin.com/iD8Pwr9U/" target="_blank">
              享受就寿
            </RichLink>
          </li>
          <li>
            <RichLink href="https://v.douyin.com/iDChHeaw/" target="_blank">
              经典名言
            </RichLink>
          </li>
          <li>
            <RichLink href="https://v.douyin.com/iD4WHRYT/" target="_blank">
              经典语句
            </RichLink>
          </li>
          <li>
            <RichLink href="https://v.douyin.com/iDoDL6nb/" target="_blank">
              杀死一只知更鸟
            </RichLink>
          </li>
          <li>
            <RichLink href="https://v.douyin.com/iDcV1w1A/" target="_blank">
              习惯逃避，你在害怕什么
            </RichLink>
          </li>
        </ul>
        <p>查看更多作品请在抖音搜索<code>594kxg</code>，或者打开抖音APP扫一扫下面的二维码：</p>
        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={TiktokQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">抖音码</span>
          </span>
        </p>
      </article>
    </Container>
  )
}
