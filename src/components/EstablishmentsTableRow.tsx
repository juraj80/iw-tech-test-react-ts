import { useState } from "react";
import { Link } from "react-router-dom";

export const EstablishmentsTableRow: React.FC<{
  establishment: { [key: string]: string } | null | undefined;
  onCheck: (id: string, checked: boolean) => void;
}> = ({ establishment, onCheck }) => {
  const establishmentPath = `/establishment/${establishment?.FHRSID}`;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheck(establishment?.FHRSID || "", event.target.checked);
  };

  return (
    <tr>
      <td>
        <Link to={establishmentPath} state={{ establishment }}>
          {/* <Link to={{ pathname: establishmentPath, state: { establishment } }}> */}
          {establishment?.BusinessName}
        </Link>
      </td>
      <td>{establishment?.RatingValue}</td>
      <td>
        <input
          type="checkbox"
          id="checkbox"
          // checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </td>
    </tr>
  );
};
