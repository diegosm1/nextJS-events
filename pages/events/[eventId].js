import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { EventSummary } from "../../components/event-detail/EventSummary";
import { EventContent } from "../../components/event-detail/EventContent";
import { EventLogistics } from "../../components/event-detail/EventLogistics";

const EventDetailPage = () => {


    const { query } = useRouter();
    const [data, setdata] = useState({});
    const [active, setactive] = useState(false);


    const eventSelected = getEventById(query.eventId);

    useEffect(() => {

        if (!!eventSelected) {
            setactive(true);
            setdata(eventSelected);
        };


    }, [query])


    if (!active) {
        return <p>Evento no encontrado</p>
    };

    return (
        <>
            <h1>Evento Especifico</h1>
            <EventSummary title={data.title} />

            <EventLogistics date={data.date} address={data.location} image={data.image} imageAlt={data.title} />
            <EventContent>
                <p>{data.description}</p>
            </EventContent>
        </>
    );
}

export default EventDetailPage;