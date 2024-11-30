import { useState } from 'react'
import { TextInput, Button, Card } from 'flowbite-react';

const Signup = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSignUp(formData);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <Card className="max-w-md w-full mx-auto p-6 shadow-md ">
                <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextInput
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextInput
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" gradientDuoTone="greenToBlue">
                        Sign Up
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default Signup