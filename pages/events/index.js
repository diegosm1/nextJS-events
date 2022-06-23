import { useRouter } from "next/router";
import { EventList } from "../../components/events/EventList";
import { EventsSearch } from "../../components/events/EventsSearch";
import { getAllEvents } from "../../helpers/helpers-events";



function Events(props) {

    const router = useRouter();

    const allEvents = props.events;


    const findEvent = (year, month) => {
        //navegacion automatica
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);
    }

    return (
        <>
            <h1>Pagina de Eventos</h1>
            <EventsSearch onSearch={findEvent} />
            <EventList items={allEvents} />
        </>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 60
    }

}

export default Events;