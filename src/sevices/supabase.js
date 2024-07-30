import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sfclzgwoztpnhwjazjai.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmY2x6Z3dvenRwbmh3amF6amFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNTQxNTksImV4cCI6MjAzNzkzMDE1OX0.cjCDefH0CkZFJYvLkrxzkmMIgPOO77aboxcFWM2sdRA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
