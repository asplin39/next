import Link from "next/link";
import { atom, useRecoilState } from "recoil";
import { Layout } from "src/components/Layout";
import { pagesPath } from "src/lib/$path";

export const countState = atom({ key: 'count', default: 0 });

export default function Home() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <Layout>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <Link href={pagesPath.test.$url()}>test</Link>
      <h2>タイトル</h2>
    </Layout>
  )
}
