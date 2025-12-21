import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Upload, Trash2, LogOut, ArrowLeft, Image, Loader2 } from 'lucide-react';
import logo from '@/assets/logo-new.jpg';

interface GalleryPhoto {
  id: string;
  url: string;
  file_name: string;
  created_at: string;
}

const Admin = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loadingPhotos, setLoadingPhotos] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchPhotos();
    }
  }, [user]);

  const fetchPhotos = async () => {
    setLoadingPhotos(true);
    const { data, error } = await supabase
      .from('gallery_photos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: 'Hata',
        description: 'Fotoğraflar yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } else {
      setPhotos(data || []);
    }
    setLoadingPhotos(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    for (const file of Array.from(files)) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(filePath, file);

      if (uploadError) {
        toast({
          title: 'Yükleme Hatası',
          description: `${file.name} yüklenirken hata oluştu.`,
          variant: 'destructive',
        });
        continue;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(filePath);

      // Save to database
      const { error: dbError } = await supabase
        .from('gallery_photos')
        .insert({
          url: publicUrl,
          file_name: file.name,
        });

      if (dbError) {
        toast({
          title: 'Kayıt Hatası',
          description: `${file.name} veritabanına kaydedilemedi.`,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Başarılı',
          description: `${file.name} yüklendi.`,
        });
      }
    }

    await fetchPhotos();
    setUploading(false);
    e.target.value = '';
  };

  const handleDelete = async (photo: GalleryPhoto) => {
    // Extract file path from URL
    const urlParts = photo.url.split('/');
    const fileName = urlParts[urlParts.length - 1];

    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from('gallery')
      .remove([fileName]);

    if (storageError) {
      toast({
        title: 'Silme Hatası',
        description: 'Dosya silinirken hata oluştu.',
        variant: 'destructive',
      });
      return;
    }

    // Delete from database
    const { error: dbError } = await supabase
      .from('gallery_photos')
      .delete()
      .eq('id', photo.id);

    if (dbError) {
      toast({
        title: 'Silme Hatası',
        description: 'Veritabanından silinirken hata oluştu.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Başarılı',
        description: 'Fotoğraf silindi.',
      });
      await fetchPhotos();
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Yurdem Lojistik" className="h-10" />
            <h1 className="font-heading text-xl font-bold text-foreground">
              Admin Panel
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-muted-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Siteye Dön
            </Button>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="text-destructive hover:text-destructive"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Upload Section */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Fotoğraf Yükle
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            Galeriye eklemek istediğiniz fotoğrafları seçin. Birden fazla fotoğraf seçebilirsiniz.
          </p>
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
              disabled={uploading}
              className="max-w-md"
            />
            {uploading && (
              <div className="flex items-center gap-2 text-primary">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Yükleniyor...</span>
              </div>
            )}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Image className="h-5 w-5 text-primary" />
            Yüklenen Fotoğraflar ({photos.length})
          </h2>

          {loadingPhotos ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Henüz fotoğraf yüklenmemiş.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={photo.url}
                    alt={photo.file_name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(photo)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Sil
                    </Button>
                  </div>
                  <div className="p-2 bg-background">
                    <p className="text-xs text-muted-foreground truncate">
                      {photo.file_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
