import { createClient } from '@supabase/supabase-js';

const link = "https://cppbuhwmoalevdyrzkyb.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwcGJ1aHdtb2FsZXZkeXJ6a3liIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3Nzc0OTc0OSwiZXhwIjoxOTkzMzI1NzQ5fQ.dK7b6KUWxZq1LAIvFr5_BMqTLE_SlyAJKSjA0Nzzm0M"

export const supabase = createClient(link, key);
