import { useState } from 'react';
import { message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import properties1 from '../assets/properties1.png';
import cardBuilding from '../assets/cardBuilding.png';
import cardCapacity from '../assets/cardCapacity.png';
import cardLocation from '../assets/cardLocation.png';
import Swal from 'sweetalert2';
import { Dialog, IconButton, DialogBody, Card, Typography, Select, Option, Input, Button, Checkbox } from "@material-tailwind/react";

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const cardData = [
    {
        title: 'Ivory',
        category: 'Event',
        subCategory: 'Seminar',
        building: 'Yafurni',
        city: 'Jakarta Pusat',
        province: 'Jakarta',
        capacity: 20,
        price: 1400000,
        duration: 'day',
    },
    {
        title: 'Event Venue 1',
        category: 'Event',
        subCategory: 'Seminar',
        building: 'Grand Hall',
        city: 'Medan',
        province: 'North Sumatra',
        capacity: 100,
        price: 2500000,
        duration: 'day',
    },
    {
        title: 'Conference Center 2',
        category: 'Meeting',
        subCategory: 'Conference',
        building: 'Mega Plaza',
        city: 'Bandung',
        province: 'West Java',
        capacity: 75,
        price: 1800000,
        duration: 'month',
    },
    {
        title: 'Seminar Space 3',
        category: 'Event',
        subCategory: 'Seminar',
        building: 'Central Building',
        city: 'Surabaya',
        province: 'East Java',
        capacity: 50,
        price: 1500000,
        duration: 'day',
    },
    {
        title: 'Event Hall 4',
        category: 'Meeting',
        subCategory: 'Conference',
        building: 'Expo Center',
        city: 'Denpasar',
        province: 'Bali',
        capacity: 200,
        price: 3000000,
        duration: 'month',
    },
    {
        title: 'Seminar Room 5',
        category: 'Event',
        subCategory: 'Seminar',
        building: 'City Hall',
        city: 'Makassar',
        province: 'South Sulawesi',
        capacity: 30,
        price: 1200000,
        duration: 'day',
    },
    {
        title: 'Event Venue 6',
        category: 'Meeting',
        subCategory: 'Conference',
        building: 'Summit Tower',
        city: 'Palembang',
        province: 'South Sumatra',
        capacity: 60,
        price: 1700000,
        duration: 'month',
    },
    {
        title: 'Seminar Space 7',
        category: 'Event',
        subCategory: 'Seminar',
        building: 'Harbor Plaza',
        city: 'Balikpapan',
        province: 'East Kalimantan',
        capacity: 40,
        price: 1600000,
        duration: 'day',
    },
    {
        title: 'Conference Center 8',
        category: 'Meeting',
        subCategory: 'Conference',
        building: 'Epic Hall',
        city: 'Batam',
        province: 'Riau Islands',
        capacity: 80,
        price: 1900000,
        duration: 'month',
    },
    // Add more card data objects as needed
];

const PropertiesLoggedIn = () => {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    function numberToFormattedString(number) {
        return number.toLocaleString('en-US');
    }
    const seacrhProperty = (e) => {
        setSearchText(e.target.value);
    };
    const [openDetail, setOpenDetail] = useState(false);

    // Function to handle opening and closing the modal
    const handleOpenDetail = () => {
        setOpenDetail(!openDetail);
    };
    const [openAdd, setOpenAdd] = useState(false);

    // Function to handle opening and closing the modal
    const handleOpenAdd = () => {
        setOpenAdd(!openAdd);
    };
    // Filter the cardData based on the searchText
    const filteredCards = cardData.filter((data) =>
        data.title.toLowerCase().includes(searchText.toLowerCase())
    );
    const onDeleteCard = (title) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to delete the card with the title "${title}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete the card here or perform any other action
                // For example, you can filter the cards and update the state to remove the card
                Swal.fire('Deleted!', 'The card has been deleted.', 'success');
            }
        });
    };
    const handleSave = () => {
        // You can add your save logic here.

        // Show a success message using SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Saved Successfully',
            showConfirmButton: false,
            timer: 1500, // Auto-close the alert after 1.5 seconds
        });

        // Close the detail modal
        handleOpenDetail();
    };
    const handleAdd = () => {
        // You can add your save logic here.

        // Show a success message using SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Saved Successfully',
            showConfirmButton: false,
            timer: 1500, // Auto-close the alert after 1.5 seconds
        });

        // Close the detail modal
        handleOpenAdd();
    };
    return (
        <div className='p-10'>
            <div className="flex justify-between">
                <div className='relative flex w-full max-w-[24rem]'>
                    <Input
                        type="text"
                        label="search"
                        value={searchText}
                        onChange={seacrhProperty}
                        className="pr-20"
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                    <Button
                        size="sm"
                        color={searchText ? "gray" : "blue-gray"}
                        disabled={!searchText}
                        className="!absolute right-1 top-1 rounded"
                    >
                        Seacrh
                    </Button>
                </div>
            </div>
            <button className="py-2 px-10 rounded-md bg-[#AFF78D] text-[18px] font-[500] text-black mt-8" onClick={handleOpenAdd}>Add</button>
            <div className='w-screen flex flex-wrap gap-16 h-screen overflow-y-scroll mt-10'>
                {filteredCards.map((data, index) => (
                    <div key={index} className="flex flex-col w-[349px] h-fit border border-black rounded-3xl overflow-hidden">
                        <div>
                            <img src={properties1} alt="properties1" />
                        </div>
                        <div className='p-[16px] pb-6 flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <p className='bg-[#AFF78D] py-1 px-3 rounded-lg'> {data.category}</p>
                                <p className='bg-[#AFF78D] py-1 px-3 rounded-lg'> {data.subCategory}</p>
                            </div>
                            <h1 className='font-[600] text-[22px]'>{data.title}</h1>
                            <div className="flex font-[500] text-[12px] gap-2">
                                <div className="flex gap-2">
                                    <div className='w-[16px]'>
                                        <img src={cardBuilding} alt="cardBuilding" />
                                    </div>
                                    <p>{data.building}</p>
                                </div>
                                <div>|</div>
                                <div className="flex gap-2">
                                    <div className='w-[16px]'>
                                        <img src={cardLocation} alt="cardLocation" />
                                    </div>
                                    <p>{data.city}, {data.province}</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-[16px]'>
                                    <img src={cardCapacity} alt="cardCapacity" />
                                </div>
                                <p className='font-[500] text-[12px]'>{data.capacity} person</p>
                            </div>
                            <p className='font-[600] text-[16px]'>Rp. {numberToFormattedString(data.price)}</p>
                            <div className="flex font-[600] text-[14px] gap-3">
                                <button className='rounded-lg bg-black text-white py-2 w-full' onClick={handleOpenDetail}>Edit</button>
                                <button className='rounded-lg border border-black py-2 w-full' onClick={() => onDeleteCard(data.title)} >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Dialog open={openAdd} handler={handleOpenAdd}>
                <div className="flex justify-between items-center">
                    <IconButton
                        variant="text"
                        color="black"
                        onClick={handleOpenAdd}
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
                    <Card color="transparent" shadow={false} className='font-[400] text-[15px]'>
                        <Typography variant="h4" color="blue-gray" className='pb-5'>
                            Edit property
                        </Typography>
                        <div className='overflow-y-scroll h-[700px] text-black flex flex-col gap-6 p-6 pb-10'>
                            <div>
                                <Select label="Select Functional">
                                    <Option>Presentation</Option>
                                    <Option>Art Exhibition</Option>
                                    <Option>Workshop</Option>
                                    <Option>Product shoot</Option>
                                    <Option>Church</Option>
                                    <Option>Seminar</Option>
                                    <Option>Discussion</Option>
                                    <Option>Wedding ceremony</Option>
                                    <Option>Private Office</Option>
                                    <Option>Award Ceremony</Option>
                                    <Option>Classroom</Option>
                                </Select>
                            </div>
                            <div>
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    ) : (
                                        uploadButton
                                    )}
                                </Upload>
                            </div>
                            <div>
                                <Input label="Name" />
                            </div>
                            <div>
                                <Input type='file' />
                            </div>
                            <div>
                                <Select label="Select Province">
                                    <Option>Jakarta</Option>
                                    <Option>Medan</Option>
                                    <Option>Bandung</Option>
                                    <Option>Surabaya</Option>
                                    <Option>Denpasar</Option>
                                    <Option>Makassar</Option>
                                    <Option>Palembang</Option>
                                    <Option>Balikpapan</Option>
                                    <Option>Batam</Option>
                                </Select>
                            </div>
                            <div>
                                <Select label="Select City">
                                    <Option>Jakarta pusat</Option>
                                    <Option>Jakarta selatan</Option>
                                    <Option>Jakarta barat</Option>
                                    <Option>Jakarta timur</Option>
                                </Select>
                            </div>
                            <div>
                                <Input label="Address" />
                            </div>
                            <div className='flex gap-5'>
                                <Input label="Capacity" />
                                <div className="relative flex w-full max-w-[24rem]">
                                    <Input
                                        type="text"
                                        label="Size"

                                        className="pr-20"
                                        containerProps={{
                                            className: "min-w-0",
                                        }}
                                    />
                                    <Button
                                        size="sm"
                                        color="gray"
                                        disabled='true'
                                        className="!absolute right-1 top-1 rounded"
                                    >
                                        m<sup>2</sup>
                                    </Button>
                                </div>
                            </div>
                            <div className='py-7'>
                                <h1>Room Facilities</h1>
                                <div className='flex flex-col -translate-x-3'>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <p>Air Conditioner</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <p>Speaker</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <p>Desk</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <p>Chair</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <p>Television</p>
                                    </div>
                                </div>
                            </div>
                            <div className='py-7'>
                                <h1>Room Facilities</h1>
                                <div className='flex flex-col -translate-x-3'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox />
                                            <p>Train</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"


                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox />
                                            <p>Bus stop</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"


                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox />
                                            <p>Mall</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"


                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>

                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox />
                                            <p>Gym</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"

                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox />
                                            <p>Hospital</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"

                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between px-2 items-center'>
                                <button className="py-2 px-10 w-full rounded-md bg-[#AFF78D] text-[18px] font-[500] text-black" onClick={handleAdd}>add</button>
                            </div>
                        </div>
                    </Card>
                </DialogBody>
            </Dialog>
            <Dialog open={openDetail} handler={handleOpenDetail}>
                <div className="flex justify-between items-center">
                    <IconButton
                        variant="text"
                        color="black"
                        onClick={handleOpenDetail}
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
                    <Card color="transparent" shadow={false} className='font-[400] text-[15px]'>
                        <Typography variant="h4" color="blue-gray" className='pb-5'>
                            Edit property
                        </Typography>
                        <div className='overflow-y-scroll h-[700px] text-black flex flex-col gap-6 p-6 pb-10'>
                            <div>
                                <Select label="Select Functional" value="Seminar">
                                    <Option>Presentation</Option>
                                    <Option>Art Exhibition</Option>
                                    <Option>Workshop</Option>
                                    <Option>Product shoot</Option>
                                    <Option>Church</Option>
                                    <Option>Seminar</Option>
                                    <Option>Discussion</Option>
                                    <Option>Wedding ceremony</Option>
                                    <Option>Private Office</Option>
                                    <Option>Award Ceremony</Option>
                                    <Option>Classroom</Option>
                                </Select>
                            </div>
                            <div>
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    ) : (
                                        uploadButton
                                    )}
                                </Upload>
                            </div>
                            <div>
                                <Input label="Name" value="Ivory" />
                            </div>
                            <div>
                                <Input type='file' />
                            </div>
                            <div>
                                <Select label="Select Province" value='Jakarta'>
                                    <Option>Jakarta</Option>
                                    <Option>Medan</Option>
                                    <Option>Bandung</Option>
                                    <Option>Surabaya</Option>
                                    <Option>Denpasar</Option>
                                    <Option>Makassar</Option>
                                    <Option>Palembang</Option>
                                    <Option>Balikpapan</Option>
                                    <Option>Batam</Option>
                                </Select>
                            </div>
                            <div>
                                <Select label="Select City" value='Jakarta pusat'>
                                    <Option>Jakarta pusat</Option>
                                    <Option>Jakarta selatan</Option>
                                    <Option>Jakarta barat</Option>
                                    <Option>Jakarta timur</Option>
                                </Select>
                            </div>
                            <div>
                                <Input label="Address" value='jL. Gatot Subroto No. 16' />
                            </div>
                            <div className='flex gap-5'>
                                <Input label="Capacity" value="20" />
                                <div className="relative flex w-full max-w-[24rem]">
                                    <Input
                                        type="text"
                                        label="Size"
                                        value="50"
                                        className="pr-20"
                                        containerProps={{
                                            className: "min-w-0",
                                        }}
                                    />
                                    <Button
                                        size="sm"
                                        color="gray"
                                        disabled='true'
                                        className="!absolute right-1 top-1 rounded"
                                    >
                                        m<sup>2</sup>
                                    </Button>
                                </div>
                            </div>
                            <div className='py-7'>
                                <h1>Room Facilities</h1>
                                <div className='flex flex-col -translate-x-3'>
                                    <div className='flex items-center'>
                                        <Checkbox checked />
                                        <p>Air Conditioner</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox checked />
                                        <p>Speaker</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox checked />
                                        <p>Desk</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <p>Chair</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Checkbox />
                                        <p>Television</p>
                                    </div>
                                </div>
                            </div>
                            <div className='py-7'>
                                <h1>Room Facilities</h1>
                                <div className='flex flex-col -translate-x-3'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox checked />
                                            <p>Train</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"

                                                value="200"
                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox checked />
                                            <p>Bus stop</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"

                                                value="300"
                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox checked />
                                            <p>Mall</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"

                                                value="500"
                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>

                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox />
                                            <p>Gym</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"

                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='flex items-center w-3/4'>
                                            <Checkbox />
                                            <p>Hospital</p>
                                        </div>
                                        <div className="relative flex w-full max-w-[24rem]">
                                            <Input
                                                type="text"

                                                className="pr-20"
                                                containerProps={{
                                                    className: "min-w-0",
                                                }}
                                            />
                                            <Button
                                                size="sm"
                                                color="gray"
                                                disabled='true'
                                                className="!absolute right-1 top-1 rounded"
                                            >
                                                m
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between px-2 items-center'>
                                <button className="py-2 px-10 w-full rounded-md bg-[#AFF78D] text-[18px] font-[500] text-black" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </Card>
                </DialogBody>
            </Dialog>

        </div>
    );
};

export default PropertiesLoggedIn;
