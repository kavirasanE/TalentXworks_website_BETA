// import React from 'react';

// const FAQ = () => {
//     const toggleAnswer = (index) => {
//         const answer = document.getElementById(`answer${index}`);
//         const arrow = document.getElementById(`arrow${index}`);

//         if (answer.style.display === 'none' || answer.style.display === '') {
//             answer.style.display = 'block';
//             arrow.style.transform = 'rotate(-180deg)';
//         } else {
//             answer.style.display = 'none';
//             arrow.style.transform = 'rotate(0deg)';
//         }
//     };

//     return (
//         <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
//             <div className="px-4 mx-auto sm:px-6 lg:px-2 max-w-7xl ">
//                 <div className="max-w-2xl mx-auto text-center">
//                     <h2 className="text-xl font-bold leading-tight text-black sm:text-4xl lg:text-2xl">
//                     TECHNOLOGY SERVICES FOR YOUR BUSINESS
//                     </h2>
//                 </div>
//                 <div className="max-w-3xl mx-auto mt-8 md:mt-16 flex flex-col gap-10">
//                     {/* Repeat this div block for each question */}
//                     <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad11 rounded-3xl hover:bg-gray-50 px-2 h-20 lg:h-20">
//                         <button
//                             type="button"
//                             className="flex items-center justify-between w-full sm:p-2 sm:px-4"
//                             onClick={() => toggleAnswer(1)} // Pass question index
//                         >
//                             <span className="flex lg:text-lg text-sm font-semibold text-black">Quality Engineering & Assurance. Performance, Security, and Reliability</span>
//                             <svg
//                                 id="arrow1"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 className="w-6 h-6 text-gray-400"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                 ></path>
//                             </svg>
//                         </button>
//                         <div id="answer1" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
//                             <p>
//                                 Getting started is easy! Sign up for an account, and you'll have access to our
//                                 platform's features. No credit card required for the initial signup.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad11 rounded-3xl hover:bg-gray-50 px-2 h-20 lg:h-12">
//                         <button
//                             type="button"
//                             className="flex items-center justify-between w-full sm:p-2 sm:px-4"
//                             onClick={() => toggleAnswer(1)} // Pass question index
//                         >
//                             <span className="flex lg:text-lg text-sm font-semibold text-black ">Product Engineering. Simplicity, Scalability, and Speed.    </span>
//                             <svg
//                                 id="arrow1"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 className="w-6 h-6 text-gray-400"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                 ></path>
//                             </svg>
//                         </button>
//                         <div id="answer1" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
//                             <p>
//                                 Getting started is easy! Sign up for an account, and you'll have access to our
//                                 platform's features. No credit card required for the initial signup.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad11 rounded-3xl hover:bg-gray-50 px-2 h-20 lg:h-12">
//                         <button
//                             type="button"
//                             className="flex items-center justify-between w-full sm:p-2 sm:px-4"
//                             onClick={() => toggleAnswer(1)} // Pass question index
//                         >
//                             <span className="flex lg:text-lg text-sm font-semibold text-black p-2">Digital Transformation. Innovation, Agility, and Adaptability.</span>
//                             <svg
//                                 id="arrow1"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 className="w-6 h-6 text-gray-400"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                 ></path>
//                             </svg>
//                         </button>
//                         <div id="answer1" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
//                             <p>
//                                 Getting started is easy! Sign up for an account, and you'll have access to our
//                                 platform's features. No credit card required for the initial signup.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad11 rounded-3xl hover:bg-gray-50 px-2 h-20 lg:h-12">
//                         <button
//                             type="button"
//                             className="flex items-center justify-between w-full sm:p-2 sm:px-4"
//                             onClick={() => toggleAnswer(1)} // Pass question index
//                         >
//                             <span className="flex lg:text-lg text-sm font-semibold text-black p-2">Application Modernization. Streamline, Maintain, and Re-engineer.</span>
//                             <svg
//                                 id="arrow1"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 className="w-6 h-6 text-gray-400"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                 ></path>
//                             </svg>
//                         </button>
//                         <div id="answer1" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
//                             <p>
//                                 Getting started is easy! Sign up for an account, and you'll have access to our
//                                 platform's features. No credit card required for the initial signup.
//                             </p>
//                         </div>
//                     </div>

