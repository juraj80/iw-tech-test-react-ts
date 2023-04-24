import { useContext } from "react";
import { EstablishmentsFavouritesTableRow } from "./EstablishmentsFavouritesTableRow";
import EstablishmentsContext from "../context/EstablishmentsContext";
import { headerStyle, tableStyle } from "../styles";

export const favouritesTableStyle: { [key: string]: string | number } = {
  ...tableStyle,
  marginTop: "20px",
};

export const EstablishmentsFavouritesTable = () => {
  const { checkedEstablishments } = useContext(EstablishmentsContext);

  const checkedEstablishmentsArray = Object.values(checkedEstablishments);

  return (
    <div style={favouritesTableStyle}>
      <h2>Favourite Ratings</h2>

      <table>
        <tbody>
          <tr>
            <th style={headerStyle}>Business Name</th>
            <th style={headerStyle}>Rating Value</th>
          </tr>
          {checkedEstablishmentsArray &&
            checkedEstablishmentsArray?.map(
              (establishment: { [key: string]: string }) => (
                <EstablishmentsFavouritesTableRow
                  key={establishment.FHRSID}
                  establishment={establishment}
                />
              )
            )}
        </tbody>
      </table>
    </div>
  );
};
