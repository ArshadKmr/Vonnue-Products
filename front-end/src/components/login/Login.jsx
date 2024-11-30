import { Button, Card, TextInput } from 'flowbite-react';
import { useState } from 'react'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // onLogin(credentials);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <Card className="max-w-md w-full mx-auto p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Log In</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextInput
                        name="email"
                        placeholder="Enter your email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                    <TextInput
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" gradientDuoTone="cyanToBlue">
                        Log In
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default Login