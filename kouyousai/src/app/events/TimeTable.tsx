import React from "react";
import { Grid, Card, CardContent, Typography, Link } from "@mui/material";
import { event } from "./page";

export const TimeTable = ({events}:{events: event[]}) => {
    return (
        <Grid container spacing={2}>
          {events.map((event, index) => (
            <Link href={"#"+event.title}>
              <Grid
                xs={12}
                sm={6}
                md={4}
                key={index}
                // component="div" // 追加：componentを明示的に指定
              >
                <Card >
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      {event.time}
                    </Typography>
                    <Typography variant="h5">{event.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Link>
          ))}
        </Grid>
      );
    };

