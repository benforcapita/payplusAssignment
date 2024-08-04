
export interface Customer {
    userId: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    birthdate: string;
}
export interface DashboardProps {
    userData: { key: string; value: string | number; }[];

    onLogout: () => void;
}
export interface LoginProps {
    onLoginSuccess: (userData: { key: string; value: string | number; }[]) => void;
    onNavigateToRegister: () => void;
}
export interface RegisterProps {
    onRegisterSuccess: () => void; // Callback for successful registration
    onNavigateToLogin: () => void; // Callback to navigate to the login page
}
export interface AddCustomerModalProps {
    onClose: () => void;
    onAddCustomer: (customer: Customer) => void;
    userId: number;
}

