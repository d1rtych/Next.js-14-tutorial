import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 1000);
  })

  return {
    title: `Product ${title}`,
  }
}

export default function Product({params}: Props) {
  return (
    <>
      <h1>Product {params?.productId} details:</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Architecto deserunt dignissimos, eos explicabo hic illum ipsam
        labore magnam nam nihil pariatur possimus qui quia sed sint tempora
        totam voluptas voluptatem?
      </p>
    </>
  );
}
