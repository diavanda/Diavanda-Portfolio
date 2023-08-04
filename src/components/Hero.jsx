import styles from '../styles/Hero.modules.css';
const Hero = () => {
  	
  	return (
    		<div className={styles.hero}>
      			<div className={styles.herologo} />
      			<div className={styles.herologo}>
        				<div className={styles.captionTitleParent}>
          					<div className={styles.captionTitle}>
            						<b className={styles.allanFebrianDiavanda1}>Allan Febrian Diavanda</b>
            						<div className={styles.aUiuxDesigner}>a UI/UX designer and Front end developer based in Surabaya, Indonesia</div>
          					</div>
          					<div className={styles.button}>
            						<div className={styles.button1}>Let's Collaborate</div>
            						</div>
          					</div>
        				</div>
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
            						<div className={styles.about}>works</div>
            						<div className={styles.about}>contact</div>
          					</div>
        				</div>
      			</div>);
      			};
      			
      			export default Hero;
      			