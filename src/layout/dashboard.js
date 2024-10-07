import React from 'react';
import Navbar from "../components/navbar";
import { PlusIcon } from '@heroicons/react/20/solid';

const handleButtonClick = () => {
    window.location.href = 'https://wazend.net/pricing/';
};

export default function Layout({ children, title, showButton }) {
    return (
        <>
            <div className="min-h-screen">

                <Navbar />

                <main>
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
                        {showButton && (
                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            >
                                <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                Contratar servicio
                            </button>
                        )}
                    </div>
                    <div className="mx-auto max-w-7xl py-0 px-4 sm:px-6 lg:px-8">{children}</div>
                </main>

            </div>
        </>
    );
};
