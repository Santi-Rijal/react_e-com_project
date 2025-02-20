import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components.
import ItemCard from "../components/ItemCard";
import MoreOptions from "../components/MoreOptions";

// Context.
import { Context } from "../context/ContextProvider";

// A page containing all the women's clothing.
const WomenClothing = () => {
  const { pending, data, handlePageChange, pagenum } = useContext(Context);

  return (
    <div className="clothing">
      <div className="items-container">
        <MoreOptions />
        {!pending && (
          <div className="items">
            {data?.map((itemObj) => (
              <Link
                className="link"
                to={itemObj?.pk}
                state={{ itemObj: itemObj }}
                key={itemObj?.code}
              >
                <ItemCard itemObj={itemObj} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="pages">
        <span
          value="0"
          onClick={handlePageChange}
          className={pagenum === 0 ? "clicked" : ""}
        >
          1
        </span>
        <span
          value="1"
          onClick={handlePageChange}
          className={pagenum === 1 ? "clicked" : ""}
        >
          2
        </span>
        <span
          value="2"
          onClick={handlePageChange}
          className={pagenum === 2 ? "clicked" : ""}
        >
          3
        </span>
        <span
          value="3"
          onClick={handlePageChange}
          className={pagenum === 3 ? "clicked" : ""}
        >
          4
        </span>
        <span
          value="4"
          onClick={handlePageChange}
          className={pagenum === 4 ? "clicked" : ""}
        >
          5
        </span>
      </div>
    </div>
  );
};

export default WomenClothing;
