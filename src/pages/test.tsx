import Link from "next/link";
import { useRecoilState } from "recoil";
import { countState } from ".";
import { Layout } from "src/components/Layout";
import { pagesPath } from "src/lib/$path";

export default function Home() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <Layout>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <Link href={pagesPath.$url()}>トップへ</Link>
      <h2>タイトル</h2>
    </Layout>
  );
}
