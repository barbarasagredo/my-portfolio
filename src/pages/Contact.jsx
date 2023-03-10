import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7mxomb",
        "contact_form",
        form.current,
        "CqdMPnR641yxueMAp"
      )
      .then(
        (result) => {
          alert("Correo enviado correctamente");
        },
        (error) => {
          alert(`Ocurrio un error, intente nuevamente - ${error}`);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="bg-no-repeat min-h-screen bg-cover backgroundImage">
        <div className="grid grid-rows-2 justify-center items-center">
          <h2 className="flex justify-center pt-16">Contact</h2>
          <p className="px-6">
            If you were interested in my work and want to know more about me or
            my projects, let's talk!
          </p>
        </div>
        <div className="md:grid grid-cols-8 xs:px-12 self-center">
          <div className="col-span-3 col-start-2 pt-6">
            <p className="text-xl font-semibold text-strong-pink pb-4">
              Contact me
            </p>
            <ul className="space-y-8">
              <li className="flex items-center text-lg">
                <a
                  href="https://github.com/barbarasagredo"
                  className="flex items-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#374151"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <p className="text-sm truncate pr-4">
                  github.com/barbarasagredo
                </p>
              </li>
              <li className="flex items-center text-lg">
                <a
                  href="https://www.linkedin.com/in/barbarasagredoc/"
                  className="flex items-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#374151"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <p className="text-sm truncate pr-4">
                  linkedin.com/in/barbarasagredoc
                </p>
              </li>
              <li className="flex items-center text-lg">
                <a
                  href="https://www.flickr.com/photos/azabachecorazon"
                  className="flex items-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#374151"
                  >
                    <path d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z" />
                  </svg>
                </a>
                <p className="text-sm truncate pr-4">
                  flickr.com/photos/azabachecorazon
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-3 pt-6">
            <p className="text-xl font-semibold text-strong-pink pb-4">
              Send me a message
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="pb-4">
                <label className="block text-gray-700 text-base font-semibold pb-2">
                  Name
                </label>
                <input
                  className="shadow border text-base border-gray-600 w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                  type="text"
                  name="user_name"
                  required
                  placeholder="Write your name"
                />
              </div>
              <div className="pb-4">
                <label className="block text-gray-700 text-base font-semibold pb-2">
                  Email
                </label>
                <input
                  className="shadow border text-base border-gray-600 w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                  type="text"
                  name="user_email"
                  required
                  placeholder="Write your email"
                />
              </div>
              <div className="pb-4">
                <label className="block text-gray-700 text-base font-semibold pb-2">
                  Message
                </label>
                <textarea
                  className="shadow border text-base border-gray-600 w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                  rows={4}
                  type="text"
                  name="message"
                  required
                  placeholder="Leave me a message"
                />
              </div>
              <button
                className="border-strong-pink rounded-md w-24 h-12 bg-strong-pink text-white hover:bg-rose-pink"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
