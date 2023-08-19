import { React } from "react";

const logo="https://res.cloudinary.com/basha18/image/upload/v1685712936/agro-removebg-preview_sloobb.png"
function NotFound() {
    return (
      <div>
        <div className="container h-fit">
          <main class="grid place-items-center bg-white sm:py-32 lg:px-4">
              <div class="text-center">
                  <div className="flex justify-center items-center">
                      <img
                      src={""}
                      />
                  </div>
                  <p class="text-base text-4xl font-bold text-red-900">404</p>
                  <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                  <p class="text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                  <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" class="rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
                    <a href="#" class="text-sm font-semibold text-gray-900 hover:text-red-900">Go Back <span aria-hidden="true">&rarr;</span></a>
                  </div>
              </div>
          </main>
        </div>
      </div>
    );
  }
  export default NotFound;