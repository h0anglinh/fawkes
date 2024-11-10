export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  backstage: {
    Tables: {
      workers: {
        Row: {
          created_at: string | null
          email: string
          full_name: string
          position: Database["public"]["Enums"]["position_type"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name: string
          position?: Database["public"]["Enums"]["position_type"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string
          position?: Database["public"]["Enums"]["position_type"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  customers: {
    Tables: {
      customers: {
        Row: {
          email: string
          name: string | null
          phone: string | null
        }
        Insert: {
          email: string
          name?: string | null
          phone?: string | null
        }
        Update: {
          email?: string
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      feedbacks: {
        Row: {
          created: string
          customer_email: string
          is_solved: boolean | null
          message: string
        }
        Insert: {
          created?: string
          customer_email: string
          is_solved?: boolean | null
          message: string
        }
        Update: {
          created?: string
          customer_email?: string
          is_solved?: boolean | null
          message?: string
        }
        Relationships: [
          {
            foreignKeyName: "feedbacks_customer_email_fkey"
            columns: ["customer_email"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["email"]
          },
        ]
      }
      messages: {
        Row: {
          created_at: string
          email: string
          id: number
          msg_body: string
          name: string | null
          phone_number: string | null
          status: Database["customers"]["Enums"]["e_message_status"]
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          msg_body: string
          name?: string | null
          phone_number?: string | null
          status?: Database["customers"]["Enums"]["e_message_status"]
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          msg_body?: string
          name?: string | null
          phone_number?: string | null
          status?: Database["customers"]["Enums"]["e_message_status"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      e_message_status:
        | "inbox"
        | "not started"
        | "in progress"
        | "on hold"
        | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      faq: {
        Row: {
          answer: string
          id: number
          is_published: boolean | null
          question: string
        }
        Insert: {
          answer: string
          id?: number
          is_published?: boolean | null
          question: string
        }
        Update: {
          answer?: string
          id?: number
          is_published?: boolean | null
          question?: string
        }
        Relationships: []
      }
      faq_localization: {
        Row: {
          faq_id: number
          language_code: string
          localization_id: number
          localized_answer: string | null
          localized_question: string | null
        }
        Insert: {
          faq_id: number
          language_code: string
          localization_id?: number
          localized_answer?: string | null
          localized_question?: string | null
        }
        Update: {
          faq_id?: number
          language_code?: string
          localization_id?: number
          localized_answer?: string | null
          localized_question?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_faq_id"
            columns: ["faq_id"]
            isOneToOne: false
            referencedRelation: "faq"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_faq_id"
            columns: ["faq_id"]
            isOneToOne: false
            referencedRelation: "vw_faq"
            referencedColumns: ["faq_id"]
          },
          {
            foreignKeyName: "fk_language_code"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["language_code"]
          },
        ]
      }
      languages: {
        Row: {
          country: string | null
          flag: string | null
          language_code: string
          name: string | null
          name_official: string | null
          text_direction: Database["public"]["Enums"]["e_lang_text_direction"]
        }
        Insert: {
          country?: string | null
          flag?: string | null
          language_code: string
          name?: string | null
          name_official?: string | null
          text_direction?: Database["public"]["Enums"]["e_lang_text_direction"]
        }
        Update: {
          country?: string | null
          flag?: string | null
          language_code?: string
          name?: string | null
          name_official?: string | null
          text_direction?: Database["public"]["Enums"]["e_lang_text_direction"]
        }
        Relationships: []
      }
      salon_information: {
        Row: {
          description: string | null
          info_type: string
          label: string | null
          value: string
        }
        Insert: {
          description?: string | null
          info_type: string
          label?: string | null
          value: string
        }
        Update: {
          description?: string | null
          info_type?: string
          label?: string | null
          value?: string
        }
        Relationships: []
      }
      salon_information_localization: {
        Row: {
          info_type: string
          language_code: string
          localized_description: string | null
          localized_label: string | null
        }
        Insert: {
          info_type: string
          language_code: string
          localized_description?: string | null
          localized_label?: string | null
        }
        Update: {
          info_type?: string
          language_code?: string
          localized_description?: string | null
          localized_label?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "salon_information_localization_info_type_fkey"
            columns: ["info_type"]
            isOneToOne: false
            referencedRelation: "salon_information"
            referencedColumns: ["info_type"]
          },
          {
            foreignKeyName: "salon_information_localization_info_type_fkey"
            columns: ["info_type"]
            isOneToOne: false
            referencedRelation: "vw_salon_info_with_localization"
            referencedColumns: ["info_type"]
          },
          {
            foreignKeyName: "salon_information_localization_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["language_code"]
          },
        ]
      }
    }
    Views: {
      vw_faq: {
        Row: {
          faq_id: number | null
          flag: string | null
          is_published: boolean | null
          language_code: string | null
          localization_id: number | null
          localized_answer: string | null
          localized_question: string | null
          original_answer: string | null
          original_question: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_language_code"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["language_code"]
          },
        ]
      }
      vw_salon_info_with_localization: {
        Row: {
          description: string | null
          info_type: string | null
          label: string | null
          language_code: string | null
          localized_description: string | null
          localized_label: string | null
          value: string | null
        }
        Relationships: [
          {
            foreignKeyName: "salon_information_localization_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["language_code"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      E_LANG_CODE: "CS" | "EN" | "VI"
      E_LANG_REGION:
        | "Africa"
        | "Asia"
        | "Europe"
        | "North America"
        | "South America"
        | "Oceania"
        | "Antarctica"
        | "Middle East"
        | "Central America"
        | "Caribbean"
      e_lang_text_direction: "Left-to-Right" | "Right-to-Left"
      position_type:
        | "unauthorized"
        | "in training"
        | "staff member"
        | "developer"
        | "owner"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  salon_schedule: {
    Tables: {
      opening_hours: {
        Row: {
          closing_time: string | null
          day_of_week: string
          is_closed: boolean | null
          opening_time: string | null
          pause_end: string | null
          pause_start: string | null
        }
        Insert: {
          closing_time?: string | null
          day_of_week: string
          is_closed?: boolean | null
          opening_time?: string | null
          pause_end?: string | null
          pause_start?: string | null
        }
        Update: {
          closing_time?: string | null
          day_of_week?: string
          is_closed?: boolean | null
          opening_time?: string | null
          pause_end?: string | null
          pause_start?: string | null
        }
        Relationships: []
      }
      special_day_localizations: {
        Row: {
          language_code: string
          localized_description: string | null
          localized_name: string | null
          special_day_date: string
        }
        Insert: {
          language_code: string
          localized_description?: string | null
          localized_name?: string | null
          special_day_date: string
        }
        Update: {
          language_code?: string
          localized_description?: string | null
          localized_name?: string | null
          special_day_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_special_day"
            columns: ["special_day_date"]
            isOneToOne: false
            referencedRelation: "special_days"
            referencedColumns: ["date"]
          },
        ]
      }
      special_days: {
        Row: {
          closing_time: string | null
          date: string
          id: number
          is_closed: boolean | null
          name: string | null
          opening_time: string | null
        }
        Insert: {
          closing_time?: string | null
          date: string
          id?: number
          is_closed?: boolean | null
          name?: string | null
          opening_time?: string | null
        }
        Update: {
          closing_time?: string | null
          date?: string
          id?: number
          is_closed?: boolean | null
          name?: string | null
          opening_time?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      enum_day_in_week:
        | "MONDAY"
        | "TUESDAY"
        | "WEDNESDAY"
        | "THURSDAY"
        | "FRIDAY"
        | "SATURDAY"
        | "SUNDAY"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  services: {
    Tables: {
      additionalservice_translations: {
        Row: {
          additionalservice_id: number
          description: string | null
          language_code: string
          name: string
        }
        Insert: {
          additionalservice_id: number
          description?: string | null
          language_code: string
          name: string
        }
        Update: {
          additionalservice_id?: number
          description?: string | null
          language_code?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "additionalservice_translations_additionalservice_id_fkey"
            columns: ["additionalservice_id"]
            isOneToOne: false
            referencedRelation: "additionalservices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "additionalservice_translations_additionalservice_id_fkey"
            columns: ["additionalservice_id"]
            isOneToOne: false
            referencedRelation: "vw_additionalservice"
            referencedColumns: ["additionalservice_id"]
          },
        ]
      }
      additionalservices: {
        Row: {
          description: string | null
          id: number
          is_published: boolean | null
          name: string
          price: number
          service_id: number
        }
        Insert: {
          description?: string | null
          id?: number
          is_published?: boolean | null
          name: string
          price: number
          service_id: number
        }
        Update: {
          description?: string | null
          id?: number
          is_published?: boolean | null
          name?: string
          price?: number
          service_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "additionalservices_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "additionalservices_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "vw_service"
            referencedColumns: ["service_id"]
          },
        ]
      }
      categories: {
        Row: {
          description: string | null
          id: number
          image_url: string | null
          name: string
          order_by: number | null
        }
        Insert: {
          description?: string | null
          id?: number
          image_url?: string | null
          name: string
          order_by?: number | null
        }
        Update: {
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string
          order_by?: number | null
        }
        Relationships: []
      }
      category_translations: {
        Row: {
          category_id: number
          description: string | null
          language_code: string
          name: string
        }
        Insert: {
          category_id: number
          description?: string | null
          language_code: string
          name: string
        }
        Update: {
          category_id?: number
          description?: string | null
          language_code?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "category_translations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_translations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category_view"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "category_translations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "vw_category"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "category_translations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "vw_service"
            referencedColumns: ["category_id"]
          },
        ]
      }
      service_translations: {
        Row: {
          description: string | null
          language_code: string
          name: string
          service_id: number
        }
        Insert: {
          description?: string | null
          language_code: string
          name: string
          service_id: number
        }
        Update: {
          description?: string | null
          language_code?: string
          name?: string
          service_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_service_translations_service_id"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_service_translations_service_id"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "vw_service"
            referencedColumns: ["service_id"]
          },
          {
            foreignKeyName: "service_translations_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_translations_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "vw_service"
            referencedColumns: ["service_id"]
          },
        ]
      }
      services: {
        Row: {
          category_id: number
          description: string | null
          duration: string | null
          id: number
          is_published: boolean | null
          name: string
          order_by: number | null
          price: number
          price_type:
            | Database["services"]["Enums"]["enum_service_price_type"]
            | null
        }
        Insert: {
          category_id: number
          description?: string | null
          duration?: string | null
          id?: number
          is_published?: boolean | null
          name: string
          order_by?: number | null
          price: number
          price_type?:
            | Database["services"]["Enums"]["enum_service_price_type"]
            | null
        }
        Update: {
          category_id?: number
          description?: string | null
          duration?: string | null
          id?: number
          is_published?: boolean | null
          name?: string
          order_by?: number | null
          price?: number
          price_type?:
            | Database["services"]["Enums"]["enum_service_price_type"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category_view"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "vw_category"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "vw_service"
            referencedColumns: ["category_id"]
          },
        ]
      }
    }
    Views: {
      category_view: {
        Row: {
          category_id: number | null
          category_image: string | null
          category_order: number | null
          default_description: string | null
          default_name: string | null
          service_count: number | null
        }
        Relationships: []
      }
      vw_additionalservice: {
        Row: {
          additionalservice_id: number | null
          default_name: string | null
          flag: string | null
          is_published: boolean | null
          language_code: string | null
          price: number | null
          service_id: number | null
          service_name: string | null
          translated_description: string | null
          translated_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "additionalservices_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "additionalservices_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "vw_service"
            referencedColumns: ["service_id"]
          },
        ]
      }
      vw_category: {
        Row: {
          category_id: number | null
          default_name: string | null
          language_code: string | null
          language_flag: string | null
          service_count: number | null
          translated_description: string | null
          translated_name: string | null
        }
        Relationships: []
      }
      vw_service: {
        Row: {
          additional_services_count: number | null
          category_id: number | null
          category_name: string | null
          default_service_name: string | null
          duration: string | null
          is_published: boolean | null
          language_code: string | null
          language_flag: string | null
          price: number | null
          price_type:
            | Database["services"]["Enums"]["enum_service_price_type"]
            | null
          service_id: number | null
          translated_description: string | null
          translated_service_name: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      enum_service_price_type: "EXACT" | "ESTIMATE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
