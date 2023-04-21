import { Link } from "react-router-dom";

export const EstablishmentsTableRow: React.FC<{
  establishment: { [key: string]: string } | null | undefined;
}> = ({ establishment }) => {
  const establishmentPath = `/establishment/${establishment?.FHRSID}`;

  return (
    <tr>
      <td>
        <Link to={establishmentPath} state={{ establishment }}>
          {/* <Link to={{ pathname: establishmentPath, state: { establishment } }}> */}
          {establishment?.BusinessName}
        </Link>
      </td>
      <td>{establishment?.RatingValue}</td>
    </tr>
  );
};
