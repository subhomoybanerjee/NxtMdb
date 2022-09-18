
import NewMeetupForm from "../components/meetups/NewMeetupForm"
import router, { useRouter } from 'next/router'
import Head from "next/head"


function NewMeetupPage() {

    const router = useRouter()

    async function onAddMeetupHandler(enteredMeetUpData) {
        //console.log(enteredMeetUpData)

        const response = await fetch('./api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)

        router.push('/')



    }

    return (

        <>
            <Head>
                <title>naya add crow</title>
                <meta
                    name="dusra add"
                    content="add crow aur"
                />
            </Head>

            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>


    )
}

export default NewMeetupPage