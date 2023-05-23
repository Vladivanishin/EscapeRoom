import { InfinitySpin } from 'react-loader-spinner';

export default function LoadingScreen(): JSX.Element {
  return (
    <div>
      <h2>Loading...</h2>
      <InfinitySpin
        width='200'
        color="#f2890f"
      />
    </div >
  );
}
