import dynamic from 'next/dynamic';

const PageWrapper = dynamic(() => import('../components/PageWrapper'));
const Listing = dynamic(() => import('../components/Listing'));

export default function Home() {
  return (
    <PageWrapper>
      <Listing />
    </PageWrapper>
  );
}
