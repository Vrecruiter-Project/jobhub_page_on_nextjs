"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const location = usePathname();

    return (
        <div id="notfound" className="flex justify-center items-center px-4 py-16 mb-20">
            <div className="w-full max-w-4xl">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">404 - Not Found</h2>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
                    <span className="text-lg md:text-xl underline bg-red-400 px-2 py-1 rounded-md break-all">
                        {location}
                    </span>
                    <p className="text-2xl md:text-4xl font-medium">This page does not exist</p>
                </div>

                <p className="text-4xl md:text-6xl font-extrabold text-gray-600 text-center mt-6">Sorry</p>

                <div className="mt-10 px-2 sm:px-4">
                    <p className="mb-6 text-2xl md:text-3xl font-semibold underline text-gray-800 text-center md:text-left">
                        Useful Links
                    </p>

                    <ul className="space-y-4">
                        <li className="bg-gray-100 p-4 rounded hover:shadow transition-shadow">
                            <Link href="/interview-prepration" className="text-green-600 font-medium hover:underline">
                                Interview Preparation
                            </Link>
                            <span className="text-sm text-gray-700 block mt-1">
                                Let Jobhub help you crack your interviews
                            </span>
                        </li>

                        <li className="bg-gray-100 p-4 rounded hover:shadow transition-shadow">
                            <Link
                                href="https://jobhub-resume-builder.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 font-medium hover:underline"
                            >
                                Build Resume Quickly
                            </Link>
                            <span className="text-sm text-gray-700 block mt-1">
                                Select a template to get started! Choose the best one
                            </span>
                        </li>

                        <li className="bg-gray-100 p-4 rounded hover:shadow transition-shadow">
                            <Link href="/candidatesignup" className="text-green-600 font-medium hover:underline">
                                Job Registration Form
                            </Link>
                            <span className="text-sm text-gray-700 block mt-1">
                                Complete your profile to access exclusive job opportunities
                            </span>
                        </li>

                        <li className="bg-gray-100 p-4 rounded hover:shadow transition-shadow">
                            <Link href="/about-us" className="text-green-600 font-medium hover:underline">
                                About Us
                            </Link>
                            <span className="text-sm text-gray-700 block mt-1">
                                Why choose Jobhub.world?
                            </span>
                        </li>
                    </ul>

                    <div className="mt-8 flex justify-center">
                        <Link href="/" className="flex items-center gap-2 text-green-600 hover:underline">
                            <i className="fa-solid fa-arrow-left bg-green-500 p-1 rounded-full text-white w-5 h-5 flex items-center justify-center text-xs"></i>
                            <p className="text-base md:text-lg font-medium">Back to Home</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}