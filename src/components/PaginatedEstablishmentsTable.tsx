import { useState, useEffect, useContext } from "react";
import { EstablishmentsTable } from "./EstablishmentsTable";
import { EstablishmentsTableNavigation } from "./EstablishmentsTableNavigation";
import { CustomDropdown } from "./CustomDropdown";
import EstablishmentsContext from "../context/EstablishmentsContext";
import { tableStyle } from "../styles";

export const PaginatedEstablishmentsTable = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pageCount] = useState(100);

  const {
    establishments,
    loadEstablishments,
    loadEstablishmentError,
    isEstablishmentLoading,
  } = useContext(EstablishmentsContext);

  const [selectedAuthority, setSelectedAuthority] = useState<string>("");

  useEffect(() => {
    loadEstablishments(pageNum);
  }, [pageNum]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthority(event.target.value);
  };

  const getAuthorityIDs = () => {
    return Array.from(
      new Set(establishments.map((item) => item.LocalAuthorityBusinessID))
    );
  };

  async function handlePreviousPage() {
    pageNum > 1 && setPageNum(pageNum - 1);
  }

  async function handleNextPage() {
    pageNum < pageCount && setPageNum(pageNum + 1);
  }

  if (loadEstablishmentError) {
    return <div>Error: {loadEstablishmentError.message}</div>;
  } else {
    return (
      <div>
        <div style={tableStyle}>
          <h2>Food Hygiene Ratings</h2>

          {isEstablishmentLoading && <h2>Loading...</h2>}
          {!isEstablishmentLoading && establishments.length === 0 && (
            <h2>No results</h2>
          )}

          {!isEstablishmentLoading && (
            <>
              <CustomDropdown
                onOptionChange={handleOptionChange}
                filteredOptions={getAuthorityIDs()}
                selectedOption={selectedAuthority}
              />

              <EstablishmentsTable selectedAuthority={selectedAuthority} />
            </>
          )}

          <EstablishmentsTableNavigation
            pageNum={pageNum}
            pageCount={pageCount}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        </div>
      </div>
    );
  }
};
