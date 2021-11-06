import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <div className="jumbotron">
        <h1 className="display-1">Welcome to the Superhero-Pedia</h1>
      </div>
      <Link href="/1">
        <a>
          <button>Take me</button>
        </a>
      </Link>
    </Layout>
  );
}
