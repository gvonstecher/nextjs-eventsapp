import { EventsPage } from '@/src/components/events/events-page';

const Events = ({data}) => {
    return (
        <EventsPage data={data}/>
    )
}

export default Events

//cargo la data del lado de cliente
export async function getStaticProps(){
	//uso sintaxis desestructurada solo traigo events_categories y no todo
	const {events_categories} = await import('/data/data.json');

	return {
		props: {
			data:events_categories,
		}
	};
}
