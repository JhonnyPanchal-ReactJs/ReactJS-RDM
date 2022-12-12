import React from 'react'
// import circlesImg from '../../../images/circles.png'
// import emptyImg from '../../../images/empty.png'
// import './Card.css'

const Card = ({ title, value, description, img, leftColor, rightColor }) => (

    // Old Card Start

    // <div className="card mx-auto Fitness-Card"
    // style={{
    //     backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
    // }}
    // >
    //     <div className="card-body">
    //         <div className="row center">
    //             <div className="col-6">
    //                 <img src={img || emptyImg} className="float-right" alt="exercise"/>
    //             </div>
    //             <div className="col-6 Fitness-Card-Info">
    //                 <h1>{title}</h1>
    //                 <p>{description}</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // Ola Card End

    <>
        <div className="tw-relative tw-bg-white dark:tw-bg-zinc-700 tw-pt-5 tw-px-4 tw-pb-16 sm:tw-pt-6 sm:tw-px-6 tw-shadow tw-rounded-lg tw-overflow-hidden">
            <dt>
                <div className="tw-absolute tw-bg-blue-500 tw-rounded-md tw-p-3">
                    <svg className="tw-h-6 tw-w-6 tw-text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <p className="tw-ml-16 tw-text-sm tw-font-medium tw-text-gray-500 tw-truncate tw-mb-0">{title}</p>
            </dt>
            <dd className="tw-ml-16 tw-flex tw-items-baseline mb-0">
                <p className="tw-text-2xl tw-font-semibold tw-text-gray-900 dark:tw-text-white tw-mb-0">{value}</p>
                <div className="tw-absolute tw-bottom-0 tw-inset-x-0 tw-bg-gray-50 dark:tw-bg-zinc-800 tw-px-4 tw-py-4 sm:tw-px-6">
                    <div className="tw-text-sm">
                        <p className="tw-font-medium tw-text-blue-500 hover:tw-text-blue-500 tw-mb-0"> View all<span className="tw-sr-only"> Total Subscribers stats</span></p>
                    </div>
                </div>
            </dd>
        </div>
    </>
)

export default Card