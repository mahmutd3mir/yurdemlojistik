-- Create gallery_photos table for storing uploaded photos
CREATE TABLE public.gallery_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

-- Everyone can view photos (public gallery)
CREATE POLICY "Anyone can view gallery photos"
ON public.gallery_photos
FOR SELECT
USING (true);

-- Only authenticated users can insert photos
CREATE POLICY "Authenticated users can insert photos"
ON public.gallery_photos
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Only authenticated users can delete photos
CREATE POLICY "Authenticated users can delete photos"
ON public.gallery_photos
FOR DELETE
TO authenticated
USING (true);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true);

-- Storage policies
CREATE POLICY "Anyone can view gallery images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can upload gallery images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can delete gallery images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'gallery');