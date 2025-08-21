import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, Cloud } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Trang chủ", href: "#home" },
    { name: "Phòng", href: "#rooms" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Ảnh", href: "#gallery" },
    { name: "Đánh giá", href: "#reviews" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-sky-gradient rounded-full flex items-center justify-center">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Mây Trời Homestay
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Booking Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button className="btn-booking hidden sm:flex">
            Đặt phòng ngay
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="btn-booking w-full mt-4">
              Đặt phòng ngay
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;