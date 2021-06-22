import React from "react";
import { Box, Button } from "@material-ui/core";
const Buynow = () => {
  //const customizer = useSelector((state)=> state.CustomizerReducer);

  return (
    <Box pb={5} mt={7}>
      <Box>
        <Button
          color="error"
          href="#"
          fullWidth
          disableElevation
          variant="contained"
        >
          Check Pro Version
        </Button>
      </Box>
    </Box>
  );
};

export default Buynow;
