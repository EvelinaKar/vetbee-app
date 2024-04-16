import PetList from "../pages/PetList/PetList";
import BasicLayout from "../layouts/BasicLayout";

export const ROUTES = {
  PET_LIST: "/pet",
};

export const routes = [
  {
    path: ROUTES.PET_LIST,
    Component: PetList,
    Layout: BasicLayout,
  },
];

export const navigationBarLinks = [
  {
    title: "Pets",
    path: ROUTES.PET_LIST,
  },
];
