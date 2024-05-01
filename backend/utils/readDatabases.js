async function readDatabases(client){
  try{
    const databases = await client.db().admin().listDatabases();
    const databaseNames = databases.databases.map(db => db.name)
    return databaseNames
  } catch(err) {
    console.error(err)
  }
}

export default readDatabases