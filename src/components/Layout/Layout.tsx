import { PageLayoutProps } from '@/Types/types'
import Head from 'next/head'


export default function Layout(props: PageLayoutProps): React.ReactElement | null {

  return (
    <>
      <Head>
        <title>HealthOs Commerce</title>
        <meta name="description" content="HealthOs Commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
            {props.children}
      </main>
    </>
  )
}