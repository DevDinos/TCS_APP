import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'sunriseconnectionnextserver.mysql.database.azure.com',
        user: 'SunriseAdmin1',
        password: 'Rattails&more',
        database: 'testdatabase',
        connectionLimit: 10
    });

    return connection;
}