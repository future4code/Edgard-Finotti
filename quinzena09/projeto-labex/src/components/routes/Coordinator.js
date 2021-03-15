export const goToHomePage = (history) => {
    history.push("/");
};
  
export const goToLoginUser = (history) => {
    history.push("/login");
};

export const goToRegisterToTravel = (history) => {
    history.push("/registerToTravel");
}

export const goToRestrictedArea = (history) => {
    history.push("/homeRestrict/");
}

export const goToTravels = (history) => {
    history.push("/travels");
}

export const goToDetailsTravels = (history) => {
    history.push("/detailsTravel");
}
  
// export const goToAboutPage = (history, lingua) => {
// if (lingua === "pt") {
//     history.push("/sobre/pt");
// } else if (lingua === "en") {
//     history.push("/sobre/en");
// }
