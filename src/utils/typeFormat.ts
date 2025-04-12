import { CATEGORIES } from '@/config/products';

export const typeFormat = (types: number[]) => {
    if (!Array.isArray(types)) return ''
  
    return types
        .filter(num => num != 1)
        .map((num) => CATEGORIES[`type_${num}` as keyof typeof CATEGORIES])
        .filter(Boolean)
        .join(' / ')
}