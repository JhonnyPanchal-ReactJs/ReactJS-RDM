import React from 'react'

function ThemeToggle() {
  const [darkToggle, setDarkToggle] = React.useState(false)
  return (
    // Card and switch container start
    <div className={`tw-h-screen tw-w-full tw-flex tw-items-center tw-justify-center tw-flex-col ${darkToggle && 'tw-dark'}`}>

        {/* Switch Start */}
        <label className="toggleDarkBtn">
            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
            <span className="slideBtnTg tw-round"></span>
        </label>
        {/* Switch End */}

        {/* Card Start */}
        <div className="tw-max-w-sm tw-rounded tw-overflow-hidden tw-bg-gray-100 tw-p-5 tw-rounded-lg tw-mt-4 tw-text-white dark:tw-bg-gray-900">
            <img className="tw-w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="tw-px-6 tw-py-4">
                <div className="tw-text-gray-800 dark:tw-text-gray-200 tw-font-bold tw-text-xl tw-mb-2">The Coldest Sunset</div>
                <p className="tw-text-gray-800 dark:tw-text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="tw-px-6 tw-pt-4 tw-pb-2">
                <span className="tw-inline-block tw-bg-gray-200 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-700 tw-mr-2 tw-mb-2">#photography</span>
                <span className="tw-inline-block tw-bg-gray-200 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-700 tw-mr-2 tw-mb-2">#travel</span>
                <span className="tw-inline-block tw-bg-gray-200 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-700 tw-mr-2 tw-mb-2">#winter</span>
            </div>
        </div>
        {/* Card End */}
    </div>
    // Card and switch container end
  )
}

export default ThemeToggle