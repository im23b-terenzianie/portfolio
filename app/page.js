import Image from "next/image";

export default function Home() {
    return (
        <div className="flex items-center justify-start min-h-screen px-0">

            <div className="flex items-center">
                
                <div className="bg-[#fbb8b8] rounded-r-xl p-6 w-[300px]">
                    <h1 className="text-[#2c2c2c] text-lg font-semibold">Enzo Terenziani</h1>
                    <p className="text-[#2c2c2c] text-sm mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a hendrerit lacus
                    </p>
                </div>


                <div className="w-[180px] h-[180px] ml-6 mr-4">
                    <Image
                        src="/IMG_0394.JPG"
                        alt="Enzo Terenziani"
                        width={180}
                        height={180}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
