// interface Data {
//   products: List<Product>;
// }

// export const handler: Handlers<Data> = {
//   async GET(_req, ctx) {
//     const data = await prismaClient;
//     return ctx.render(data);
//   },
// };

// export default function Home(ctx: PageProps<Data>) {
export default function Home() {
  // const { data, url } = ctx;
  // const products = data.products.nodes;
  return (
    <div className="flex items-center justify-center flex-grow-1">
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quam
        dicta cum, commodi odit eum quos. Illo, ipsum facilis praesentium
        nesciunt a quis neque, voluptate non, adipisci quia consequuntur harum!
      </div>
      {
        /* <div
        className="w-11/12 max-w-5xl mx-auto mt-28"
        aria-labelledby="information-heading"
      >
        <h2 id="information-heading" className="sr-only">
          Product List
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10">
          {products.map((product) => <ProductCard product={product} />)}
        </div>
      </div> */
      }
    </div>
  );
}
