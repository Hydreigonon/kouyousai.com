import { EventItem } from "./EventModal";
import { TimeTable } from "./TimeTable"
import eventList from "./eventList.json";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export type event = {
  title: string,
  image: string,
  time: string,
  description: string,
};

export default function Events() {

  const list: event[] = eventList.events;

  return (
    <>
      <div>
        <h1 className="pageTitle">
          イベント一覧
        </h1>
      </div>
      <TimeTable events={list} />
      {list.map(event => (
        <>
        <div key={event.title}>
          <EventItem
            title={event.title}
            imagePath={"/event_images/" + event.image}
            time={event.time}
            description={event.description}
            />
        </div>
        </>
      ))}
    </>
  );
}
