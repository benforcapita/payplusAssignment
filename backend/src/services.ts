import db from "./database";

class Services {

    requistaregisterService = async (identificationNumber: any, fullName: any, email: any, password: any): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const query = `INSERT INTO users (identification_number, full_name, email, password) VALUES (?, ?, ?, ?)`;

            db.run(query, [identificationNumber, fullName, email, password], function (err) {
                if (err) {
                    reject(JSON.stringify({ error: err.message }));
                } else {
                    resolve(JSON.stringify({ id: this.lastID }));
                }
            });
        });
    }

    loginService = async (identificationNumber: any, password: any): Promise<string> => {
        return new Promise<string>((resolve, reject) => {

        const query = `SELECT * FROM users WHERE identification_number = ? AND password = ?`;

        db.get(query, [identificationNumber, password], (err, row) => {
            if (err) {
                reject(JSON.stringify({ error: err.message }));
            }
            if (row) {
                resolve(JSON.stringify({  user: row }));
            } else {
                reject(JSON.stringify({ error:'Invalid credentials' }));
            }
        });
    }); 
}

 createCustomer = (userId: string, fullName: string, phoneNumber: string, email: string, birthdate: string): Promise<number> => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO customers (user_id, full_name, phone_number, email, birthdate) VALUES (?, ?, ?, ?, ?)`;

        db.run(query, [userId, fullName, phoneNumber, email, birthdate], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

getCustomersByUserId = (userId: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM customers WHERE user_id = ?`;

        db.all(query, [userId], (err, rows) => {
            if (err) {
                reject({ error: err.message });
            }
            resolve(rows);
        });
    });
};

 getCustomerDetails = (userId: string, customerId: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM customers WHERE user_id = ? AND id = ?`;

        db.get(query, [userId, customerId], (err, row) => {
            if (err) {
                reject({ error: err.message });
            }
            if (row) {
                resolve(row);
            } else {
                reject({ error: 'Customer not found' });
            }
        });
    });
};

}



export default Services;