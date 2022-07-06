import { Link } from 'react-router-dom';
import '../../../assets/styles/pages/home/footer.scss';

function Footer() {
    return (
        <div className='movie__footer w-full relative overflow-hidden'>
            <div className='w-full h-full py-7 bg-black bg-opacity-70'>
                <div className='container w-2/3 mx-auto text-white'>
                    <p className='text-2xl text-center font-bold my-10'>Movies <i className='bx bx-camera-movie text-[18px] md:text-[23px]' /></p>

                    <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-0 md:gap-4 ">
                        <div>
                            <p><Link to='/'>Home</Link></p>
                            <p>Term of services</p>
                            <p>Contact us</p>
                            <p>About us</p>
                        </div>
                        <div>
                            <p>Live</p>
                            <p>FAQ</p>
                            <p>Premium</p>
                            <p>Privacy policy</p>
                        </div>
                        <div>
                            <p>You must watch</p>
                            <p>Precent release</p>
                            <p>Top IMDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;