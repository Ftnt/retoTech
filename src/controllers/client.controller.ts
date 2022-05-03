import {Request,Response} from 'express'
import {caseCreateClient,caseKpiClient,caselistClient} from '../usercases/client.case'

export const createClient = async (req: Request, res: Response) => {

  try {
    const {name,lastname,age,dateBirth} = req.body;
    const client = await caseCreateClient({name,lastname,age,dateBirth});
    return res.status(201).json({status:"sucess",data:client});

  } catch (error) {

    if(error instanceof Error){
      return res.status(500).json({
        message:'Error creating client',
        error:error.message
      })
    }

  }

}

export const kpiClient = async (req: Request, res: Response) => {

  try {
    const kpi = await caseKpiClient();
    return res.status(200).json({
      status : 'success',
      data : kpi
    })
  } catch (error) {
    if(error instanceof Error){
      return res.status(500).json({
        message:'Error creating client',
        error:error.message
      })
    }
  }
}

export const listClient = async (req: Request, res: Response) => {
    try {
      const clients = await caselistClient();
      return res.status(200).json({
        status : 'success',
        data : clients
      });

    } catch (error) {
      if(error instanceof Error){
        return res.status(500).json({
          message:'Error creating client',
          error:error.message
        })
      }
    }
}