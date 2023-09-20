import React from "react";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  slug: string;
}
const ResourceCard = ({ id, title, image, downloadNumber, slug }: Props) => {
  return (
    <Card className="w-full max-w-filt border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${id}`}>
        <CardHeader>
          <div className="">
            <Image
              src={image}
              alt={title}
              className="h-full rounde-md object-cover"
              height={384}
              width={440}
            />
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default ResourceCard;
