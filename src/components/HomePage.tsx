import { PaginatedEstablishmentsTable } from "./PaginatedEstablishmentsTable";
import Background from "../static/logo.svg";
import { EstablishmentLoader } from "./EstablishmentLoader";
import { EstablishmentsFavouritesTable } from "./EstablishmentsFavouritesTable";

const logoStyle: { [key: string]: string | number } = {
  width: "640px",
  height: "25px",
  background: `transparent url(${Background}) no-repeat center`,
  margin: "20px auto",
};

const HomePage = () => {
  return (
    <div>
      <header style={logoStyle} />
      <EstablishmentLoader>
        <PaginatedEstablishmentsTable />
        <EstablishmentsFavouritesTable />
      </EstablishmentLoader>
    </div>
  );
};

export default HomePage;
