
export const getAllEvents = async () => {

    const response = await fetch('https://curso-react-bfcaf-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();

    const dataTransformed = [];

    for (const key in data) {
        dataTransformed.push({
            id: key,
            ...data[key]
        })
    };

    return dataTransformed
}

export const getFreatured = async () => {
    const allEvents = await getAllEvents();
    return allEvents.filter(event => event.isFeatured);
}

export const getEventId = async(id) => {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}


export const transform_data = (data) => {
    const transformedData = [];

    for (const key in data) {
        transformedData.push({
            id: key,
            ...data[key]
        })
    }
    return transformedData
};

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const allEvents = await getAllEvents();
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }