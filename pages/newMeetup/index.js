
import { useRouter } from 'next/router';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { Fragment } from 'react';
import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/newMeetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }); 

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (<Fragment>
    <Head>
    <title>Add Your Meetup</title>
        <meta
          name='description'
          content='Now you can add your own meetup!'
        />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </Fragment>)
}

export default NewMeetupPage;