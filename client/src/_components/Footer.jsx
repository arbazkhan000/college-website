import logo from "../assets/jms_logo.jpg";

const Footer = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto h-auto md:h-48   flex flex-col md:flex-row items-center justify-between p-5 overflow-hidden">
                {/* Logo Section */}
                <div className="flex-shrink-0 mb-5 md:mb-0">
                    <img src={logo} alt="JMS Logo" className="h-12 w-auto" />
                </div>

                {/* About Section */}
                <div className="md:flex flex-col text-center md:text-left md:mx-5">
                    <section className="py-5 px-5 text-sm">
                        <span className="pb-3 text-[17px] font-bold cursor-pointer block">
                            About
                        </span>
                        <p>
                            JMS Group of Institutions is India’s one of the
                            leading universities that has achieved excellence in
                            the fields of education, research, consultancy, and
                            a lot more. The institute is also adopting from time
                            to time to the changing demands of technical
                            manpower at the global level.
                        </p>
                    </section>
                </div>

                {/* Contact Details Section */}
                <div className="md:flex flex-col text-center md:text-left">
                    <section className="py-10 px-5 text-sm ">
                        <span className="pb-3 text-[17px] font-bold cursor-pointer block">
                            Contact Details
                        </span>
                        <p>
                            NH-9 (NH-24), Vill. Rampur Near Sona Petrol Pump,
                            Hapur Bypass Road, Hapur (Delhi-NCR), U.P. (245101){" "}
                            <br />
                            Mobile : +91 9311218306
                            <br />
                            <span>
                                <a
                                    className="font-bold"
                                    href="mailto:info.jmshapur@gmail.com"
                                >
                                    E-mail : info.jmshapur@gmail.com
                                </a>
                            </span>
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Footer;
