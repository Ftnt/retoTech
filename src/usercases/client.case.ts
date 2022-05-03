import {Client} from '../entities/Client.entities';

function dateRandom(){
  let rand = Math.floor(Math.random()*(18000-9000)+9000)
  let fecha = new Date();
  fecha.setDate(fecha.getDate()+rand)
  return fecha.toISOString().split('T')[0]
}

export const caseCreateClient = async ({name,lastname,age,dateBirth}:any)=>{
  const client = new Client()
    client.name = name;
    client.lastname = lastname;
    client.age = age;
    client.dateBirth = dateBirth;
  await client.save()
  return client
}

export const caseKpiClient = async ()=>{
  const clients = await Client.find()
  const totalClients = clients.length
  const sumAge = clients.reduce((sum,client) => sum + client.age,0)
  const avgAge = sumAge / totalClients
  const sumAgeSquared = clients.reduce((sum,client) => sum + Math.pow(client.age - avgAge,2),0)
  const stdDeviation = Math.sqrt(sumAgeSquared / totalClients).toFixed(2)
  return {
    promedioEdad : Number(avgAge.toFixed(2)),
    desviacionEstandar : Number(stdDeviation)
  }
}

export const caselistClient = async ()=>{
  const clients = await Client.find()
  const addDateDeath = clients.map(client=>{
    return {...client,dateDeath:dateRandom()}
  }
  )
  return addDateDeath
}
