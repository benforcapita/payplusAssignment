import { Request, Response } from 'express';
import db from './database';
import Services from './services';

class Controller {
    requistaregister = async (req: Request, res: Response) => {
        const { identificationNumber, fullName, email, password } = req.body;

        if (!identificationNumber || !fullName || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const services = new Services();
        const regitration =  await services.requistaregisterService(identificationNumber, fullName, email, password).then((data) => {
            return data;
        }
        ).catch((err) => {
            return err;
        });
        res.status(201).json({ id: regitration });
       
    }

    login = (req: Request, res: Response) => {
        const { identificationNumber, password } = req.body;

        if (!identificationNumber || !password) {
            return res.status(400).json({ error: 'Identification number and password are required' });
        }
        const services = new Services();
        services.loginService(identificationNumber, password).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(401).json(err);
        });

    }

    postCustomer = (req: Request, res: Response) => {
        const { userId, fullName, phoneNumber, email, birthdate } = req.body;

        if (!userId || !fullName || !phoneNumber || !email || !birthdate) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const services = new Services();
        services.createCustomer(userId, fullName, phoneNumber, email, birthdate).then((data) => {
            res.status(201).json({ id: data });
        }).catch((err) => {
            res.status(500).json({ error: err.message });
        });

    }

    getCustomersByUserId = (req: Request, res: Response) => {
        const { userId } = req.params;
        const services = new Services();
        services.getCustomersByUserId(userId).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }

    getCustomerDetails = (req: Request, res: Response) => {
        const { userId, customerId } = req.params;
        const services = new Services();
        services.getCustomerDetails(userId, customerId).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        });

    }
}

export default Controller;
