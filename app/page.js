import Image from "next/image";

export default function Home() {
  return (
    <div className="" id="home">
        <div className="flex justify-between">
            <h1>Enzo Terenziani</h1>
            <Image
                src="/IMG_0394.JPG"
                alt="Enzo Terenziani"
                width={300}
                height={300}
                className="rounded-full"
            />

        </div>


    </div>
  );
}
