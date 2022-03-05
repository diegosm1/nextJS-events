import { EventList } from "../components/events/EventList";
import { DUMMY_EVENTS, getAllEvents, getFeaturedEvents } from "../dummy-data";


export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
       <h1>Pagina Principal</h1>
       <EventList items={featuredEvents} />
    </div>
  )
}
