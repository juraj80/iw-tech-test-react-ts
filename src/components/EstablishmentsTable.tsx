import React from "react";
import { EstablishmentsTableRow } from "./EstablishmentsTableRow";
import PropTypes from "prop-types";
import { headerStyle } from "../styles";

interface EstablishmentsTableProps {
  establishments: { [key: string]: string }[] | null | undefined;
  onCheck: (id: string, checked: boolean) => void;
  // onRowClick: (establishment: { [key: string]: string }) => void;
}

export const EstablishmentsTable: React.FC<EstablishmentsTableProps> = ({
  establishments,
  onCheck,
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
                onCheck={onCheck}
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
