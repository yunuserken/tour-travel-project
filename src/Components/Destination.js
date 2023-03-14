import Mountain1 from "../assets/anthony-esau-N2zk9yXjmLA-unsplash.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css"; 
const Destination = () => {
    return (
        <div className="destination">
            <h1> Popular Destination </h1>
            <p> Tours give you the oppurtunity thesdfs </p>
            <DestinationData 
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release"
            img1={Mountain1}
            img2={Mountain1}
            
            />
              <DestinationData 
            className="first-des-reverse"
            heading="Taal Volcano, Batangas"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release"
            img1={Mountain1}
            img2={Mountain1}
            
            />
        </div>
    );
    
};
export default Destination;