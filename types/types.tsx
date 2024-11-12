export type Navigation = {
  navigate: (scene: string) => void;
};

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
  image: string;
}

export interface Ingredient {
  ingredient_form_name: string;
  details: IngredientDetail;
}

interface IngredientDetail {
  name: string;
  description: string;
  promotion: boolean;
  original_price: number;
  merchant_id: string;
  merchant_name: string;
  start_date: string;
  type: string;
  item_id: number;
  image_url: string;
  current_price: number;
  ingredient_forms_id: number;
  merchant_logo: string;
  global_id: string;
  end_date: string;
  savings: number;
  serving_size: number;
}
