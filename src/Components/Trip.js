import "./TripStyles.css";
import TripData from "./TripData";
import TripImage1 from "../assets/lance-anderson-QdAAasrZhdk-unsplash.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips </h1>
      <p>
        and typesetting industry. Lorem Ipsum has been the industry's standard
        du
      </p>
      <div className="tripCard">
        <TripData
          image={TripImage1}
          heading="trip in turkey"
          text=" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release"
        />
        <TripData
          image={TripImage1}
          heading="trip in costantinapolis"
          text=" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release"
        />
        <TripData
          image={TripImage1}
          heading="trip in sidney"
          text=" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release"
        />
      </div>
    </div>
  );
}

export default Trip;
