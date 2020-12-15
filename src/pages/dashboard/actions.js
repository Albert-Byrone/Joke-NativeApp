const loadCategoriesSucceeded = ({ categories }) => ({
  type: LOAD_CATEGORIES_SUCCEEDED,
  categories
});

const loadCategoriesFailed = ({ error }) => ({
  type: LOAD_CATEGORIES_FAILED,
  error
});

