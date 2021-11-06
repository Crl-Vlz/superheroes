import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

export default function Nav() {
  const logo = (
    <Link href="/">
      <a className="my-nav">
        <Image
          src="/../public/images/Logosvg.svg"
          alt="logo"
          height={64}
          width={64}
          className="my-nav"
        />
      </a>
    </Link>
  );

  const searchHero = (event) => {
    event.preventDefault();

    var name = event.target.searcher.value;
    if (typeof name === "string") {
      name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    Router.push(`/search/${encodeURIComponent(name)}`);
  };

  const searchBar = (
    <form className="d-flex my-nav" onSubmit={searchHero}>
      <input
        className="form-control form-control-sm"
        type="search"
        id="searcher"
      ></input>
      <button type="submit" className="btn btn-nav btn-sm mx-0 mx-md-3">
        Search
      </button>
    </form>
  );
  const RAND = Math.floor(Math.random() * 731) + 1;
  const RANDOM_URL = "/" + RAND.toString();
  const random = (
    <Link href={RANDOM_URL}>
      <a className="my-nav">
        <button className="btn btn-nav btn-sm mx-0 mx-md-3">Random</button>
      </a>
    </Link>
  );
  const navBar = (
    <div className="container-fluid my-nav">
      <section className="my-nav d-flex justify-content-center align-items-center">
        {logo}
        {random}
      </section>
      <section className="my-nav">{searchBar}</section>
    </div>
  );

  return navBar;
}
