import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/listings/");
  const data = await res.json();
  return { props: { listing: data } };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer" />
      <Card>
        <Card.Body>
          <p>Darsh Parmar</p>
          <p>
            Hi. I love to play video games and watch anime in my spare time.
          </p>
          <Link href={`/listing/${listing._id}`}>Specific Listing</Link>
        </Card.Body>
        <ListingDetails listing={listing} />
      </Card>
    </>
  );
}
