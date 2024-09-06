import bannerImg from "../assets/banner_image.png";

const Banner = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto h-auto md:h-[90vh]   p-5 md:flex items-center justify-between shadow-sm">
                {/* Text Section */}
                <div className="md:w-1/2">
                    <p className="p-5 text-center md:text-left">
                        About the JMS Group of Institutions JMS Group of
                        Institutions is India’s one of the leading universities
                        that has achieved excellence in the fields of education,
                        research, consultancy, and a lot more. The institute is
                        also adopting from time to time to the changing demands
                        of technical manpower at the global level. Our objective
                        is to achieve excellence in the field of knowledge,
                        innovation, understanding, and transmission of
                        knowledge.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={bannerImg}
                        alt="JMS University"
                        className="h-auto max-w-full"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;
