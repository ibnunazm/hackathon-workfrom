import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    HomeIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import '../index.css';
import populer from "../assets/populer.png"
import eventCat from "../assets/eventCat.png"
import officeCat from "../assets/officeCat.png"
import meetingCat from "../assets/meetingCat.png"
import photoshootCat from "../assets/photoshootCat.png"
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/partner2.png"
import partner3 from "../assets/partner3.png"
import partner4 from "../assets/partner4.png"
import dashboardImage from "../assets/dashboardImage.png"
import ForCustomer from "../assets/ForCustomer.png"
import ForOwner from "../assets/ForOwner.png"


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function Dashboard() {
    const [open, setOpen] = React.useState(0);
    console.log(localStorage.getItem('user'));
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const data = [
        {
            label: "For Customers",
            value: "profile",
            icon: UserCircleIcon,
            tittle: `Space Terbaik untuk Semua Tim dan Pekerjaan Anda`,
            desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
            buttonText: `Book Now`,
            img: ForCustomer
        },
        {
            label: "For Building Owner",
            value: "dashboard",
            icon: HomeIcon,
            tittle: `Tingkatkan Tenants Office Tower bersama Kami`,
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people
            who are like offended by it, it doesn't matter.`,
            buttonText: `Start Now`,
            img: ForOwner
        },
    ];
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-black px-[20px] lg:px-[80px] py-[60px] gap-14">
                <div className="text-white lg:w-1/2 flex flex-col gap-9">
                    <h3 className="text-[20px] font-[600]">Office & Coworking Space</h3>
                    <h1 className="text-[50px] font-[700]">Temukan Ruangan <br /> untuk <span className="text-[#AFF78D]">Setiap Pekerjaan</span></h1>
                    <p className="text-[20px] font-[500]">Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan kebutuhan Anda,
                        kami akan membantu Anda mencari ruangan kerja yang sesuai dengan anggaran dan kebutuhan Anda.
                        Temukan ruangan kerja Anda sekarang dan tingkatkan produktivitas kerja Anda!</p>
                    <div>
                        <button className="py-2 px-10 rounded-md bg-[#AFF78D] text-[18px] font-[500] text-black">Book Now</button>
                    </div>
                </div>
                <div className=" lg:w-1/2">
                    <img src={dashboardImage} alt="dashboardImage" />
                </div>
            </div>
            <div id='tabs' className='px-[20px] lg:px-[80px] py-[60px] mt-36'>
                <Tabs value="dashboard">
                    <TabsHeader className='lg:w-1/2 mx-auto'>
                        {data.map(({ label, value, icon }) => (
                            <Tab key={value} value={value}>
                                <div className="flex items-center gap-2">
                                    {React.createElement(icon, { className: "w-5 h-5" })}
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, tittle, desc, buttonText, img }) => (
                            <TabPanel key={value} value={value}>
                                <div className='flex flex-col lg:flex-row text-black gap-20 items-center mt-20'>
                                    <div className='lg:w-1/2'>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-10 lg:w-1/2'>
                                        <h1 className="text-[32px] font-[700]">{tittle}</h1>
                                        <p className="text-[16px] font-[400]">{desc}</p>
                                        <div>
                                            <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-10 rounded-md'>{buttonText}</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
            <div className='px-[20px] lg:px-[80px] py-[60px] mt-10'>
                <h1 className='text-center text-[50px] font-[600] mb-24'>Partner Kami</h1>
                <div className='flex justify-between items-center px-[8%] md:gap-10 sm:gap-10'>
                    <div className='w-[160px] '>
                        <img src={partner1} alt="partner1" />
                    </div>
                    <div className='w-[181px] '>
                        <img src={partner2} alt="partner2" />
                    </div>
                    <div className='w-[212px] '>
                        <img src={partner3} alt="partner3" />
                    </div>
                    <div className='w-[219px] '>
                        <img src={partner4} alt="partner4" />
                    </div>
                </div>
            </div>
            <div className='bg-black px-[80px] py-[60px] mt-10'>
                <div>
                    <h1 className='my-16 text-[50px] font-[700] text-center text-white'>Sesuaikan dengan <span className='text-[#AFF78D]'>Kebutuhan</span></h1>
                    <div className="flex md:flex-row sm:flex-col justify-between gap-10">
                        <div className="flex flex-col">
                            <div>
                                <img src={eventCat} alt="eventCat" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <h2 className='text-[20px] font-[600]'>Event</h2>
                                <p>Ruang serbaguna untuk berbagai acara, memberikan fleksibilitas dalam merayakan momen spesial.</p>
                                <div>
                                    <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-6 rounded-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <img src={meetingCat} alt="meetingCat" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <h2 className='text-[20px] font-[600]'>Meeting</h2>
                                <p>Ruang rapat nyaman, menciptakan suasana ideal untuk pertemuan bisnis yang efektif dan produktif.</p>
                                <div>
                                    <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-6 rounded-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <img src={photoshootCat} alt="photoshootCat" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <h2 className='text-[20px] font-[600]'>Photoshoot</h2>
                                <p>Ruang foto dengan design profesional, memberikan pengalaman berkesan untuk sesi pemotretan.</p>
                                <div>
                                    <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-6 rounded-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <img src={officeCat} alt="officeCat" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <h2 className='text-[20px] font-[600]'>Office</h2>
                                <p>Ruang kantor modern dan fungsional, pilihan tepat untuk menjalankan bisnis dengan efisiensi dan kinerja optimal.</p>
                                <div>
                                    <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-6 rounded-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='my-16 text-[50px] font-[700] text-center text-[#AFF78D]'>
                        <i>Space</i> Terpopuler <span className='text-white'>Saat Ini</span>
                    </h1>
                    <div className="flex md:flex-row sm:flex-col gap-12">
                        <div className='rounded-3xl  overflow-hidden'>
                            <div>
                                <img src={populer} alt="populer" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <div className="flex">
                                    <h1>The 101</h1>
                                    <span>|</span>
                                    <p>Jakarta</p>
                                </div>
                                <p>Kawasan, Jl. Mega Kuningan Barat Jl. DR. Ide Anak Agung Gde Agung No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, 12950</p>
                                <div>
                                    <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-6 rounded-md'>Lihat detail</button>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-3xl  overflow-hidden'>
                            <div>
                                <img src={populer} alt="populer" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <div className="flex">
                                    <h1>The 101</h1>
                                    <span>|</span>
                                    <p>Jakarta</p>
                                </div>
                                <p>Kawasan, Jl. Mega Kuningan Barat Jl. DR. Ide Anak Agung Gde Agung No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, 12950</p>
                                <div>
                                    <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-6 rounded-md'>Lihat detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-16'>
                        <button className='text-[18px] font-[500] bg-[#AFF78D] text-black py-2 px-10 rounded-md'>Lihat semua <i>space</i></button>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-col mx-auto lg:flex-row justify-between gap-10 px-[20px] lg:px-[80px] py-[60px] mt-10">
                <h1 className='text-black text-[50px] font-[600]'> Frequently <br /> Asked <br /> questions</h1>
                <div className='lg:w-2/3'>
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            <div className='text-black text-[30px] font-[600]'>Apa itu Workfrom ?</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className='text-black text-[16px] font-[300]'>
                                Workfrom merupakan sebuah platform yang menghubungkan penyewa dengan ruang kantor yang tepat di mana saja di berbagai lokasi. Kami dapat membantu menemukan kebutuhan penyewa dan pemilik gedung.
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            <div className='text-black text-[30px] font-[600]'>Fasilitas apa saja yang ditawarkan ?</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className='text-black text-[16px] font-[300]'>
                                Fasilitas mencakup akses internet berkecepatan tinggi, minuman gratis, area hiburan dan area lounge, serta kesempatan untuk memperluas networking.
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            <div className='text-black text-[30px] font-[600]'>Apakah buka di akhir pekan dan hari libur ?</div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className='text-black text-[16px] font-[300]'>
                                Private Office tutup selama akhir pekan dan hari libur. Tetapi kedepannya bisa terdapat perubahan pada jam operasional kami.
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Dashboard