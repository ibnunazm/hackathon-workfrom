import { useState, useEffect } from 'react';
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogBody,
    Card,
    Input,
} from "@material-tailwind/react";
import workformLogo from '../assets/workformLogo.png';

function NavbarLayout() {
    const [openNav, setOpenNav] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegist, setOpenRegist] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const handleOpenRegist = () => {
        setOpenRegist(!openRegist);
    }
    const handleOpenLogin = () => {
        setOpenLogin(!openLogin);
    }
    const handleLoginClick = () => {
        setOpenLogin(true);
    };
    const handleRegisterClick = () => {
        setOpenRegist(true);
    };


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Location
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Use case
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    FAQ
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </Typography>
        </ul>
    );
    return (
        <div className="w-full sticky top-0">
            <Navbar className="z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-16 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <div className='w-[194px] h-[36px]'>
                            <img src={workformLogo} alt="workformLogo" />
                        </div>
                    </Typography>
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-4">
                        <Button
                            size="sm"
                            className="bg-white border border-black hidden lg:inline-block"
                            onClick={handleLoginClick} // Call the function on button click
                        >
                            <span className="text-black">Login</span>
                        </Button>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                            onClick={handleRegisterClick} // Call the function on button click
                        >
                            <span>Register</span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <Button size="sm" fullWidth className="mb-2 border border-black bg-white" onClick={handleLoginClick}>
                        <span className="text-black">Login</span>
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={handleRegisterClick}>
                        <span>Register</span>
                    </Button>
                </Collapse>
            </Navbar>
            <Dialog open={openRegist} handler={handleOpenRegist}>
                <div className="flex justify-between items-center">
                    <IconButton
                        variant="text"
                        color="black"
                        onClick={handleOpenRegist}
                        ripple={false}
                        className="hover:bg-transparent focus:bg-transparent active:bg-transparent z-10"
                        style={{ position: 'absolute', top: '10px', right: '10px' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <DialogBody divider>
                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="blue-gray">
                            Sign Up
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to register.
                        </Typography>
                        <form className="mt-8 mb-2  max-w-screen">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" type='email' label="Name" />
                                <Input size="lg" label="Email" />
                                <Input size="lg" type='tel' label="Telepon" />
                                <Input type="password" size="lg" label="Password" />
                                <Input type="password" size="lg" label="Re-type password" />
                            </div>
                            <Button className="mt-6" fullWidth>
                                Register
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already have an account?{" "}
                                <a href="#" className="font-medium text-gray-900" onClick={handleOpenLogin}>
                                    Sign In
                                </a>
                            </Typography>
                        </form>
                    </Card>
                </DialogBody>
            </Dialog>
            <Dialog open={openLogin} handler={handleOpenLogin}>
                <div className="flex justify-between items-center">
                    <IconButton
                        variant="text"
                        color="black"
                        onClick={handleOpenLogin}
                        ripple={false}
                        className="hover:bg-transparent focus:bg-transparent active:bg-transparent z-10"
                        style={{ position: 'absolute', top: '10px', right: '10px' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <DialogBody divider>
                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="blue-gray">
                            Sign in
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your email and password.
                        </Typography>
                        <form className="mt-8 mb-2  max-w-screen">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Email" />
                                <Input type="password" size="lg" label="Password" />
                            </div>
                            <Button className="mt-6" fullWidth>
                                Login
                            </Button>
                        </form>
                    </Card>
                </DialogBody>
            </Dialog>
        </div>
    );
}
export default NavbarLayout;
