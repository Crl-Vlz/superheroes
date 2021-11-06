import Image from "next/image";

function HeroCard(props) {
  const info = {
    name: props.hero,
    image: props.img,
    fullname: props.full,
  };

  const image = (
    <Image
      className="img-fluid mx-auto d-block float-md-start cardImg"
      src={info.image}
      alt="Hero"
      width={64}
      height={64}
    />
  );

  const cardImg = <div className="col-12 col-md-4 my-card">{image}</div>;

  const cardContent = (
    <div className="card-body my-card">
      <h1 className="card-title mx-auto d-block my-card">{info.name}</h1>
      <h5 className="lead my-card">{info.fullname}</h5>
    </div>
  );

  const cardBody = (
    <div className="row g-0 d-flex justify-content-center my-card">
      {cardImg}
      <div className="col-12 col-md-8 my-card">{cardContent}</div>
    </div>
  );

  const customStyle = {
    width: "80%",
    color: "blue",
    margin: "5rem auto 0rem auto",
    background: "#111",
  };

  return (
    <div
      className="card text-center my-card top-card py-2 px-2"
      style={customStyle}
    >
      {cardBody}
    </div>
  );
}

export default HeroCard;
