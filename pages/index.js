import { useEffect, useState } from "react";
import useSWR from 'swr'

import { EventList } from "../components/events/EventList";
import { getFreatured, transform_data } from "../helpers/helpers-events";



export default function Home(props) {

  const { events } = props


  // const fetcher = (...args) => fetch(...args).then(res => res.json());

  const [featuredEvents, setfeaturedEvents] = useState(events);


  // const { data, error } = useSWR('https://curso-react-bfcaf-default-rtdb.firebaseio.com/events.json', fetcher);




  // if (error) {
  //   return <p>Failed to Loading</p>
  // }

  // if (!featuredEvents) {
  //   return <p>Is Loading...</p>
  // }

  // if (featuredEvents.length === 0) {
  //   return <p>There is not Fetured Events</p>
  // }

  return (
    <div>
      <h1>Pagina Principal</h1>
      <EventList items={featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {

  const eventsFeatured = await getFreatured();


  return {
    props: {
      events: eventsFeatured
    },
    revalidate: 2000
  }
}
