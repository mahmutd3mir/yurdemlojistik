import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Petrol Nakliyat Aracı", title: "Petrol Nakliyat" },
  { src: gallery2, alt: "Yakıt Taşıma Tankeri", title: "Yakıt Nakliyat" },
  { src: gallery3, alt: "Asfalt Taşıma Aracı", title: "Asfalt Nakliyat" },
  { src: gallery4, alt: "Su Tankeri", title: "Su Nakliyat" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
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
