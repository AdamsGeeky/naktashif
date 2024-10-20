import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image';

const footerLinks = [
  {
    title: "ABOUT ZOMATO",
    links: ["Who We Are", "Blog", "Work With Us", "Investor Relations", "Report Fraud", "Press Kit", "Contact Us"]
  },
  {
    title: "ZOMAVERSE",
    links: ["Zomato", "Blinkit", "Feeding India", "Hyperpure", "Zomaland"]
  },
  {
    title: "FOR RESTAURANTS",
    links: ["Partner With Us", "Apps For You"]
  },
  {
    title: "LEARN MORE",
    links: ["Privacy", "Security", "Terms", "Sitemap"]
  }
];

const socialLinks = [
  { icon: <FaLinkedin />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaFacebookF />, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            Logo
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="india">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">🇮🇳 India</SelectItem>
                <SelectItem value="usa">🇺🇸 USA</SelectItem>
                <SelectItem value="uk">🇬🇧 UK</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="english">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">🌐 English</SelectItem>
                <SelectItem value="hindi">🌐 Hindi</SelectItem>
                <SelectItem value="spanish">🌐 Spanish</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col items-start">
            <h3 className="font-bold mb-4">SOCIAL LINKS</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-600 hover:text-gray-900">
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex space-x-4 mb-4">
              <Image src="/appstore.png?height=40&width=120" alt="App Store" width={120} height={40} />
              <Image src="/playstore.png?height=40&width=120" alt="Google Play" width={120} height={40} />
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
