import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create client if we have valid credentials
const isValidSupabaseConfig = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key'

export const supabase = isValidSupabaseConfig 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

export const submitContactForm = async (data: ContactFormData) => {
  // If Supabase is not configured, simulate success for demo purposes
  if (!supabase) {
    console.log('Demo mode: Contact form data would be submitted:', data)
    return { success: true }
  }
  
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data])
  
  if (error) {
    throw error
  }
  
  return { success: true }
}