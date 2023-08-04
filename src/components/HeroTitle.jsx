import styles from '../styles/HeroTitle.module.css';
const HeroTitle = () => {
  	
  	return (
    		<div className={styles.herotitle}>
      			<img className={styles.meshIcon} alt="mesh" src="Mesh.svg" />
      			<div className={styles.captionTitleParent}>
        				<div className={styles.captionTitle}>
          					<b className={styles.allanFebrianDiavanda1}>Allan Febrian Diavanda</b>
          					<div className={styles.aUiuxDesigner}>a UI/UX designer and Front end developer based in Surabaya, Indonesia</div>
        				</div>
        				<div className={styles.button}>
          					<div className={styles.button1}>Let's Collaborate</div>
          					</div>
        				</div>
      			</div>);
      			};
      			
export default HeroTitle;
      			