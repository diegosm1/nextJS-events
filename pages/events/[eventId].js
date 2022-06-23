import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {getAllEvents, getEventId, getFreatured} from '../../helpers/helpers-events'
import { EventSummary } from "../../components/event-detail/EventSummary";
import { EventContent } from "../../components/event-detail/EventContent";
import { EventLogistics } from "../../components/event-detail/EventLogistics";

const EventDetailPage = (props) => {


   
    const [data, setdata] = useState(props.event);


    

    // useEffect(() => {

    //     if (!!eventSelected) {
    //         setactive(true);
    //         setdata(eventSelected);
    //     };


    // }, [eventSelected])


    // if (!active) {
    //     return <p>Evento no encontrado</p>
    // };

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


export async function getStaticProps(context) {

    const eventId = context.params.eventId;
    const eventSelected = await getEventId(eventId);
    return {
        props: {
            event: eventSelected
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {

    const events =  await getFreatured();

    const paths = events.map(event => ({params: {eventId: event.id}}))
    return {
        paths: paths,
        fallback: true
    }
}

export default EventDetailPage;