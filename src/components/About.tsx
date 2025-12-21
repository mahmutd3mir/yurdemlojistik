import { Award, Clock, Shield, Users, FileCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "2016", label: "Yılından Beri" },
  { icon: Users, value: "1000+", label: "Mutlu Müşteri" },
  { icon: Shield, value: "%100", label: "Güvenli Teslimat" },
  { icon: Award, value: "9+", label: "Yıllık Deneyim" },
  { icon: FileCheck, value: "ADR", label: "Lisanslı Araçlar - Her Türlü Yetki Belgesi Mevcuttur" },
];

const About = () => {
  return (
    <section id="hakkimizda" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hakkımızda
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">Yurdem Lojistik</strong>, 2016 yılından bu yana Türkiye'nin önde gelen 
              nakliyat firmalarından biri olarak hizmet vermektedir. Petrol, yakıt, asfalt ve su 
              taşımacılığı alanlarında uzmanlaşmış ekibimiz ve modern araç filomuzla 
              müşterilerimize güvenilir ve profesyonel çözümler sunuyoruz.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Müşteri memnuniyetini her zaman ön planda tutarak, zamanında teslimat ve 
              güvenli taşımacılık prensiplerimizle sektörde güçlü bir konuma sahip olduk. 
              Deneyimli kadromuz ve sürekli yenilenen araç filomuzla hizmet kalitemizi 
              her geçen gün artırmaya devam ediyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">Profesyonel Ekip</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">Modern Araç Filosu</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">7/24 Destek</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-secondary p-8 rounded-xl text-center hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
