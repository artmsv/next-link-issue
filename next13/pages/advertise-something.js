import Link from 'next/link';

export default ({ text }) => (
  <>
    <h1>Advertising/something</h1>
    <p>{text}</p>
    <Link href="/">Go to Index</Link>
  </>
);

export const getStaticProps = () => {
  return {
    props: {
      text: 'Some text',
    },
  };
};
