import { createContext } from "react";

interface EstablishmentsContextProps {
  establishments: { [key: string]: string }[];
  checkedEstablishments: { [key: string]: { [key: string]: string } };

  checkEstablishment: (
    establishment: { [key: string]: string },
    check: boolean
  ) => void;
  loadEstablishments: (pageNum: number) => void;
  isEstablishmentLoading: boolean;
  loadEstablishmentError?: { message: string; [key: string]: string };
}

const EstablishmentsContext = createContext<EstablishmentsContextProps>({
  establishments: [],
  checkedEstablishments: {},
  checkEstablishment: () => {},
  loadEstablishments: () => {},
  isEstablishmentLoading: false,
});

export default EstablishmentsContext;
export const EstablishmentsContextProvider = EstablishmentsContext.Provider;
