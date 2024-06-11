import styles from "./FullScreenMode.module.css";

export function FullScreenMode({children, isOpen}) {

  if(isOpen===false) return null;
  return (
<div className={styles.container}>
  {children}
</div>
  )
}