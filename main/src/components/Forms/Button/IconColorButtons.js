import React from "react";

import { Box, IconButton } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";
import {
  successColor,
  dangerColor,
  warningColor,
} from "../../../assets/global/Theme-variable";

import BaseCard from "../../BaseCard/BaseCard";

const IconColorButtons = () => {
  return (
    <BaseCard
      title="Color Buttons"
      chiptitle="Icon Buttons"
      variant="outlined"
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          variant="contained"
          color="primary"
          sx={{
            mr: 1,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          color="secondary"
          sx={{
            mr: 1,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          sx={{
            mr: 1,
            color: dangerColor,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          sx={{
            mr: 1,
            color: warningColor,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          color="success"
          sx={{
            mr: 1,
            color: successColor,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
      </Box>
    </BaseCard>
  );
};

export { IconColorButtons };
