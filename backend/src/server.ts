import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import db from './database'; 
import Controller from './controller';
import cors from 'cors';

db.addListener('error', (err) => {
    console.error('Error connecting to database:', err.message);
    }
);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Customer Management System');
});

// Example route to ensure server is running
app.get('/status', (req: Request, res: Response) => {
  res.json({ status: 'Server is running' });
});

app.post('/register', (req: Request, res: Response) => {
  const controller: Controller = new Controller();
  controller.requistaregister(req, res);
});
// User login route
app.post('/login', (req: Request, res: Response) => {
 const controller: Controller = new Controller();
  controller.login(req, res);
});

// Create a customer
app.post('/customers', (req: Request, res: Response) => {
  const controller: Controller = new Controller();
  controller.postCustomer(req, res);
});

// List all customers for a user
app.get('/customers/:userId', (req: Request, res: Response) => {
  const controller: Controller = new Controller();
  controller.getCustomersByUserId(req, res);
});

// Get customer details
app.get('/customers/:userId/:customerId', (req: Request, res: Response) => {
  /**
   * The controller instance for handling server requests.
   */
  const controller: Controller = new Controller();
  controller.getCustomerDetails(req, res);
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});