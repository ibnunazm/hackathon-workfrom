import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { LoginUser, reset, registPost } from '../features/authSlice';
import { Alert } from 'antd';
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
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    PowerIcon,
}
    from "@heroicons/react/24/outline";

const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];
import workformLogo from '../assets/workformLogo.png';

function ProfileMenu({ onSignOut }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={() => {
                                if (label === 'Sign Out') {
                                    onSignOut(); // Call the onSignOut prop
                                }
                                closeMenu();
                            }}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}


function NavbarLayout() {
    const [openNav, setOpenNav] = useState(false);

    const [openLogin, setOpenLogin] = useState(false);
    const [openRegist, setOpenRegist] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const { isSuccess, isError, user } = useSelector(
        (state) => state.auth
    );
    console.log(isSuccess);
    const [userData, setUserData] = useState();
    useEffect(() => {
        if (user) {
            setUserData(user)
            localStorage.setItem('user', user);
        }
    }, [user])


    const logout = () => {
        setUserData(null)
        localStorage.setItem('user', null);
    }
    const registSubmit = (e) => {
        e.preventDefault();
        dispatch(registPost({ name, email, phoneNumber, password, confirmPassword }));
    };
    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const handleOpenRegist = () => {
        dispatch(reset());
        setOpenRegist(!openRegist);
    }
    const handleOpenLogin = () => {
        dispatch(reset());
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
                <NavLink to="/useCase">
                    <a href="#" className="flex items-center">
                        Use case
                    </a>
                </NavLink>
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
        <div className="w-full sticky top-0 z-40">
            <Navbar className="z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-16 lg:py-4">
                <div className='flex'>
                    <div className=" w-full flex items-center justify-between text-blue-gray-900">
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
                        <div className="flex items-center gap-4 ">
                            {userData === null || userData === undefined ? (
                                <>
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
                                </>
                            ) : (
                                <>
                                    <Button
                                        size="sm"
                                        className="bg-white border border-black hidden"
                                        onClick={handleLoginClick} // Call the function on button click
                                    >
                                        <span className="text-black">Login</span>
                                    </Button>
                                    <Button
                                        variant="gradient"
                                        size="sm"
                                        className="hidden"
                                        onClick={handleRegisterClick} // Call the function on button click
                                    >
                                        <span>Register</span>
                                    </Button>
                                </>
                            )}
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
                    {userData === null || userData === undefined ? (
                        <div className="hidden"><ProfileMenu onSignOut={logout} /></div>
                    ) : (
                        <ProfileMenu onSignOut={logout} />
                    )}
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
                        {isSuccess === true ? (
                            <div>
                                <Alert message="Success" type="success" showIcon />
                            </div>
                        ) : (
                            <></>
                        )}
                        {isError === true ? (
                            <div>
                                <Alert message="Error" type="error" showIcon />
                            </div>
                        ) : (
                            <></>
                        )}
                        <form className="mt-8 mb-2  max-w-screen" onSubmit={registSubmit}>
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Name" onChange={(e) => setName(e.target.value)} required />
                                <Input size="lg" type='email' label="Email" onChange={(e) => setEmail(e.target.value)} required />
                                <Input size="lg" type='tel' label="Telepon" onChange={(e) => setPhoneNumber(e.target.value)} required />
                                <Input type="password" size="lg" label="Password" onChange={(e) => setPassword(e.target.value)} required />
                                <Input type="password" size="lg" label="Re-type password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                            <Button className="mt-6" fullWidth type='submit' >
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
                        {isSuccess === true ? (
                            <div>
                                <Alert message="Success" type="success" showIcon />
                            </div>
                        ) : (
                            <></>
                        )}
                        {isError === true ? (
                            <div>
                                <Alert message="Error" type="error" showIcon />
                            </div>
                        ) : (
                            <></>
                        )}
                        <form className="mt-8 mb-2  max-w-screen" onSubmit={loginSubmit}>
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Email" onChange={(e) => setEmail(e.target.value)} required />
                                <Input type="password" size="lg" label="Password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <Button className="mt-6" fullWidth type='submit'>
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
