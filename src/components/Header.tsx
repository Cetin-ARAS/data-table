import React from 'react';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
import YoutubeIcon from './Icons/YoutubeIcon';
import InstagramIcon from './Icons/InstagramIcon';
import BeIcon from './Icons/BeIcon';
import LinkedIcon from './Icons/LinkedinIcon';

const Header = () => {
  return (
    <header className="bg-white h-[60px] lg:h-[104px]">
      <Container className="flex items-center justify-between h-full">
        <Logo />
        <nav className="lg:block hidden">
          <ul className="flex items-center gap-[112px] text-[14px]">
            <li>
              <Link href="#">Hakkımızda</Link>
            </li>
            <li>
              <Link href="#">Juri - Yarışma Yazılımı</Link>
            </li>
            <li>
              <Link href="#">Word Ninja</Link>
            </li>
            <li>
              <Link href="#">Word Pyramids</Link>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-[14px]">
          <li>
            <Link href="#" target="_blank">
              <YoutubeIcon />
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <BeIcon />
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <LinkedIcon />
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
