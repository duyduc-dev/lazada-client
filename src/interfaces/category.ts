export interface CategoriesTree {
  id?: string;
  name?: string;
  slug?: string;
  level?: number;
  image?: string;
  children?: CategoriesTree[];
}

export interface CategoryModel {
  id?: string;
  name?: string;
  slug?: string;
  level?: number;
  image?: string;
  parentId?: string;
}
