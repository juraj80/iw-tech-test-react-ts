import { useLocation, useNavigate } from "react-router-dom";
import { DetailStyle } from "./EstablishmentDetail.styles";

export const EstablishmentDetail: React.FC = () => {
  const location = useLocation();
  const establishment = location.state.establishment;

  const navigate = useNavigate();

  const handleClicked = () => {
    navigate("/");
  };

  if (!establishment) {
    return <div>No establishment found</div>;
  }

  return (
    <div style={DetailStyle}>
      <h1>{establishment.BusinessName}</h1>
      <p>Business type: {establishment.BusinessType}</p>
      <p>
        Address: {establishment.AddressLine1}, {establishment.PostCode}
      </p>
      <p>Rating: {establishment.RatingValue}</p>
      <p>Rating date: {establishment.RatingDate}</p>
      <p>Hygiene rating: {establishment.Hygiene}</p>
      <p>Structural rating: {establishment.Structural}</p>
      <p>
        Confidence in management rating: {establishment.ConfidenceInManagement}
      </p>
      <button onClick={handleClicked}>Go Back</button>
    </div>
  );
};
