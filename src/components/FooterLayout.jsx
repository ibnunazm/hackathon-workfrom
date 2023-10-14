import workformLogo from '../assets/workformLogo.png';
import Location from '../assets/location.png';
import telepon from '../assets/telepon.png';

function FooterLayout() {
    return (
        <div className='px-[20px] lg:px-[80px] py-[60px] mt-36 flex justify-between'>
            <div>
                <div className='w-[194px] h-[36px]'>
                    <img src={workformLogo} alt="workformLogo" />
                </div>
                <div className='flex items-center gap-5 mt-8'>
                    <div className='w-[24px] h-[24px]'>
                        <img src={Location} alt="Location" />
                    </div>
                    <p className='w-2/4'>Komp. Ruko Centre Point Medan Jalan Timor Blok G No. III/IV 2nd Floor, Gang Buntu, Medan Timur, Medan City, North Sumatra 20231</p>
                </div>
                <div className='flex items-center gap-5 mt-3'>
                    <div className='w-[24px] h-[24px]'>
                        <img src={telepon} alt="telepon" />
                    </div>
                    <p>(+6261) 805 109 77</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold'>Use Case</h3>
                <div className='flex flex-col gap-2 mt-3'>
                    <p>Event</p>
                    <p>Meeting</p>
                    <p>Photoshoot</p>
                    <p>Office</p>
                </div>
            </div>
            <div>
                <h3  className='font-bold'>Company</h3>
                <p className='mt-3'>Contact</p>
            </div>
        </div>
    )
}

export default FooterLayout