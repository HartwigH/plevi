import { Events } from "@/types/typings";
import React from "react";
import Event from "@/components/Event";

const fetchEvents = async () => {
  const res = await fetch(`${process.env.API_URL}/v1/events`, {
    next: { revalidate: 3600 },
  });
  const topEvents: Events[] = await res.json();
  return topEvents;
};

export default async function index() {
  const events = await fetchEvents();

  return (
    <div className="Events">
      <h1 className="Events__title title">Muusikasündmused</h1>
      <div className="Events__container">
        {events &&
          events.map((event, index) => <Event event={event} key={index} />)}
      </div>
    </div>
  );
}
