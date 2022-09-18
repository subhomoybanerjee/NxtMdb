import MeetUpDetail from "../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from 'mongodb'
import Head from "next/head";

function MeetUpDetails(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta 
                    name='ye wala'
                    content='hueuguee'/>
            </Head>
            <MeetUpDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>

    )
}

export async function getStaticPaths() {

    const client = await MongoClient.connect(
        'mongodb+srv://moy:1234@nextjs.ilt3hfj.mongodb.net/?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('yay')
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    client.close()


    return {
        fallback: 'blocking',
        paths: meetups.map(x => ({
            params: {
                meetupId: x._id.toString()
            },
        })
        )
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId

    const client = await MongoClient.connect(
        'mongodb+srv://moy:1234@nextjs.ilt3hfj.mongodb.net/?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('yay')
    const SelectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })

    client.close()


    return {
        props: {
            meetupData: {
                id: SelectedMeetup._id.toString(),
                title: SelectedMeetup.title,
                address: SelectedMeetup.address,
                image: SelectedMeetup.image,
                description: SelectedMeetup.description
            }
        }
    }
}

export default MeetUpDetails

