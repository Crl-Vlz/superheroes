import Link from "next/link";

export async function getStaticPaths() {
  const id = 731;
  var heroes = [];
  for (var i = 1; i <= id; i++) {
    const res = await fetch(
      `https://www.superheroapi.com/api.php/4525729287520803/search/${i}`
    );

    const post = await res.json();
    heroes.push(post.name);
  }

  const paths = heroes.map((hero) => ({
    params: { search: hero },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ search }) {
  const res = await fetch(
    `https://www.superheroapi.com/api.php/4525729287520803/search/${search}`
  );
  const hero = await res.json();
  return {
    props: {
      data: hero,
    },
  };
}
export default function Search({ data }) {
  return (
    <p>
      {data.results.forEach((element) => (
        <div className="container">
          <Link href={`/${element.id}`}>
            <a>
              {element.name} otherwise known as {element.biography["full-name"]}
            </a>
          </Link>
        </div>
      ))}
    </p>
  );
}
