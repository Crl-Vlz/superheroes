import Link from "next/link";
import Router from "next/router";
import Layout from "../../components/Layout";
import Card from "../../components/Components";
import Error from "../../components/error";

export async function getStaticPaths() {
  return {
    paths: [{ params: { search: [] } }],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.superheroapi.com/api.php/4525729287520803/search/${params.search}`
  );
  const data = await res.json();
  console.log(data);
  return { props: { data }, revalidate: 1 };
}

export default function Search({ data }) {
  const hero = data.results;
  //var results = [];
  //for (var i in hero) results.push([i, hero[i]]);
  if (hero.length == 0) {
    return <Error />;
  } else {
    return (
      <Layout>
        {hero.map((element) => (
          <Link href={`/${element.id}`}>
            <a>
              <Card
                hero={element["name"]}
                img={element.image["url"]}
                full={element.biography["full-name"]}
              />
            </a>
          </Link>
        ))}
      </Layout>
    );
  }
}
