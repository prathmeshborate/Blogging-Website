import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gray-800 text-white border-t-2 border-gray-700">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap justify-around">
                    <div className="w-full md:w-1/3 lg:w-2/12 p-6 text-center">
                        <div className="flex flex-col items-center">
                            <Logo width="60px" /> {/* Update logo size if needed */}
                            <p className="mt-2 text-sm text-center">© 2024. All Rights Reserved by Prathmesh Borate.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-2/12 p-6">
                        <h3 className="text-xs font-semibold uppercase text-gray-400">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Features</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Pricing</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Affiliate Program</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-2/12 p-6">
                        <h3 className="text-xs font-semibold uppercase text-gray-400">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Account</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Help</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-2/12 p-6">
                        <h3 className="text-xs font-semibold uppercase text-gray-400">Legals</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-blue-400" to="/">Licensing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
