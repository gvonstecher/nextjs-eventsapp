import React, {useRef, useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

export const SingleEvent = ({data}) => {

    const router = useRouter();
    const inputEmail = useRef();
    const [message, setmessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please introduce a correct email address');
        }


        try {
            const response = await fetch('/api/email-registration',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    email: emailValue,
                    eventId: eventId
                })
            });

            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log('POST',data);
        } catch (e){
            console.log('ERROR',e);
        }
    }

    return (
        <div className='event_single_page'>
            <Image src={data.image} width={500} height={300} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className="email_registration">
                <label>Get registered</label>
                <input ref={inputEmail} type="text" id='email' placeholder='your@email.com' /> 
                <button type='submit'>submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default SingleEvent;