//                     {/* End of question block */}
//                 </div>
//                 {/* <p className="text-center text-gray-600 textbase mt-9">
//                     Still have questions?{' '}
//                     <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
//                         Contact our support
//                     </span>
//                 </p> */}
//             </div>
//             <div>
//             </div>
//         </section>
//     );
// };

// export default FAQ;


import React from 'react';

const FAQ = () => {
    const toggleAnswer = (index) => {
        const answer = document.getElementById(`answer${index}`);
        const arrow = document.getElementById(`arrow${index}`);

        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(-180deg)';
        } else {
            answer.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        }
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-2 max-w-7xl ">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-xl font-bold leading-tight text-black sm:text-4xl lg:text-2xl">
                    TECHNOLOGY SERVICES FOR YOUR BUSINESS
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-8 md:mt-16 flex flex-col gap-5">
                    {/* Repeat this div block for each question */}
                    <div className="transition-all translate-transform  duration-1000 bg-white border border-gray-200 shadow-lg cursor-pointer grad1  rounded-3xl hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full sm:p-2 sm:px-4"
                            onClick={() => toggleAnswer(1)} // Pass question index
                        >
                            <span className="flex lg:text-lg text-sm font-semibold text-black">Quality Engineering & Assurance. Performance, Security, and Reliability</span>
                            <svg
                                id="arrow1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div id="answer1" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                                Getting started is easy! Sign up for an account, and you'll have access to our
                                platform's features. No credit card required for the initial signup.
                            </p>
                        </div>
                    </div>
                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad1 rounded-3xl hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full sm:p-2 sm:px-4"
                            onClick={() => toggleAnswer(2)} // Pass question index
                        >
                            <span className="flex text-lg font-semibold text-black">Quality Engineering & Assurance. Performance, Security, and Reliability</span>
                            <svg
                                id="arrow1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div id="answer2" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                                Getting started is easy! Sign up for an account, and you'll have access to our
                                platform's features. No credit card required for the initial signup.
                            </p>
                        </div>
                    </div>
                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad1 rounded-3xl hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full sm:p-2 sm:px-4"
                            onClick={() => toggleAnswer(3)} // Pass question index
                        >
                            <span className="flex text-lg font-semibold text-black">Quality Engineering & Assurance. Performance, Security, and Reliability</span>
                            <svg
                                id="arrow1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div id="answer3" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                                Getting started is easy! Sign up for an account, and you'll have access to our
                                platform's features. No credit card required for the initial signup.
                            </p>
                        </div>
                    </div>


                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad1 rounded-3xl hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full sm:p-2 sm:px-4"
                            onClick={() => toggleAnswer(4)} // Pass question index
                        >
                            <span className="flex text-lg font-semibold text-black">Quality Engineering & Assurance. Performance, Security, and Reliability</span>
                            <svg
                                id="arrow1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div id="answer4" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                                Getting started is easy! Sign up for an account, and you'll have access to our
                                platform's features. No credit card required for the initial signup.
                            </p>
                        </div>
                    </div>



                    {/* <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad1 rounded-3xl hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full sm:p-2 sm:px-4"
                            onClick={() => toggleAnswer(1)} // Pass question index
                        >
                            <span className="flex text-lg font-semibold text-black">Quality Engineering & Assurance. Performance, Security, and Reliability</span>
                            <svg
                                id="arrow1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div id="answer1" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                                Getting started is easy! Sign up for an account, and you'll have access to our
                                platform's features. No credit card required for the initial signup.
                            </p>
                        </div>
                    </div>


                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer grad1 rounded-3xl hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full sm:p-2 sm:px-4"
                            onClick={() => toggleAnswer(1)} // Pass question index
                        >
                            <span className="flex text-lg font-semibold text-black">Quality Engineering & Assurance. Performance, Security, and Reliability</span>
                            <svg
                                id="arrow1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div id="answer1" style={{ display: 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                                Getting started is easy! Sign up for an account, and you'll have access to our
                                platform's features. No credit card required for the initial signup.
                            </p>
                        </div>
                    </div> */}

                    {/* End of question block */}
                </div>
                {/* <p className="text-center text-gray-600 textbase mt-9">
                    Still have questions?{' '}
                    <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
                        Contact our support
                    </span>
                </p> */}
            </div>
        </section>
    );
};

export default FAQ;