import Link from 'next/link';

export default () => (
  <header>
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
  </header>
);
