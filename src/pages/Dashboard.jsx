import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import '../index.css';
import why1 from "../assets/why1.png"
import why2 from "../assets/why2.png"
import why3 from "../assets/why3.png"
import okupansi1 from "../assets/okupansi1.png"
import okupansi2 from "../assets/okupansi2.png"
import okupansi3 from "../assets/okupansi3.png"
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/partner2.png"
import partner3 from "../assets/partner3.png"
import partner4 from "../assets/partner4.png"
import dashboardImage from "../assets/dashboardImage.png"


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

    return (
        <>
            <div className="flex flex-col lg:flex-row bg-black px-[20px] lg:px-[80px] py-[60px] gap-14">
                <div className="text-white lg:w-1/2 flex flex-col gap-9">
                    <h3 className="text-[20px] font-[600]">Digital Marketing Agency untuk Office Tower</h3>
                    <h1 className="text-[50px] font-[700]"><span className="text-[#AFF78D]">Tingkatkan Tenants</span> <br /> <span className="text-[#AFF78D]">Office Tower</span> Sekarang <br /> Juga Bersama Kami</h1>
                    <p className="text-[20px] font-[500]">Tidak ada lagi lantai dan ruang kosong di office tower anda dengan solusi strategi marketing yang tepat. Dengan menggunakan digital marketing berbasis data yang efektif, Workfrom siap memberikan hasil nyata bagi Anda.</p>
                    <div>
                        <button className="py-2 px-10 rounded-md bg-[#AFF78D] text-[18px] font-[500] text-black">Start Now</button>
                    </div>
                </div>
                <div className=" lg:w-1/2">
                    <img src={dashboardImage} alt="dashboardImage" />
                </div>
            </div>

            <div className='px-[20px] lg:px-[80px] py-[60px] mt-10'>
                <h1 className='text-center text-[50px] font-[600] mb-24'>Klien Kami</h1>
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
            <div className='bg-black text-white px-[80px] py-[60px] pb-40 mt-10'>
                <div className='text-black'>
                    <div className='my-16 '>
                        <h1 className='text-[50px] font-[700] text-center text-white'>Bagaimana Workfrom <span className='text-[#AFF78D]'>Meningkatkan Okupansi </span>
                            Kantor Anda?</h1>
                        <p className=' text-white text-center'>Tim profesional digital marketing kami dapat menciptakan <br />
                            strategi khusus untuk menjangkau target pasar & capaitujuan okupansi gedung Anda</p>
                    </div>
                    <div className="flex md:flex-row sm:flex-col justify-between gap-10">
                        <div className="flex flex-col rounded-3xl overflow-hidden">
                            <div>
                                <img src={okupansi1} alt="okupansi1" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <h2 className='text-[20px] font-[600]'>Kami berkolaborasi menetapkan target penjualan yang optimal</h2>
                                <p>Keuntungan meningkat pesat seiring penaikan tingkat okupansi gedung kantor.</p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-3xl overflow-hidden">
                            <div>
                                <img src={okupansi2} alt="okupansi2" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <h2 className='text-[20px] font-[600]'>Kami membuat iklan online khusus untuk Anda!</h2>
                                <p>Iklan disesuaikan untuk meraih target pasar potensial.</p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-3xl overflow-hidden">
                            <div>
                                <img src={okupansi3} alt="okupansi3" />
                            </div>
                            <div className='bg-white p-5 flex flex-col gap-3'>
                                <h2 className='text-[20px] font-[600]'>Kami menghasilkan prospek untuk Tim Penjualan Anda</h2>
                                <p>Dengan prospek berkualitas, Anda dapat mengoptimalkan pengeluaran pemasaran.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='my-16 mt-40'>
                        <h1 className='text-[50px] font-[700] text-center text-[#AFF78D]'>
                            Mengapa Memilih Workfrom?
                        </h1>
                        <p className='text-center'>Bermitra dengan kami untuk dapatkan keuntungan maksimal dengan tenants berkualitas.</p>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex items-center gap-20'>
                            <div className='w-1/2'>
                                <img src={why1} alt="why1" />
                            </div>
                            <div className='w-1/2'>
                                <h2 className='mb-5 font-[700] text-[32px]'>Pantau Real Time Performa Penjualan Anda</h2>
                                <p>Pantau kinerja penjualan dan pemasaran tim Anda secara real-time dengan dasbor inovatif Workfrom. Buat keputusan berbasis data untuk tetap unggul dalam persaingan.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-20'>
                            <div className='w-1/2'>
                                <h2 className='mb-5 font-[700] text-[32px]'>Tingkatkan Keuntungan Bisnis Anda Bersama Workfrom!</h2>
                                <p>Pantau kinerja penjualan dan pemasaran tim Anda secara real-time dengan dasbor inovatif Workfrom. Buat keputusan berbasis data untuk tetap unggul dalam persaingan.</p>
                            </div>
                            <div className='w-1/2'>
                                <img src={why2} alt="why2" />
                            </div>
                        </div>
                        <div className='flex items-center gap-20'>
                            <div className='w-1/2'>
                                <img src={why3} alt="why3" />
                            </div>
                            <div className='w-1/2'>
                                <div>
                                    <h1 className='mb-5 font-[700] text-[32px]'>Pantau Real Time Performa Penjualan Anda</h1>
                                    <p>Pantau kinerja penjualan dan pemasaran tim Anda secara real-time dengan dasbor inovatif Workfrom. Buat keputusan berbasis data untuk tetap unggul dalam persaingan.</p>
                                </div>
                            </div>
                        </div>
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