import React from 'react'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#282E2A] text-white text-center p-4 mt-8">
        <p>&copy; 2024 Needytail. All rights reserved.</p>
         <div className="container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Contact Information Section */}
            <div>
                <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
                <div>
                    <Mail size={20} className="inline-block mr-2"/>
                <span>Email:Kartik@needytailfoundation.org</span>
                </div>
                <div>
                    <Phone size={20} className="inline-block mr-2"/>
                <span>Phone:+91 8224867707</span>
                </div>
                

                 <div className="flex space-x-4 mt-3 mb-4 ml-28">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📷</a>
          </div>
            </div>

            {/* Quick Links Section */}
             <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
              </div>
            
            {/* Social Media Links and Address Section */}
            <div>
                <h4 className="font-bold mb-2">Follow Us</h4>
                 <div className="flex space-x-4 mt-4 ml-29 mb-4">
            <a href="#" className="hover:text-white"><Facebook size={22} /></a>
            <a href="#" className="hover:text-white"><Instagram size={22} /></a>
            <a href="#" className="hover:text-white"><Youtube size={22} /></a>
          </div>
            </div>

            <div>
                <h4 className="font-bold mb-2">Address</h4>
                <p>86-E, Baktaverram nagar, Indore, Madhya Pradesh 452018</p>
            </div>
         </div>
    </footer>
  )
}

export default Footer
