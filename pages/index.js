import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fluid">
      <Layout home>
        <div className="jumbotron">
          <h1 className="display-2 text-center">
            Welcome to the Superhero-Pedia
          </h1>
        </div>
        <div className="jumbotron d-flex flex-column justify-content-center align-items-center main-content">
          <Image
            src="/../public/images/Logosvg.svg"
            alt="Logo"
            width={256}
            height={256}
            className="main-content"
          ></Image>
          <h2 className="display-5 main-content">Here you can find</h2>
          <p className="main-content">
            Info on all of your favorite superheroes.
            <br /> Their stats and their connections.
          </p>
          <p className="display-6 main-content">
            To start, just enter the name of your hero on the search bar
            <br />
            or click on random to get the data of a random hero
          </p>
        </div>
      </Layout>
    </div>
  );
}
