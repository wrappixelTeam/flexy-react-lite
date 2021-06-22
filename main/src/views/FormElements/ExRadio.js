import React from "react";
import {
  Grid,
  Box,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";

import BaseCard from "../../components/BaseCard/BaseCard";

import {
  successColor,
  dangerColor,
  warningColor,
  infoColor,
} from "../../assets/global/Theme-variable";

const ExRadio = () => {
  // 2
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange2 = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange2,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="Default Radio">
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Radio
                checked={checked}
                onChange={handleChange}
                inputprops={{ "aria-label": "primary checkbox" }}
              />

              <Radio
                disabled
                inputprops={{ "aria-label": "disabled checked checkbox" }}
              />
              <Radio
                color="default"
                inputprops={{ "aria-label": "checkbox with default color" }}
              />
            </Box>
          </BaseCard>
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="Default Colors">
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Radio
                checked={checked}
                onChange={handleChange}
                color="primary"
                inputprops={{ "aria-label": "primary checkbox" }}
              />

              <Radio
                checked={checked}
                onChange={handleChange}
                color="secondary"
                inputprops={{ "aria-label": "primary checkbox" }}
              />

              <Radio
                checked={checked}
                onChange={handleChange}
                inputprops={{ "aria-label": "primary checkbox" }}
                sx={{
                  color: successColor,
                  "&.Mui-checked": {
                    color: successColor,
                  },
                }}
              />

              <Radio
                checked={checked}
                onChange={handleChange}
                inputprops={{ "aria-label": "primary checkbox" }}
                sx={{
                  color: dangerColor,
                  "&.Mui-checked": {
                    color: dangerColor,
                  },
                }}
              />

              <Radio
                checked={checked}
                onChange={handleChange}
                inputprops={{ "aria-label": "primary checkbox" }}
                sx={{
                  color: warningColor,
                  "&.Mui-checked": {
                    color: warningColor,
                  },
                }}
              />

              <Radio
                checked={checked}
                onChange={handleChange2}
                inputprops={{ "aria-label": "primary checkbox" }}
                sx={{
                  color: infoColor,
                  "&.Mui-checked": {
                    color: infoColor,
                  },
                }}
              />
            </Box>
          </BaseCard>
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="Default Sizes">
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Radio {...controlProps("a")} size="small" />
              <Radio {...controlProps("b")} />
              <Radio
                {...controlProps("c")}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
              />
            </Box>
          </BaseCard>
        </Grid>

        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="Default Placement">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="top"
                control={<Radio />}
                label="Top"
                labelPlacement="top"
              />
              <FormControlLabel
                value="start"
                control={<Radio />}
                label="Start"
                labelPlacement="start"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio />}
                label="Bottom"
                labelPlacement="bottom"
              />
              <FormControlLabel value="end" control={<Radio />} label="End" />
            </RadioGroup>
          </BaseCard>
        </Grid>

        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={6}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="Default Color with Label">
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <FormControlLabel
                value="end"
                control={<Radio color="primary" checked />}
                label="Primary"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Radio color="secondary" checked />}
                label="Secondary"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    checked
                    sx={{
                      color: successColor,
                      "&.Mui-checked": {
                        color: successColor,
                      },
                    }}
                  />
                }
                label="Success"
                labelPlacement="end"
              />

              <FormControlLabel
                value="end"
                control={
                  <Radio
                    checked
                    sx={{
                      color: dangerColor,
                      "&.Mui-checked": {
                        color: dangerColor,
                      },
                    }}
                  />
                }
                label="Danger"
                labelPlacement="end"
              />

              <FormControlLabel
                value="end"
                control={
                  <Radio
                    checked
                    sx={{
                      color: warningColor,
                      "&.Mui-checked": {
                        color: warningColor,
                      },
                    }}
                  />
                }
                label="Warning"
                labelPlacement="end"
              />
            </Box>
          </BaseCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExRadio;
