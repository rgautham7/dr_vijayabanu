import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react'; // Make sure to install lucide-react

export default function Footer() {
  const navigation = [
    ['About', '/about'],
    ['Services', '/services'],
    ['Events', '/events'],
    ['Testimonial', '/testimonial'],
    ['Contact', '/contact'],
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ];

  const contactInfo = [
    { 
      icon: <Phone size={20} />, 
      text: '+91 123 456 7890',
      href: 'tel:+911234567890'
    },
    { 
      icon: <Mail size={20} />, 
      text: 'contact@example.com',
      href: 'mailto:contact@example.com'
    },
    { 
      icon: <MapPin size={20} />, 
      text: 'Chennai, Tamil Nadu',
      href: 'https://maps.google.com/?q=Chennai,Tamil Nadu'
    },
  ];

  return (
    <footer className="bg-[#FBC8AB] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-12 gap-8"> {/* Changed to 12 columns for more precise control */}
          {/* Brand Section - Takes 4 columns with right margin */}
          <div className="col-span-4 pr-24"> {/* Added right padding */}
            <Link 
              href="/" 
              className="font-sacramento text-4xl text-[#3C1908] hover:text-[#C85925] transition-colors"
            >
              Vijayabanu
            </Link>
            <p className="font-judson text-lg text-[#3C1908] mt-4 leading-relaxed">
              Inspiring minds and transforming lives through knowledge and wisdom.
            </p>
          </div>

          {/* Three columns wrapper - Takes 8 columns with closer spacing */}
          <div className="col-span-8 grid grid-cols-3 gap-8"> {/* Reduced gap between these columns */}
            {/* Navigation */}
            <div className="flex flex-col">
              <h3 className="font-judson text-2xl text-[#3C1908] mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navigation.map(([title, url]) => (
                  <li key={title}>
                    <Link
                      href={url}
                      className="font-judson text-lg text-[#3C1908] hover:text-[#C85925] transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <h3 className="font-judson text-2xl text-[#3C1908] mb-6">Connect</h3>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="font-judson text-lg text-[#3C1908] hover:text-[#C85925] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col">
              <h3 className="font-judson text-2xl text-[#3C1908] mb-6">Contact</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="font-judson text-lg text-[#3C1908] hover:text-[#C85925] transition-colors flex items-center gap-3"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="text-[#C85925]">{item.icon}</span>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright - Added more top padding */}
        <div className="pt-4 mt-12">
          <p className="font-judson text-center text-[#3C1908]">
            © {new Date().getFullYear()} Dr. Vijayabanu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}