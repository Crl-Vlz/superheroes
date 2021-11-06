import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

export async function getStaticProps() {
  const id = 731;
  for (var i = 1; i <= id; i++) {
    const res = await fetch(
      `https://www.superheroapi.com/api.php/4525729287520803/${i}`
    );

    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  }
}

export default function Home() {
  return (
    <Layout home>
      <div className="jumbotron">
        <h1 className="display-1">Welcome to the Superhero-Pedia</h1>
      </div>
      <Link href="/1"></Link>
    </Layout>
  );
}
