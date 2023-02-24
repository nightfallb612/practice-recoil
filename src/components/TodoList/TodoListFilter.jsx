import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../recoil/atoms";

export default function TodoListFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select vaule={filter} onChange={updateFilter}>
        <option vaule="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
