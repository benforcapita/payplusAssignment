import React, { useState, useEffect } from 'react';
import AddCustomerModal from './AddCustomerModal';
import { Customer, DashboardProps } from './interfaces';

/**
 * Dashboard component displays a list of customers and their details.
 * @param userData - Array of user data.
 * @param onLogout - Function to handle logout.
 */
const Dashboard: React.FC<DashboardProps> = ({ userData, onLogout }) => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullName, setFullName] = useState('');
    const [userId, setUserId] = useState<string|number>('');

    useEffect(() => {
        // Fetch the user ID from the userData array
        const id = userData.find(item => item.key === "id")?.value || "";
        setUserId(id);

        // Fetch the customers data from the server
        fetch(`http://localhost:3000/customers/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Customers fetched:', data);
                setCustomers(data);
            })
            .catch((error) => console.error('Error fetching customers:', error));

    }, []);

    useEffect(() => {
        // Set the full name of the user from the userData array
        const userIdItem = userData.find(item => item.key === "full name");
        setFullName(userIdItem ? userIdItem.value as string : "");
    }, []);

    /**
     * Handle click event on a customer row.
     * @param customer - The selected customer object.
     */
    const handleCustomerClick = (customer: Customer) => {
        setSelectedCustomer(customer);
    };

    /**
     * Handle adding a new customer.
     * @param newCustomer - The new customer object to be added.
     */
    const handleAddCustomer = (newCustomer: Customer) => {
        setCustomers([...customers, newCustomer]);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex min-h-screen bg-gray-100 w-full">
                <div className="w-3/4 p-4">
                    <h2 className="text-xl font-bold mb-2">Customer List</h2>
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Phone</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Birthday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr
                                    key={customer.userId}
                                    className="cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleCustomerClick(customer)}
                                >
                                    <td className="py-2 px-4 border-b">{customer.full_name}</td>
                                    <td className="py-2 px-4 border-b">{customer.phone_number}</td>
                                    <td className="py-2 px-4 border-b">{customer.email}</td>
                                    <td className="py-2 px-4 border-b">{customer.birthdate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-1/4 bg-white p-4 shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <span className="text-lg font-bold">Good morning, {fullName}</span>
                            <button
                                className="ml-4 text-blue-500 underline hover:text-blue-700"
                                onClick={onLogout}
                            >
                                Log out
                            </button>
                        </div>
                        <button
                            className="bg-green-600 text-white p-2 rounded-md shadow hover:bg-green-700"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add Customer
                        </button>
                    </div>
                    <h2 className="text-xl font-bold mb-4">Customer Details</h2>
                    {selectedCustomer ? (
                        <div>
                            <p><strong>Name:</strong> {selectedCustomer.fullName}</p>
                            <p><strong>Phone:</strong> {selectedCustomer.phoneNumber}</p>
                            <p><strong>Email:</strong> {selectedCustomer.email}</p>
                            <p><strong>Birthday:</strong> {selectedCustomer.birthdate}</p>
                        </div>
                    ) : (
                        <p>Select a customer to view details</p>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <AddCustomerModal
                    onClose={() => setIsModalOpen(false)}
                    onAddCustomer={handleAddCustomer}
                    userId={Number(userId)}
                />
            )}
        </>
    );
};

export default Dashboard;