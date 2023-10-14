import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import properties from '../assets/properties.png'
import transaction from '../assets/transaction.png'
import workformLogo from '../assets/workformLogo.png'
import {
    PresentationChartBarIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'Logout',
            text: 'Are you sure you want to log out?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Log Out',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('user'); // Clear the 'user' data from localStorage
                navigate('/');
            }
        });
    };


    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-10 p-4 ">
                <Typography variant="h5" color="blue-gray">
                    <div className="w-[194px] h-[36px]">
                        <img src={workformLogo} alt="workformLogo" />
                    </div>
                </Typography>
            </div>
            <List>
                <NavLink to="/">
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </NavLink>
                <NavLink to="/properties">
                    <ListItem>
                        <ListItemPrefix>
                            <img src={properties} alt="properties" className="h-5 w-5" />
                        </ListItemPrefix>
                        Properties
                    </ListItem>
                </NavLink>
                <NavLink to="/transaction">
                    <ListItem>
                        <ListItemPrefix>
                            <img src={transaction} alt="transaction" className="h-5 w-5" />
                        </ListItemPrefix>
                        Transaction
                    </ListItem>
                </NavLink>
                <ListItem onClick={handleLogout}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}
export default Sidebar