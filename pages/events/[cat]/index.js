import CatEvent from '@/src/components/events/catEvent';
import Image from 'next/image'
import Link from 'next/link';

const EventsInCityPage = ({data, pageName}) => {
    return (
        <CatEvent data={data} pageName={pageName}/>
    )
}

export default EventsInCityPage;


// eslint-disable-next-line @next/next/no-typos
export async function getStaticPaths(){

    const {events_categories} = await import ('/data/data.json');
    const allPaths = events_categories.map(ev=>{
        return {
            params: {
                cat: ev.id.toString(),
            }
        }
    });

    return {
        //cada elemento del array es una url
        paths: allPaths,
        fallback: false
    }
}


export async function getStaticProps(context){

    //extraigo el slug de la ciudad en la que estoy parado ahora mismo
	const cityId = context.params.cat;
    const {allEvents} = await import('/data/data.json');

    const data = allEvents.filter(ev => ev.city == cityId);

	return {props: {data:data, pageName: cityId} };
}
