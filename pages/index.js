import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

// const dum = [
//     {
//         id: 'm1',
//         title: 'pehla',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'ghar',
//         description: 'nice jagah'
//     }
//     ,
//     {
//         id: 'm2',
//         title: 'doosla',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'yaa',
//         description: 'bye'
//     }
// ]

function HomePage(props) {
    return (
        <>
            <Head>
                <title>moy meets</title>
                <meta 
                    name='description'
                    content='lol nhi hoga terese'/>
            </Head>
            <MeetupList meetups={props.meetups}/> 
        </>

    )
}

export async function getStaticProps() {

    const client = await MongoClient.connect(
        'mongodb+srv://moy:1234@nextjs.ilt3hfj.mongodb.net/?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('yay')
    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map(x => ({
                title: x.title,
                address: x.address,
                image: x.image,
                id: x._id.toString()
            }))
        },
        revalidate: 1
    }

}

// export async function getServerSideProps(context) {

//     const req=context.req
//     const res=context.res

//     return {
//         props: {
//             meetups: dum
//         }
//     }
// }
export default HomePage