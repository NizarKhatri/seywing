import Link from 'next/link';
import styles from '../../../styles/Header.module.css';
import { Button } from 'reactstrap';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className={styles.topNav}>
          <Image alt="logo" src={'/images/SeywingLogo.png'} width={134} height={18} />
          <nav>
            <ul>
              <li>
                <Link href="/about-us" passHref>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  Partner with Us
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Button outline>Login</Button>
            <Button color="danger">Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
