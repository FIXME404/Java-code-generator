import Logo from '../../imgs/Logo.png';
import styles from './ShowcaseSection.module.scss';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Navbar from './Navbar';

function ShowcaseSection() {
  return (
    <section id='showcase' className={styles.showcase}>
      <div className={styles['showcase__navbar']}>
        <Navbar />
      </div>

      <div className={styles['showcase__content']}>
        <div className={styles['showcase__content--heading']}>
          {/* Heading */}
          <h1>Java Class Generator</h1>
        </div>

        <div className={styles['showcase__content--subheading']}>
          <div className={styles['showcase__content--subheading__content']}>
            {/* Subheading */}
            <h2>Generate a Java Class Quickly for your Project!</h2>

            {/* Get Started Button */}
            <a href='#input'>GET STARTED</a>

            {/* Bookmark Reminder */}
            <h3>
              Don't forget to{' '}
              <strong>
                BOOKMARK
                <BookmarkIcon />
              </strong>{' '}
              this website!
            </h3>
          </div>

          {/* Logo */}
          <div className={styles['showcase__content--subheading__logo']}>
            <img src={Logo} alt='Logo' height={'250'} width={'400'} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
