import React, { useState } from "react";
import EstablishmentsContext from "../context/EstablishmentsContext";
import { getEstablishmentRatings } from "../api/ratingsAPI";

type EstablishmentLoaderProps = {
  children: React.ReactNode;
};

export const EstablishmentLoader = (props: EstablishmentLoaderProps) => {
  const [establishments, setEstablishments] = useState<
    { [key: string]: string }[]
  >([]);

  const [checkedEstablishments, setCheckedEstablishments] = useState<{
    [key: string]: { [key: string]: string };
  }>({});

  const checkEstablishment = (
    establishment: { [key: string]: string },
    check: boolean
  ) => {
    if (check) {
      setCheckedEstablishments((prevState) => ({
        ...prevState,
        [establishment.FHRSID]: establishment,
      }));
    } else {
      setCheckedEstablishments((prevState) => {
        const newState = { ...prevState };
        delete newState[establishment.FHRSID];
        return newState;
      });
    }
  };

  const [isEstablishmentLoading, setEstablishmentLoading] =
    useState<boolean>(true);

  const [loadEstablishmentError, setLoadEstablishmentError] = useState<{
    message: string;
    [key: string]: string;
  }>();

  const loadEstablishments = (pageNum: number) => {
    setEstablishmentLoading(true);

    getEstablishmentRatings(pageNum).then(
      (result) => {
        setEstablishmentLoading(false);
        setEstablishments(result?.establishments);
        console.log(result?.establishments);
      },
      (error) => {
        setLoadEstablishmentError(error);
      }
    );
  };

  return (
    <EstablishmentsContext.Provider
      value={{
        establishments,
        checkedEstablishments,
        checkEstablishment,
        loadEstablishments,
        isEstablishmentLoading,
        loadEstablishmentError,
      }}
    >
      {props.children}
    </EstablishmentsContext.Provider>
  );
};
