import galleryBanner from "@/assets/gallery-banner.jpg";
import galleryTruck1 from "@/assets/gallery-truck-1.jpg";
import galleryTruck2 from "@/assets/gallery-truck-2.jpg";
import galleryTruck3 from "@/assets/gallery-truck-3.jpg";
import galleryFleet from "@/assets/gallery-fleet.jpg";
import gallerySite1 from "@/assets/gallery-site-1.jpg";
import gallerySite2 from "@/assets/gallery-site-2.jpg";

const vehicleImages = [
  { src: galleryBanner, alt: "Yurdem Lojistik Banner", title: "Yurdem Lojistik" },
  { src: galleryTruck1, alt: "Mercedes Actros Araç", title: "Araç Filomuz" },
  { src: galleryTruck2, alt: "Tanker Araçlarımız", title: "Tanker Filosu" },
  { src: galleryTruck3, alt: "Gece Operasyonu", title: "7/24 Hizmet" },
  { src: galleryFleet, alt: "Araç Parkımız", title: "Araç Parkı" },
];

const siteImages = [
  { src: gallerySite1, alt: "Petrol Sahası Çalışması", title: "Petrol Sahası" },
  { src: gallerySite2, alt: "Şantiye Operasyonu", title: "Saha Operasyonu" },
];

const Gallery = () => {
  return (
    <section id="galeri" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Araç Filomuz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modern ve bakımlı araç filomuzla güvenli nakliyat hizmeti sunuyoruz.
          </p>
        </div>

        {/* Vehicle Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {vehicleImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500 ${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  index === 0 ? "h-64 md:h-80 object-contain bg-white" : "h-72"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-xl font-bold text-primary-foreground">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Work Areas Section */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Çalışma Alanlarımız
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Türkiye'nin dört bir yanında petrol ve enerji sektöründe aktif olarak hizmet veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-xl font-bold text-primary-foreground">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
