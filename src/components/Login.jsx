import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='grid'>
            <div className='col-10 col-offset-2'>
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Welcome to Team Onboarding</div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText type="text" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText type="password" className="w-full mb-3" />

                        <Link to={"/home"}><Button label="Sign In" icon="pi pi-user" className="w-full" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;