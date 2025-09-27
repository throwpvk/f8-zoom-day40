import { Outlet } from "react-router-dom";
import style from "./DefaultLayout.module.scss";

function DefaultLayout() {
  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
}
export default DefaultLayout;
