// supabase/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()


// URL and key of Supabase local
const supabaseUrl = 'http://127.0.0.1:54321';
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getData() {
  const { data, error } = await supabase.from('users').select('*')
  console.log(data, error)
}

getData()
