import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.search}>
      <p>
        Find contacts by name
        <input
          className={css.searchInput}
          type="text"
          value={filter}
          onChange={(event) => {
            dispatch(changeFilter(event.target.value));
          }}
        />
      </p>
    </div>
  );
}
