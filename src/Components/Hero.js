import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.HeroImg} />

        <div className="hero-text">
          <h1>{props.Title} </h1>
          <p> {props.Text} </p>
          <a href={props.Url} className={props.BtnClass}>
            {props.ButtonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
