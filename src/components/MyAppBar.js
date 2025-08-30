import * as React from "react";
import { TitlePortal } from "react-admin";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

// Importe seu componente de logo, se ele existir
// import { Logo } from './Logo'; // Descomente esta linha se você tiver um componente de logo

export const MyAppBar = () => {
  return (
    <AppBar color="primary">
      <TitlePortal />
      <Box sx={{ flex: "1" }} />
      {/* Substitua este texto pelo seu componente de logo
        Exemplo: <Logo />
      */}
      <Box sx={{ flex: "1" }} />
    </AppBar>
  );
};

export default MyAppBar;
