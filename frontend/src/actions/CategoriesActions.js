import { FETCH_CATEGORIES } from '../utils/constants'

export const getCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  categories,
});

