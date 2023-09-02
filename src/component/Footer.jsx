import { React } from "react";

function Footer() {
    return (
      <div>
        <div class="bg-white dark:bg-gray-800">
            <div class="container px-6 py-12 mx-auto">
                <div class="text-center">
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Let’s get started on something great for your life</h2>

                    <p class="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Join over 4,000+ patient already join our nutrition program.</p>

                    <div class="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
                        <button class="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Get started</button>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-between sm:flex-row">
                    <a href="#">
                        <h2 className='text-white text-2xl flex justify-end pr-4'>NATURAL REMEDIES</h2>
                    </a>

                    <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default Footer;