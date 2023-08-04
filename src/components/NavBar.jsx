import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  	
  	return (
    		<div className={styles.navbar}>
      			<div className={styles.logo}>
        				<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
      			</div>
      			<div className={styles.twitterSvgParent}>
        				<img className={styles.twitterSvg1} alt="" src="Twitter.svg" />
        				<img className={styles.linkedinSvgIcon} alt="" src="LinkedIn.svg" />
        				<img className={styles.instagramSvgIcon1} alt="" src="Instagram.svg" />
        				<img className={styles.figmaSvgIcon1} alt="" src="Figma.svg" />
      			</div>
      			<div className={styles.aboutParent}>
        				<div className={styles.about}>about</div>
        				<div className={styles.about}>portfolio</div>
        				<div className={styles.about}>blog</div>
        				<div className={styles.about}>contact</div>
      			</div>
    		</div>);
};

export default NavBar;
