import style from "../css/header/mbmenu.module.css";
export const MbMenu = () => {
  return (
    <div className={style["mb-menu"]}>
      <div className={style["mb-inner"]}>
        <ul className={style["mb-nav"]}>
          <li>
            <a href="#" alt="카카오브레인 소식" aria-label="카카오브레인 소식">
              소식
            </a>
          </li>
          <li>
            <a href="#" alt="카카오브레인 팀 & 크루" aria-label="카카오브레인 팀 & 크루">
              팀 & 크루
            </a>
          </li>
          <li>
            <a href="#" alt="카카오브레인 영입" aria-label="카카오브레인 영입">
              영입
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
