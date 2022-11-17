import Link from 'next/link';

export default () => (
  <>
    <h1>Index</h1>
    <Link href="/advertise-something" passHref legacyBehavior>
      <a>/advertise-something</a>
    </Link>
  </>
);
