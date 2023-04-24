import { useState } from "react";
import { Link } from "react-router-dom";

export const EstablishmentsFavouritesTableRow: React.FC<{
  establishment: { [key: string]: string } | null | undefined;
  onDelete: (id: string, checked: boolean) => void;
}> = ({ establishment, onDelete }) => {
  const establishmentPath = `/establishment/${establishment?.FHRSID}`;

  const handleDelete = () => {
    onDelete(establishment?.FHRSID || "", false);
  };

  return (
    <tr>
      <td>
        <Link to={establishmentPath} state={{ establishment }}>
          {establishment?.BusinessName}
        </Link>
      </td>
      <td>{establishment?.RatingValue}</td>
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
};
