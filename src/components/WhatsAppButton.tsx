import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/905000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient-bg flex items-center justify-center shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
    aria-label="Chat on WhatsApp"
    style={{ animation: "pulse-glow 3s infinite" }}
  >
    <MessageCircle className="w-6 h-6 text-on-primary" />
  </a>
);

export default WhatsAppButton;
