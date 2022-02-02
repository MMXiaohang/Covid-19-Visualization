import style from './Category.module.css';

export interface CategoryProps {
  title: string;
  count: number;
  addNumber: number;
  color: string;
}

const Category = (infoItem: { info: CategoryProps }) => {
  const { info } = infoItem;
  return (
    <div style={{ color: info.color }} className={style.category}>
      <p>{info.title}</p>
      <p>{info.count}例</p>
      <p>
        <span className={style.tip}>较昨日</span>
        <span className={style.addNumber}>+{info.addNumber}</span>
      </p>
    </div>
  );
};

export default Category;
