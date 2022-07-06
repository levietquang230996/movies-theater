function Videos({ videos }) {
    return (
        <div className=" py-10">
            {videos && videos.map((v, i) => i < 7 ? (
                <div key={v.key} className="detail__videos container m-auto xl:max-w-screen-xl p-4 text-white">
                    <p className="text-2xl font-bold mb-10"> {v.name} </p>
                    <iframe className="w-full h-[600px] mb-5"
                        src={`https://www.youtube.com/embed/${v.key}`}></iframe>
                </div>
            ) : null)}
        </div>
    );
}

export default Videos;
