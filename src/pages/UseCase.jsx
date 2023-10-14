import { useState, useEffect } from 'react';
import properties1 from '../assets/properties1.png';
import cardBuilding from '../assets/cardBuilding.png';
import cardCapacity from '../assets/cardCapacity.png';
import cardLocation from '../assets/cardLocation.png';
import bca from '../assets/bca.png';
import bri from '../assets/bri.png';
import bni from '../assets/bni.png';
import mandiri from '../assets/mandiri.png';
import detailProperties from '../assets/detailProperties.png';
import dot from '../assets/dot.png';
import { Select, Option, Dialog, IconButton, DialogBody, Card, Typography, Radio } from "@material-tailwind/react";
import { Slider, DatePicker, Input } from 'antd';
import Swal from 'sweetalert2'; // Import SweetAlert

const cardData = [
    {
        title: 'Ivory',
        category: 'Event',
        subCategory: 'Seminar',
        building: 'Yafurni',
        city: 'Medan',
        province: 'North Sumatra',
        capacity: 20,
        price: 1400000,
        duration: 'day',
    },
    {
        title: 'Event Venue 1',
        category: 'Event',
        subCategory: 'Seminar',
        building: 'Grand Hall',
        city: 'Jakarta Pusat',
        province: 'Jakarta',
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



function UseCase() {
    const minPrice = Math.min(...cardData.map((item) => item.price));
    const maxPrice = Math.max(...cardData.map((item) => item.price));
    const [minCapacity, setMinCapacity] = useState(0);
    const [maxCapacity, setMaxCapacity] = useState(Math.max(...cardData.map((item) => item.capacity)));
    const [openBookNow, setOpenBookNow] = useState(false);

    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [selectedDuration, setSelectedDuration] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedCity, setSelectedCity] = useState('all');

    const [filteredCards, setFilteredCards] = useState([]);
    function numberToFormattedString(number) {
        // Use the toLocaleString method to add commas and format the number
        return number.toLocaleString('en-US');
    }
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    useEffect(() => {
        const filtered = cardData.filter((data) => {
            const isPriceWithinRange = data.price >= priceRange[0] && data.price <= priceRange[1];
            const isDurationMatch = selectedDuration === 'all' || data.duration === selectedDuration;
            const isCategoryMatch = selectedCategory === 'all' || data.category === selectedCategory;
            const isCityMatch = selectedCity === 'all' || data.location.includes(selectedCity);
            const isCapacityWithinRange = data.capacity >= minCapacity && data.capacity <= maxCapacity;

            return isPriceWithinRange && isDurationMatch && isCategoryMatch && isCityMatch && isCapacityWithinRange;
        });
        setFilteredCards(filtered);
    }, [selectedDuration, priceRange, selectedCategory, selectedCity, minCapacity, maxCapacity]);

    const [openDetail, setOpenDetail] = useState(false);

    // Function to handle opening and closing the modal
    const handleOpenDetail = () => {
        setOpenDetail(!openDetail);
    };
    const handleOpenBookNow = () => {
        setOpenBookNow(!openBookNow);
    };
    const handleOpenBookNowAlert = () => {
        setOpenBookNow(!openBookNow);

        if (openBookNow) {
            // If the modal is closing, show the success message
            Swal.fire({
                icon: 'success',
                title: 'Booking Successful',
                text: 'Your booking has been confirmed.',
                showConfirmButton: false,
                timer: 2000, // 3 seconds
            });
        }
    };
    return (

        <div className='px-10 py-4'>
            <h1 className='font-[600] text-[38px] mb-14'>Use case</h1>
            <div className='flex gap-5' >
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='font-[600] text-[16px]'>Use Case</p>
                        <Select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e)}
                        >
                            <Option value="all">All use case</Option>
                            <Option value="Event">Event</Option>
                            <Option value="Meeting">Meeting</Option>
                        </Select>

                    </div>
                    <div >
                        <p className='font-[600] text-[16px]'>Duration</p>
                        <Select
                            value={selectedDuration}
                            onChange={(e) => setSelectedDuration(e)}
                        >
                            <Option value="all">All Duration</Option>
                            <Option value="day">Day</Option>
                            <Option value="month">Month</Option>
                            <Option value="year">Year</Option>
                        </Select>
                    </div>
                    <div>
                        <p className='font-[600] text-[16px]'>Location</p>
                        <Select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e)}
                        >
                            <Option value="all">All Location</Option>
                            <Option value="Medan">Medan</Option>
                            <Option value="Jakarta">Jakarta</Option>
                            <Option value="Bandung">Bandung</Option>
                            <Option value="Surabaya">Surabaya</Option>
                            <Option value="Denpasar">Denpasar</Option>
                            <Option value="Makassar">Makassar</Option>
                            <Option value="Palembang">Palembang</Option>
                            <Option value="Balikpapan">Balikpapan</Option>
                            <Option value="Batam">Batam</Option>
                            {/* Add more options for other cities as needed */}
                        </Select>


                    </div>
                    <div>
                        <p className='font-[600] text-[16px]'>Price</p>
                        <Slider
                            range={{
                                draggableTrack: true,
                            }}
                            defaultValue={[minPrice, maxPrice]}
                            value={priceRange}
                            min={minPrice}
                            max={maxPrice}
                            onChange={setPriceRange}
                        />
                        <p>{numberToFormattedString(priceRange[0])} - {numberToFormattedString(priceRange[1])}</p>
                    </div>
                    <div>
                        <p className='font-[600] text-[16px]'>Capacity</p>
                        <Slider
                            range={{
                                draggableTrack: true,
                            }}
                            defaultValue={[minCapacity, maxCapacity]}
                            value={[minCapacity, maxCapacity]}
                            min={0}
                            max={Math.max(...cardData.map((item) => item.capacity))}
                            onChange={(values) => {
                                setMinCapacity(values[0]);
                                setMaxCapacity(values[1]);
                            }}
                        />
                        <p>{minCapacity} - {maxCapacity}</p>
                    </div>

                </div>

                <div className='flex flex-wrap gap-16 h-screen overflow-y-scroll'>
                    {filteredCards.map((data, index) => (
                        <div key={index} className="flex flex-col w-[349px] border border-black rounded-3xl overflow-hidden">
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
                                    <button className='rounded-lg border border-black py-2 w-full' onClick={handleOpenDetail}>
                                        See Details
                                    </button>
                                    <button className='rounded-lg bg-black text-white py-2 w-full' onClick={handleOpenBookNow}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
                                Detail property
                            </Typography>
                            <div className='overflow-y-scroll h-[700px] text-black flex flex-col gap-4 pb-10'>
                                <div>
                                    <img src={detailProperties} alt="detailProperties" />
                                </div>
                                <div>
                                    <h1 className='font-[600] text-[30px]'>Ivory</h1>
                                    <div className="flex font-[500] text-[15px] gap-2">
                                        <div className="flex gap-2">
                                            <div className='w-[16px]'>
                                                <img src={cardBuilding} alt="cardBuilding" />
                                            </div>
                                            <p>Yafurni</p>
                                        </div>
                                        <div>|</div>
                                        <div className="flex gap-2">
                                            <div className='w-[16px]'>
                                                <img src={cardLocation} alt="cardLocation" />
                                            </div>
                                            <p>Medan, North Sumatra</p>
                                        </div>
                                    </div>
                                    <p>Jl. Iskandar Muda No.7, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153</p>
                                </div>
                                <hr />
                                <div>
                                    <h1 className='mb-3 font-[600] text-[16px]'>Room Information</h1>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>78 m<sup>2</sup></p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>20 person</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h1 className='mb-3 font-[600] text-[16px]'>Room Facilities</h1>
                                    <div className='flex flex-col gap-2 flex-wrap h-20'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Air Conditioner</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Desk</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Speaker</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Television</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h1 className='mb-3 font-[600] text-[16px]'>Nearby Facilities</h1>
                                    <div className='flex flex-col gap-2 flex-wrap h-20'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Train (700 m)</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Mall (500 m)</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Bus Stop (100 m)</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-[8px]'>
                                                <img src={dot} alt="dot" />
                                            </div>
                                            <p>Gym (300 m)</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-between px-2 items-center'>
                                    <p className='font-[600] text-[20px]'>Rp. 1,400,000<span className='font-[500] text-[14px]'>/per-day</span></p>
                                    <div>
                                        <button className="py-2 px-10 rounded-md bg-[#AFF78D] text-[18px] font-[500] text-black" onClick={handleOpenBookNow}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </DialogBody>
                </Dialog>
                <Dialog open={openBookNow} handler={handleOpenBookNow}>
                    <div className="flex justify-between items-center">
                        <IconButton
                            variant="text"
                            color="black"
                            onClick={handleOpenBookNow}
                            ripple={false}
                            className="hover-bg-transparent focus-bg-transparent active-bg-transparent z-10"
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
                        <Card color="transparent" shadow={false} className='text-black'>
                            <Typography variant="h4" color="blue-gray">
                                Book properties
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Select payment option and start date
                            </Typography>
                            <div className="flex flex-col gap-2 mt-9">
                                <Radio
                                    name="terms"
                                    label={
                                        <Typography color="blue-gray" className="flex items-center font-medium">
                                            <div className='w-28'>
                                                <div className='w-[80px]'>
                                                    <img src={bca} alt="" />
                                                </div>
                                            </div>
                                            <span>Bank BCA</span>
                                        </Typography>
                                    }
                                />
                                <Radio
                                    name="terms"
                                    label={
                                        <Typography color="blue-gray" className="flex items-center font-medium">
                                            <div className='w-28'>
                                                <div className='w-[80px]'>
                                                    <img src={bni} alt="" />
                                                </div>
                                            </div>
                                            <span>Bank BNI</span>
                                        </Typography>
                                    }
                                />
                                <Radio
                                    name="terms"
                                    label={
                                        <Typography color="blue-gray" className="flex items-center font-medium">
                                            <div className='w-28'>
                                                <div className='w-[100px]'>
                                                    <img src={mandiri} alt="" />
                                                </div>
                                            </div>
                                            <span>Bank Mandiri</span>
                                        </Typography>
                                    }
                                />
                                <Radio
                                    name="terms"
                                    label={
                                        <Typography color="blue-gray" className="flex items-center font-medium">
                                            <div className='w-28'>
                                                <div className='w-[75px]'>
                                                    <img src={bri} alt="" />
                                                </div>
                                            </div>
                                            <span>Bank BRI</span>
                                        </Typography>
                                    }
                                />
                            </div>
                            <div className='flex gap-10 mt-7 ml-4'>
                                <div>
                                    <p className='mb-2'>Start Date</p>
                                    <DatePicker onChange={onChange} />
                                </div>
                                <div>
                                    <p className='mb-2'>Duration</p>
                                    <Input />
                                </div>
                            </div>
                            <button className='bg-[#AFF78D] rounded-lg py-2 mt-7 font-semibold' onClick={handleOpenBookNowAlert}>Confirm</button>
                        </Card>
                    </DialogBody>
                </Dialog>
            </div >
        </div>
    );
}

export default UseCase;
