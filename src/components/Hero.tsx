import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary/80 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Yurdem Lojistik
          </h1>
        </div>
        
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 mb-4">
            İTH. İHR. SAN. TİC. LTD. ŞTİ.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            2016'dan beri güvenilir ve profesyonel nakliyat hizmetleri
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#hizmetler"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 shadow-hero hover:scale-105"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#hizmetler" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;
