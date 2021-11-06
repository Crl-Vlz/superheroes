import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-content d-flex justify-content-between">
      <section className="footer-content d-flex justify-content-center align-items-center">
        <Image
          src="/../public/images/NEXTjs.png"
          alt="nextLogo"
          width={128}
          height={128}
        />
        <p className="lead footer-content">Made using Next.js</p>{" "}
      </section>
      <section className="footer-content d-flex justify-content-center align-items-center mx-5">
        <p className="footer-content d-flex justify-content-center">
          Using <a href="https://superheroapi.com/">Superhero API</a>
        </p>
      </section>
    </footer>
  );
}
