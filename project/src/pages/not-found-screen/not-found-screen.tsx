import { Link } from 'react-router-dom';

export default function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">
        <u>Back to Main page</u>
      </Link>
    </>
  );
}
