// lib/supabaseClient.ts

import { Database } from "@/types/database";
import { createClient } from "@supabase/supabase-js";

// Nahraď těmito hodnotami své Supabase URL a anon key
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
