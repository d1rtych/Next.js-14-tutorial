'use client';

import { notFound } from 'next/navigation';

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

export default function Product({params}: {
  params: {
    productId: string;
    reviewId: string;
  }
}) {
  // const random = getRandomInt(2);
  //
  // if (random === 1) {
  //   throw new Error('Review not found!');
  // }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <>
      <h1>Review {params?.reviewId} for product {params?.productId}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Architecto deserunt dignissimos, eos explicabo hic illum ipsam
        labore magnam nam nihil pariatur possimus qui quia sed sint tempora
        totam voluptas voluptatem?
      </p>
    </>
  );
}
