import { getDate } from "@/helpers/handleDate";
import { Events } from "@/types/typings";
import Image from "next/image";
import React from "react";

const fetchTopEvents = async () => {
  const res = await fetch(`${process.env.API_URL}/v1/events/top`, {
    next: { revalidate: 3600 },
  });
  const topEvents: Events[] = await res.json();
  return topEvents;
};

export default async function index() {
  const topEvents = await fetchTopEvents();

  return (
    <div className="TopEvents">
      <div className="TopEvents__container">
        <div className="TopEvents__container__top">
          <h1 className="TopEvents__container__top__title title">Müügi top</h1>
          <div className="TopEvents__container__top__navigation">
            <p className="TopEvents__container__top__navigation__position">
              1 / 2
            </p>
            <span className="TopEvents__container__top__navigation__arrow-left" />
            <span className="TopEvents__container__top__navigation__arrow-right" />
          </div>
        </div>
        <div className="TopEvents__container__bottom">
          {topEvents &&
            topEvents.map((event, index) => (
              <div
                key={index}
                className="TopEvents__container__bottom__event"
                data-index={index + 1}
              >
                <div className="TopEvents__container__bottom__event__image">
                  <Image
                    alt=""
                    src={process.env.API_URL + event.image}
                    fill
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
                <p className="TopEvents__container__bottom__event__date">
                  {getDate(event.date)}
                </p>
                <p className="title">{event.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
