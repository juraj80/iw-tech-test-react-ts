import React from "react";
import { EstablishmentsTableRow } from "./EstablishmentsTableRow";
import PropTypes from "prop-types";

const headerStyle: { [key: string]: string | number } = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

interface EstablishmentsTableProps {
  establishments: { [key: string]: string }[] | null | undefined;
  // onRowClick: (establishment: { [key: string]: string }) => void;
}

export const EstablishmentsTable: React.FC<EstablishmentsTableProps> = ({
  establishments,
  // onRowClick,
}) => {
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
              <EstablishmentsTableRow
                key={index}
                establishment={establishment}
                // onClick={() => onRowClick(establishment)}
              />
            )
          )}
      </tbody>
    </table>
  );
};

EstablishmentsTable.propTypes = {
  establishments: PropTypes.array,
};
