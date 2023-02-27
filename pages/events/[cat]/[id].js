import SingleEvent from '@/src/components/events/single-event';


const EventPage = ({data}) => {
    return (
        <SingleEvent data={data}/>
    )
}

export default EventPage;



export async function getStaticPaths(){
    const {allEvents} = await import('data/data.json');
    const allPaths = allEvents.map(path=>{
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context){
    
    const eventId = context.params.id;
    const {allEvents} = await import('/data/data.json');
    const data = allEvents.find(ev => ev.id == eventId);

    console.log(context);
    return {
        props: {data:data, event:eventId}
    }
}

