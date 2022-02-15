import { useState } from "react";

import classNames from "classnames/bind";
import { ConCategory2 } from "@/types/brandList";

import styles from "./styles.module.scss";
import { brandStores } from "constants/BRAND_TEST_MOCK";
import BrandCategory from "@/components/brand/brand-category";
import BrandGrid from "../brand-grid";

const cx = classNames.bind(styles);

interface BrandMainProps {
  conCategory1: ConCategory2;
}

const Brand = ({ conCategory1 }: BrandMainProps): JSX.Element => {
  const [curCategoryIdx, setCurCategoryIdx] = useState(0);

  const categoryValues = Object.entries(conCategory1);

  return (
    <div>
      <div className={cx("nav-bar")}>
        {brandStores.map((sort, sortIdx) => {
          return (
            <BrandCategory
              key={sortIdx}
              sortIdx={sortIdx}
              // name={sort.name}
              setCurCategoryIdx={setCurCategoryIdx}
            />
          );
        })}
      </div>
      <div className={cx("main-wrapper")}>
        {categoryValues.map((store, storeIdx) => (
          <BrandGrid
            key={storeIdx}
            id={store[1].id}
            name={store[1].name}
            imageUrl={store[1].imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;
