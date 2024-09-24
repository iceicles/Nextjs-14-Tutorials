'use client'; // to ensure we can recover on client side

import { notFound } from 'next/navigation';

// inducing an error
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error('Error loading review');
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
