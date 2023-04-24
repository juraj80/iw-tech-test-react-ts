import { useState, useEffect } from "react";
import { EstablishmentsTable } from "./EstablishmentsTable";
import { EstablishmentsTableNavigation } from "./EstablishmentsTableNavigation";
import { getEstablishmentRatings } from "../api/ratingsAPI";
import { CustomDropdown } from "./CustomDropdown";
import { EstablishmentsFavouritesTable } from "./EstablishmentsFavouritesTable";

const favouritesTableStyle = {
  background: "rgba(51, 51, 51, 0.9)",
  padding: "10px",
  width: "max-content",
  marginLeft: "50px",
  marginTop: "20px",
  color: "white",
  fontSize: "20px",
};

const tableStyle = {
  background: "rgba(51, 51, 51, 0.9)",
  padding: "10px",
  width: "max-content",
  marginLeft: "50px",
  color: "white",
  fontSize: "20px",
};

export const PaginatedEstablishmentsTable = () => {
  const [error, setError] = useState<{
    message: string;
    [key: string]: string;
  }>();
  const [establishments, setEstablishments] = useState<
    { [key: string]: string }[]
  >([]);

  const [checkedEstablishments, setCheckedEstablishments] = useState<{
    [key: string]: boolean;
  }>({});
  const [pageNum, setPageNum] = useState(1);
  const [pageCount] = useState(100);

  // added states
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [selectedAuthority, setSelectedAuthority] = useState<string>("");

  useEffect(() => {
    getEstablishmentRatings(pageNum).then(
      (result) => {
        console.log("establishments", result?.establishments);
        setIsLoading(false);
        setEstablishments(result?.establishments);
      },
      (error) => {
        setError(error);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredEstablishments = establishments.filter((establishment) => {
    return establishment.LocalAuthorityBusinessID === selectedAuthority;
  });

  const tableData = selectedAuthority ? filteredEstablishments : establishments;
  console.log("tableData", tableData);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthority(event.target.value);
  };

  const handleCheck = (id: string, checked: boolean) => {
    console.log("handleCheck");
    console.log("id", id, "checked", checked);
    setCheckedEstablishments((prevState) => ({ ...prevState, [id]: checked }));
  };

  const getCheckedEstablishments = () => {
    return establishments.filter(
      (establishment) => checkedEstablishments[establishment.FHRSID]
    );
  };

  const checked = getCheckedEstablishments();

  async function handlePreviousPage() {
    setIsLoading(true);
    pageNum > 1 && setPageNum(pageNum - 1);
    getEstablishmentRatings(pageNum).then(
      (result) => {
        setEstablishments(result.establishments);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
      }
    );
  }

  async function handleNextPage() {
    setIsLoading(true);
    pageNum < pageCount && setPageNum(pageNum + 1);
    getEstablishmentRatings(pageNum).then(
      (result) => {
        setEstablishments(result.establishments);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
      }
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <div style={tableStyle}>
          <h2>Food Hygiene Ratings</h2>

          {isLoading && <h2>Loading...</h2>}
          {!isLoading && establishments.length === 0 && <h2>No results</h2>}

          {!isLoading && (
            <>
              <CustomDropdown
                onOptionChange={handleOptionChange}
                filteredOptions={Array.from(
                  new Set(
                    establishments.map((item) => item.LocalAuthorityBusinessID)
                  )
                )}
                selectedOption={selectedAuthority}
              />

              <EstablishmentsTable
                establishments={tableData}
                onCheck={handleCheck}
              />
            </>
          )}

          <EstablishmentsTableNavigation
            pageNum={pageNum}
            pageCount={pageCount}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        </div>
        <div style={favouritesTableStyle}>
          <h2>Favourite Ratings</h2>
          <EstablishmentsFavouritesTable
            establishments={getCheckedEstablishments()}
            onDelete={(id) => {
              setCheckedEstablishments((prevState) => {
                const newState = { ...prevState };
                delete newState[id];
                return newState;
              });
            }}
          />
        </div>
      </div>
    );
  }
};
