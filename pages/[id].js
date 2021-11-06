import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

export async function getStaticPaths() {
  const id = 731;
  var heroes = [];
  for (var i = 1; i <= id; i++) {
    heroes.push(i.toString());
  }

  const paths = heroes.map((hero) => ({
    params: { id: hero },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.superheroapi.com/api.php/4525729287520803/${params.id}`
  );

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Hero({ post }) {
  var id = post.id;
  const ID = Number(id);

  var PREV = 1;
  var FORWARD = 1;

  if (ID == 1) {
    PREV = 731;
    FORWARD = ID + 1;
  } else if (ID == 731) {
    PREV = ID - 1;
    FORWARD = 1;
  } else {
    PREV = ID - 1;
    FORWARD = ID + 1;
  }

  const URL_PREV = "/" + PREV.toString();
  const URL_FORWARD = "/" + FORWARD.toString();

  return (
    <Layout>
      <div className="container-fluid">
        <div className="position-sticky sticky-top heroName d-flex justify-content-center py-2 display-6">
          <h1 className="heroName">{post.name}</h1>
        </div>
        <Head>
          <title>{post.name}</title>
        </Head>

        <div className="container-fluid row">
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column container-fluid">
            <Image
              src={post.image.url}
              alt={post.name}
              width={256}
              height={256}
            />
            <p className="lead">Intelligence: </p>
            <div className="progress hero-bar">
              <div
                class="hero-data progress-bar"
                style={{ width: post.powerstats.intelligence + "%" }}
                role="progressbar"
                aria-valuenow={post.powerstats.intelligence}
                aria-valuemin={0}
                aria-valurmax={100}
              >
                {post.powerstats.intelligence}
              </div>
            </div>
            <p className="lead">Strength: </p>
            <div className="progress hero-bar">
              <div
                class="hero-data progress-bar"
                style={{ width: post.powerstats.strength + "%" }}
                role="progressbar"
                aria-valuenow={post.powerstats.strength}
                aria-valuemin={0}
                aria-valurmax={100}
              >
                {post.powerstats.strength}
              </div>
            </div>
            <p className="lead">Speed: </p>
            <div className="progress hero-bar">
              <div
                class="hero-data progress-bar"
                style={{ width: post.powerstats.speed + "%" }}
                role="progressbar"
                aria-valuenow={post.powerstats.speed}
                aria-valuemin={0}
                aria-valurmax={100}
              >
                {post.powerstats.speed}
              </div>
            </div>
            <p className="lead">Durability: </p>
            <div className="progress hero-bar">
              <div
                class="hero-data progress-bar"
                role="progressbar"
                style={{ width: post.powerstats.durability + "%" }}
                aria-valuenow={post.powerstats.durability}
                aria-valuemin={0}
                aria-valurmax={100}
              >
                {post.powerstats.durability}
              </div>
            </div>
            <p className="lead">Power: </p>
            <div className="progress hero-bar">
              <div
                class="hero-data progress-bar"
                role="progressbar"
                style={{ width: post.powerstats.power + "%" }}
                aria-valuenow={post.powerstats.power}
                aria-valuemin={0}
                aria-valurmax={100}
              >
                {post.powerstats.power}
              </div>
            </div>
            <p className="lead">Combat: </p>
            <div className="progress hero-bar">
              <div
                class="hero-data progress-bar"
                style={{ width: post.powerstats.combat + "%" }}
                role="progressbar"
                aria-valuenow={post.powerstats.combat}
                aria-valuemin={0}
                aria-valurmax={100}
              >
                {post.powerstats.combat}
              </div>
            </div>
          </div>
          <dl className="col-12 col-md-8 d-flex container text-justify flex-column row my-5 heroText container-fluid mx-auto">
            {Object.entries(post.biography).map(([key, value]) => (
              <div className="row">
                <dt className="col-12 col-md-3 text-capitalize">
                  {key.replace("-", " ").replace("-", " ")}
                </dt>
                <dd className="col-12 col-md-9 lead text-capitalize">
                  {value} <br />
                </dd>
              </div>
            ))}
            {Object.entries(post.appearance).map(([key, value]) => (
              <div className="row">
                <dt className="col-12 col-md-3 text-capitalize font-weight-bold">
                  {key.replace("-", " ").replace("-", " ")}
                </dt>
                <dd className="col-12 col-md-9 lead text-capitalize">
                  {value} <br />
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="container heroText">
          <dl>
            {Object.entries(post.work).map(([key, value]) => (
              <div className="row">
                <dt className="col-12 col-md-3 text-capitalize font-weight-bold">
                  {key.replace("-", " ").replace("-", " ")}
                </dt>
                <dd className="col-12 col-md-9 lead text-capitalize">
                  {value} <br />
                </dd>
              </div>
            ))}
            {Object.entries(post.connections).map(([key, value]) => (
              <div className="row">
                <dt className="col-12 col-md-3 text-capitalize font-weight-bold">
                  {key.replace("-", " ").replace("-", " ")}
                </dt>
                <dd className="col-12 col-md-9 lead text-capitalize">
                  {value} <br />
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="row mx-auto my-3 bottom-drawer">
          <div
            type="button"
            className="col-6 col-md-3 d-flex justify-content-center"
          >
            <Link href={URL_PREV}>
              <a>
                <button className="btn btn-change">
                  <Image
                    src="/../public/images/Left.svg"
                    className="btn-change"
                    width={128}
                    height={128}
                  />
                </button>
              </a>
            </Link>
          </div>
          <div className="d-none d-md-flex justify-content-center align-items-center text-center col-md-6 display-6">
            {ID}
          </div>
          <div
            type="button"
            className="col-6 col-md-3 d-flex justify-content-center"
          >
            <Link href={URL_FORWARD}>
              <a>
                <button className="btn btn-change">
                  <Image
                    src="/../public/images/Right.svg"
                    className="btn-change"
                    width={128}
                    height={128}
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
