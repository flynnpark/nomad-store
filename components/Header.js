import Link from 'next/link';
import { red } from 'ansi-colors';

const headerStyles = {
  background: 'red'
};

export default () => (
  <header style={headerStyles}>
    <nav>
      <ul>
        <li>
          <Link>
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="/about">About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      ul {
        display: flex;
      }
      ul li {
        margin-right: 20px;
      }
      header {
        background-color: peru;
        color: white;
      }
    `}</style>
  </header>
);
