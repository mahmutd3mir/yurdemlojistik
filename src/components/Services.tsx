import { Droplets, Fuel, Construction } from "lucide-react";
import OilPumpIcon from "./icons/OilPumpIcon";

const services = [
  {
    icon: OilPumpIcon,
    title: "Petrol Nakliyat",
    description: "Petrol ve petrol ürünlerinin güvenli ve zamanında taşınması için profesyonel çözümler sunuyoruz.",
  },
  {
    icon: Fuel,
    title: "Yakıt Nakliyat",
    description: "Her türlü yakıt taşımacılığında deneyimli ekibimizle güvenli hizmet veriyoruz.",
  },
  {
    icon: Construction,
    title: "Asfalt Nakliyat",
    description: "Asfalt ve yapı malzemelerinin taşınmasında uzmanlaşmış araç filomuzla hizmetinizdeyiz.",
  },
  {
    icon: Droplets,
    title: "Su Nakliyat",
    description: "İçme suyu ve endüstriyel su taşımacılığında hijyenik ve güvenilir hizmet sağlıyoruz.",
  },
];

const Services = () => {
  return (
    <section id="hizmetler" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profesyonel ekibimiz ve modern araç filomuzla nakliyat ihtiyaçlarınıza çözüm üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
