import { getDate } from "@/helpers/handleDate";
import { Events } from "@/types/typings";
import Image from "next/image";
import React from "react";

type Props = {
  event: Events;
};

const getTime = (time: string) => {
  return " • " + time.replace(":", ".");
};

export default function index({ event }: Props) {
  return (
    <div className="Event">
      <div className="Event__image">
        <Image
          alt=""
          src={process.env.API_URL + event.image}
          fill
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="Event__content">
        <p className="Event__content__date">
          {getDate(event.date)}
          {event.time && getTime(event.time)}
        </p>
        <p className="title">{event.title}</p>
        <p className="Event__content__location">{event.location}</p>
      </div>
    </div>
  );
}
