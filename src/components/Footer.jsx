

const Footer = () => {
    return (
        <footer className=" bg-white  p-20">
            <div className="flex-col items-center flex gap-3 mb-5 border-b pb-10">
                <h3 className="text-2xl font-bold">Gadget Heaven</h3>
                <p className="text-base text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <div className="grid grid-cols-3">
                <nav>

                    <div className="flex flex-col items-center">
                        <h6 className="text-black font-bold mb-2">Services</h6>
                        <a className="link link-hover text-gray-500">Product Support</a>
                        <a className="link link-hover text-gray-500">Order Tracking</a>
                        <a className="link link-hover text-gray-500">Shipping & Delivery</a>
                        <a className="link link-hover text-gray-500">Returns</a>
                    </div>

                </nav>
                <nav>

                    <div className="flex flex-col items-center">
                        <h6 className="text-black font-bold mb-2">Company</h6>
                        <a className="link link-hover text-gray-500">About Us</a>
                        <a className="link link-hover text-gray-500">Careers</a>
                        <a className="link link-hover text-gray-500">Contact</a>

                    </div>

                </nav>
                <nav>

                    <div className="flex flex-col items-center">
                        <h6 className="text-black font-bold mb-2">Legal</h6>
                        <a className="link link-hover text-gray-500">Terms of Service</a>
                        <a className="link link-hover text-gray-500">Privacy Policy</a>
                        <a className="link link-hover text-gray-500">Cookie Policy</a>

                    </div>

                </nav>

            </div>

        </footer>
    );
};

export default Footer;