import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

function NoMatch() {
  $('html').addClass("tw-h-full");
  $('body').addClass("tw-h-full");
  $('.App').addClass("tw-p-0");
  $('nav').addClass("tw-hidden");
  return (
    <>
      <div className="tw-min-h-screen tw-pt-16 tw-pb-12 tw-flex tw-flex-col tw-bg-white dark:tw-bg-zinc-700">
        <main className="tw-flex-grow tw-flex tw-flex-col tw-justify-center tw-max-w-7xl tw-w-full tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
          <div className="tw-py-16">
            <div className="tw-text-center">
              <p className="tw-text-sm tw-font-semibold tw-text-indigo-600 dark:tw-text-orange-400 tw-uppercase tw-tracking-wide">404 error</p>
              <h1 className="tw-mt-2 tw-text-4xl tw-font-extrabold tw-text-gray-900 dark:tw-text-white tw-tracking-tight sm:tw-text-5xl">Page not found.</h1>
              <p className="tw-mt-3 tw-text-base tw-text-gray-500 dark:tw-text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="tw-mt-6">
                <Link to="/Home" className='tw-text-base tw-font-medium tw-text-indigo-600 dark:tw-text-white dark:hover:tw-text-white hover:tw-text-indigo-500'>Go back home <span aria-hidden="true"> &rarr;</span></Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default NoMatch