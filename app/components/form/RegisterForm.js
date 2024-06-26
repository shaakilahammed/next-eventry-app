import { createUser } from '@/actions/user';

const RegisterForm = () => {
    return (
        <form className="login-form" action={createUser}>
            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone" required />
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <input
                    className="min-h-16"
                    type="text"
                    name="bio"
                    id="bio"
                    required
                />
            </div>

            <button
                type="submit"
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
