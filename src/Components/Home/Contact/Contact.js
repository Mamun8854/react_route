import React from "react";
import Lottie from "lottie-react";
import Image from "./contact.json";
const Contact = () => {
  return (
    <section className="bg-gray-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl pb-10 font-bold text-yellow-400">
              Let's talk{" "}
            </h2>
            <Lottie
              style={{ width: "400px", height: "400px" }}
              animationData={Image}
              loop={true}
            />
          </div>
          <form
            noValidate=""
            className="space-y-6 ng-untouched ng-pristine ng-valid  bg-white p-20 rounded-xl"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800 bg-gray-100 font-semibold text-gray-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:bg-gray-800 bg-gray-100 font-semibold text-gray-600"
                data-temp-mail-org="1"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:bg-gray-800 bg-gray-100 font-semibold text-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-yellow-400 dark:text-gray-900 bg-yellow-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
