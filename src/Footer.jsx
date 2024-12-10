import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
      <footer id='contact' className="bg-black text-white py-8 border-t-2 border-green-600 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex flex-col md:flex-row items-center justify-between  ">
            
            {/* Contact Information */}
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-semibold mb-2">Get in Touch</h2>
              <p className="text-2xl mb-8">Feel free to reach out to me!</p>
              
              {/* Contact Details - Add your phone number or address here */}
              <p className="text-green-500 mb-2 text-2xl">
                <strong>Phone:</strong> +91 9316089912
              </p>
              <p className="text-green-500 mb-2 text-2xl">
                <strong>Email:</strong> workinatharv@gmail.com
              </p>
              <p className="text-green-500 mb-2 text-2xl ">
                <strong>Address:</strong> Lucknow, India
              </p>
  
              {/* Social Media Links - Add your social links and icons here */}
             
            </div>
  
            {/* Footer Copyright */}
            <div className="absolute bottom-2 right-6 flex flex-col items-end">
            <div className="flex justify-center md:justify-end space-x-6 mt-4 mb-2">
                
                {<SocialIcon url="https://github.com/atharvguptaaa"/>}
              
                {<SocialIcon url="https://www.linkedin.com/in/atharv-gupta-0885b1230/"/>}
                      
                {<SocialIcon url="https://twitter.com/atharvguptaaa"/>}
              
                {<SocialIcon url="mailto:workinatharv@gmail.com"/>}
             

            </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Atharv Gupta. All rights reserved.
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    );
  }
  