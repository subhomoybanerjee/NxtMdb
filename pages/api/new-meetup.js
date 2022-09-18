import { MongoClient } from 'mongodb'


async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        const { title, image, address, description } = data

        const client = await MongoClient.connect(
            'mongodb+srv://moy:1234@nextjs.ilt3hfj.mongodb.net/?retryWrites=true&w=majority'
        )

        const db = client.db()
        const meetupsCollection = db.collection('yay')
        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({
            message:'no error'
        })
    }

}

export default handler