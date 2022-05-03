import 'reflect-metadata';
import app from './lib/app';
import {AppDataSource} from './lib/db';

async function main () {
  try {
    AppDataSource.initialize();
    console.log('Database initialized');
    app.listen(3001,()=>{
      console.log('Server is running on port ',3001);
    })
  } catch (error) {
    console.log(error);
  }

}

main();