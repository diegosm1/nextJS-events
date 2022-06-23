import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ErrorAlert from "../../components/events/ErrorAlert";
import { EventList } from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import { Button } from "../../components/ui/Button";
import { getFilteredEvents, transformPath } from '../../helpers/helpers-events'

function FilteredEventsPage(props) {

    const { events } = props


    const [eventsFiltered, seteventsFiltered] = useState(events)

    const { query } = useRouter();

    const [queryPath, setqueryPath] = useState({})

    // const pathw = query.slugEvent;

    // const eventsFiltered = getFilteredEvents(queryPath);


    // useEffect(() => {
    //     if (!!pathw) {

    //         const path = transformPath(pathw)

    //         setqueryPath({
    //             year: path[0],
    //             month: path[1]
    //         })
    //     }
    // }, [query, pathw])

    // if (!pathw) {
    //     return <p className="center bg">Loading...</p>
    // }

    // if (isNaN(queryPath.year) || isNaN(queryPath.month) || queryPath.year > 2030 || queryPath.year < 2021 || queryPath.month < 1 || queryPath.month > 12) {

    //     return (
    //         <>
    //             <ErrorAlert>
    //                 <p>La ruta no Existe</p>
    //                 <Button link='/events' >Volver a Eventos</Button>
    //             </ErrorAlert>
    //         </>
    //     )
    // }


    // if (eventsFiltered.length === 0) {
    //     return (
    //         <>
    //             <ErrorAlert>
    //                 <p>No hay Eventos en esta Fecha</p>
    //                 <Button link='/events'>Show All Events</Button>
    //             </ErrorAlert>
    //         </>
    //     )
    // }

    const date = new Date(queryPath.year, queryPath.month - 1);

    return (
        <>
            <h1>Eventos Filtrados</h1>
            <ResultsTitle date={date} />
            <EventList items={eventsFiltered} /> 
        </>
    );
}
//para obtener dentro de cada requisicion al servidor la data
export async function getServerSideProps(context) {
    const { params } = context;

    const filterData = params.slugEvent;

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return {
            props: { hasError: true },
            notFound: true,
            // redirect: {
            //     destination: '/error'
            // }
        };
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    return {
        props: {
            events: filteredEvents
        }
    }
}

export default FilteredEventsPage;