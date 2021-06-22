import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";

const basics = [
  {
    id: "1",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    budget: "2.4",
  },
];

const BasicTable = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
            <Table
              aria-label="simple table"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontWeight: "500",
                        fontSize: "h6.fontSize",
                      }}
                    >
                      Id
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontWeight: "500",
                        fontSize: "h6.fontSize",
                      }}
                    >
                      Assigned
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontWeight: "500",
                        fontSize: "h6.fontSize",
                      }}
                    >
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontWeight: "500",
                        fontSize: "h6.fontSize",
                      }}
                    >
                      Priority
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontWeight: "500",
                        fontSize: "h6.fontSize",
                      }}
                    >
                      Budget
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {basics.map((basic) => (
                  <TableRow key={basic.name}>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        {basic.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "h6.fontSize",
                              fontWeight: "600",
                            }}
                          >
                            {basic.name}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {basic.post}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "h6.fontSize",
                        }}
                      >
                        {basic.pname}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        sx={{
                          pl: "4px",
                          pr: "4px",
                        }}
                        size="small"
                        label={basic.priority}
                      ></Chip>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          fontSize: "h6.fontSize",
                          fontWeight: "500",
                        }}
                      >
                        ${basic.budget}k
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicTable;
