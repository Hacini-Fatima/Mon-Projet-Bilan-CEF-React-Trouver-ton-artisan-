
import FilterCategory from './FilterCategory';

export default function CategoryPages({ category }) {
  return (
    <div>
      <h1>{category}</h1>
      <FilterCategory category={category} />
    </div>
  );
}