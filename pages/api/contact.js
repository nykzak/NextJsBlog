import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '')
        {
            res.status(422).json({ message: 'Invalid input.'});
            return;
        }

        const newMessage = {
            email,
            name,
            message
        };

        let client;
          //mongodb+srv://<username>:<password>@cluster0.cd5dk04.mongodb.net/?retryWrites=true&w=majority
        const connectionString = 'mongodb+srv://vercel-admin-user:L1g9cDyqz3hhkrkA@cluster0.cd5dk04.mongodb.net/?retryWrites=true&w=majority';

        try {
        client = await MongoClient.connect(connectionString);
        } catch(err) {
            res.status(500).json({message: 'Could not connect to database.'});
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
            } catch(err){
                client.close();
                res.status(500).json({ message: 'Storing message failed!' });
                return;
            }

            client.close();

            res.status(201).json({ message: 'Success', message: newMessage });
        }
}

export default handler;