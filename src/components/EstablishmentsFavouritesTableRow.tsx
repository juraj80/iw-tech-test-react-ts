import { useContext } from "react";
import { Link } from "react-router-dom";
import EstablishmentsContext from "../context/EstablishmentsContext";

export const EstablishmentsFavouritesTableRow: React.FC<{
  establishment: { [key: string]: string };
}> = ({ establishment }) => {
  const establishmentPath = `/establishment/${establishment?.FHRSID}`;

  const { checkEstablishment } = useContext(EstablishmentsContext);

  const onDelete = (id: string, checked: boolean) => {
    checkEstablishment(establishment, false);
  };

  const handleDelete = () => {
    onDelete(establishment.FHRSID, false);
  };

  return (
    <tr>
      <td>
        <Link to={establishmentPath} state={{ establishment }}>
          {establishment.BusinessName}
        </Link>
      </td>
      <td>{establishment.RatingValue}</td>
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
};
