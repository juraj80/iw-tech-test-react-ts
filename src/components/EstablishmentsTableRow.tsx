import { useContext } from "react";
import { Link } from "react-router-dom";
import EstablishmentsContext from "../context/EstablishmentsContext";

type EstablishmentsTableRowProps = {
  establishment: { [key: string]: string };
};

export const EstablishmentsTableRow: React.FC<EstablishmentsTableRowProps> = ({
  establishment,
}) => {
  const establishmentPath = `/establishment/${establishment?.FHRSID}`;

  const { checkedEstablishments, checkEstablishment } = useContext(
    EstablishmentsContext
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkEstablishment(establishment, event.target.checked);
  };

  const isChecked = checkedEstablishments[establishment.FHRSID] ? true : false;

  return (
    <tr>
      <td>
        <Link to={establishmentPath} state={{ establishment }}>
          {establishment.BusinessName}
        </Link>
      </td>
      <td>{establishment.RatingValue}</td>
      <td>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </td>
    </tr>
  );
};
