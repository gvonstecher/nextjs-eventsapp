import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const EventsPage = ({data}) => {
  return (
    <div className='events_page'>
				{data.map(ev=>(
						<Link href={`/events/${ev.id}`} passHref key={ev.id}>
							<div className='card'>
								<Image width={500} height={400} alt={ev.title} src={ev.image} />
								<h2>{ev.title}</h2>
								<p>{ev.description}</p>
							</div>
						</Link>
					
				))
				}
        </div>
  )
}
