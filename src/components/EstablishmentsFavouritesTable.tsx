import React from "react";
import { EstablishmentsFavouritesTableRow } from "./EstablishmentsFavouritesTableRow";
import PropTypes from "prop-types";

const headerStyle: { [key: string]: string | number } = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

interface EstablishmentsTableProps {
  establishments: { [key: string]: string }[] | null | undefined;
  onDelete: (id: string) => void;
}

export const EstablishmentsFavouritesTable: React.FC<
  EstablishmentsTableProps
> = ({ establishments, onDelete }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th style={headerStyle}>Business Name</th>
          <th style={headerStyle}>Rating Value</th>
        </tr>
        {establishments &&
          establishments?.map(
            (
              establishment: { [key: string]: string } | null | undefined,
              index: React.Key | null | undefined
            ) => (
              <EstablishmentsFavouritesTableRow
                key={index}
                establishment={establishment}
                onDelete={onDelete}
              />
            )
          )}
      </tbody>
    </table>
  );
};

EstablishmentsFavouritesTable.propTypes = {
  establishments: PropTypes.array,
};
