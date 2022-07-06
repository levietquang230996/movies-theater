import '../../../assets/styles/pages/home/loading.scss'

function Loading() {
    return (
        <div className='fixed w-full h-screen top-0 left-0 bg-black z-50
        flex justify-center items-center
        '>
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;