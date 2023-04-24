import React, { useContext } from "react";
import { EstablishmentsTableRow } from "./EstablishmentsTableRow";
import { headerStyle } from "../styles";
import EstablishmentsContext from "../context/EstablishmentsContext";

type EstablishmentsTableProps = {
  selectedAuthority: string;
};

export const EstablishmentsTable = (props: EstablishmentsTableProps) => {
  const { establishments } = useContext(EstablishmentsContext);

  const filteredEstablishments = establishments.filter((establishment) => {
    return establishment.LocalAuthorityBusinessID === props.selectedAuthority;
  });

  const tableData = props.selectedAuthority
    ? filteredEstablishments
    : establishments;

  return (
    <table>
      <tbody>
        <tr>
          <th style={headerStyle}>Business Name</th>
          <th style={headerStyle}>Rating Value</th>
        </tr>
        {tableData &&
          tableData?.map(
            (
              establishment: { [key: string]: string },
              index: React.Key | null | undefined
            ) => (
              <EstablishmentsTableRow
                key={index}
                establishment={establishment}
              />
            )
          )}
      </tbody>
    </table>
  );
};
