import { Destination } from "@/libs/schemas/destination.schema.ts";

export default function DestinationCard(props: Destination) {
  return (
    <div className="flex flex-col items-center justify-center bg-white border-2 border-yellow-500">
      <div className="border-2 border-red-500">
        <img
          className="object-cover max-h-[24rem] xl:max-h-[34rem]"
          src={props.image}
        />
      </div>
      <p className="my-3 text-2xl font-semibold border-2 border-blue-500">
        {props.name}
      </p>
    </div>
  );
}
