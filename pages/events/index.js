import { useRouter } from "next/router";
import { EventList } from "../../components/events/EventList";
import { EventsSearch } from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";



function events() {

    const router =  useRouter();

    const allEvents = getAllEvents();


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

export default events;