import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-8 border-t-2 border-green-600 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-lg sm:text-2xl mb-6">Feel free to reach out to me!</p>

            {/* Contact Details */}
            <p className="text-green-500 text-lg sm:text-2xl mb-2">
              <strong>Phone:</strong> +91 9316089912
            </p>
            <p className="text-green-500 text-lg sm:text-2xl mb-2">
              <strong>Email:</strong> workinatharv@gmail.com
            </p>
            <p className="text-green-500 text-lg sm:text-2xl mb-2">
              <strong>Address:</strong> Lucknow, India
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex justify-center md:justify-end flex-wrap space-x-4 sm:space-x-6 mb-4">
              <SocialIcon url="https://github.com/atharvguptaaa" className="h-8 w-8" />
              <SocialIcon url="https://www.linkedin.com/in/atharv-gupta-0885b1230/" className="h-8 w-8" />
              <SocialIcon url="https://twitter.com/atharvguptaaa" className="h-8 w-8" />
              <SocialIcon url="mailto:workinatharv@gmail.com" className="h-8 w-8" />
            </div>

            <p className="text-sm text-gray-400 text-center md:text-right">
              &copy; {new Date().getFullYear()} Atharv Gupta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
