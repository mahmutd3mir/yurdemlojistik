import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import galleryBanner from "@/assets/gallery-banner.jpg";
import galleryTruck1 from "@/assets/gallery-truck-1.jpg";
import galleryTruck2 from "@/assets/gallery-truck-2.jpg";
import galleryTruck3 from "@/assets/gallery-truck-3.jpg";
import galleryFleet from "@/assets/gallery-fleet.jpg";
import gallerySite1 from "@/assets/gallery-site-1.jpg";
import gallerySite2 from "@/assets/gallery-site-2.jpg";
import gallerySite3 from "@/assets/gallery-site-3.jpg";
import gallerySite4 from "@/assets/gallery-site-4.jpg";
import gallerySite5 from "@/assets/gallery-site-5.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

interface UploadedPhoto {
  id: string;
  url: string;
  file_name: string;
}

const vehicleImages = [{
  src: galleryTruck1,
  alt: "Mercedes Actros Araç",
  title: "Araç Filomuz"
}, {
  src: galleryTruck2,
  alt: "Tanker Araçlarımız",
  title: "Tanker Filosu"
}, {
  src: galleryTruck3,
  alt: "Gece Operasyonu",
  title: "7/24 Hizmet"
}, {
  src: galleryFleet,
  alt: "Araç Parkımız",
  title: "Araç Parkı"
}, {
  src: gallery5,
  alt: "Filo Görünümü",
  title: "Araç Filomuz"
}, {
  src: gallery6,
  alt: "Yurdem Lojistik Tanker",
  title: "Tanker Hizmeti"
}, {
  src: gallery7,
  alt: "Mercedes Araç Parkı",
  title: "Araç Parkı"
}, {
  src: gallery8,
  alt: "Yurdem Lojistik Ofis",
  title: "Merkez Ofis"
}];

const siteImages = [{
  src: gallerySite1,
  alt: "Petrol Sahası Çalışması",
  title: "Petrol Sahası"
}, {
  src: gallerySite2,
  alt: "Şantiye Operasyonu",
  title: "Saha Operasyonu"
}, {
  src: gallerySite3,
  alt: "Gece Sondaj Operasyonu",
  title: "Gece Operasyonu"
}, {
  src: gallerySite4,
  alt: "Tanker Filosu Sahada",
  title: "Saha Nakliyesi"
}, {
  src: gallerySite5,
  alt: "Sondaj Sahası Çalışması",
  title: "Sondaj Sahası"
}];

const Gallery = () => {
  const vehicleScrollRef = useRef<HTMLDivElement>(null);
  const siteScrollRef = useRef<HTMLDivElement>(null);
  const uploadedScrollRef = useRef<HTMLDivElement>(null);
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]);

  // Fetch uploaded photos from database
  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await supabase
        .from('gallery_photos')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) {
        setUploadedPhotos(data);
      }
    };
    fetchPhotos();
  }, []);

  // Vehicle gallery - scroll right
  useEffect(() => {
    const scrollContainer = vehicleScrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = scrollContainer.scrollWidth / 2;

    const animate = () => {
      scrollPos -= 0.5;
      if (scrollPos <= 0) {
        scrollPos = scrollContainer.scrollWidth / 2;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Site gallery - scroll left
  useEffect(() => {
    const scrollContainer = siteScrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <section id="galeri" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Galeri</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modern ve bakımlı araç filomuzla güvenli nakliyat hizmeti sunuyoruz.
          </p>
        </div>

        {/* Banner */}
        <div className="mb-12">
          <div className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500">
            <img src={galleryBanner} alt="Yurdem Lojistik Banner" className="w-full h-64 md:h-80 object-contain bg-white" />
          </div>
        </div>

        {/* Vehicle Gallery - Scrolling Right */}
        <div className="mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Araç Filomuz
          </h3>
        </div>
        <div 
          ref={vehicleScrollRef}
          className="flex gap-6 overflow-x-hidden mb-16"
        >
          {[...vehicleImages, ...vehicleImages].map((image, index) => (
            <div 
              key={index} 
              className="group relative flex-shrink-0 w-80 md:w-96 overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105" 
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

        {/* Site Gallery - Scrolling Left */}
        <div 
          ref={siteScrollRef}
          className="flex gap-6 overflow-x-hidden mb-16"
        >
          {[...siteImages, ...siteImages].map((image, index) => (
            <div 
              key={index} 
              className="group relative flex-shrink-0 w-80 md:w-96 overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
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

        {/* Uploaded Photos Section */}
        {uploadedPhotos.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ek Fotoğraflar
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {uploadedPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500"
                >
                  <img 
                    src={photo.url} 
                    alt={photo.file_name} 
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>;
};
export default Gallery;