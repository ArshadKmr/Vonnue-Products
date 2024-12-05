import pg from 'pg';
const { Client } = pg; // Destructure to access Client
let connection = null
const connectDB = async (data) => {
    try {
        connection = new Client(data)
        await connection.connect()
        console.log("Connected to database ")
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

export { connectDB, connection }