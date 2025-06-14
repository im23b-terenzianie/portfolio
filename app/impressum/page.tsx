'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
    const router = useRouter();
    return (
        <main className="max-w-2xl mx-auto py-16 px-4">
            <Button
                variant="ghost"
                onClick={() => router.back()}
                className="mb-8 flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </Button>
            <h1 className="text-3xl font-bold mb-6">Impressum / Legal Disclosure</h1>
            <p>
                Information according to § 3 of the Swiss Federal Act against Unfair Competition (UWG)
                <br /><br />
                Enzo Terenziani<br />
                Greifenseestrasse 20<br />
                8050 Zurich<br />
                Switzerland
            </p>
            <p className="mt-6">
                <strong>Contact:</strong>
                <br />
                E-Mail: enzo.terenziani@email.ch
            </p>
            <p className="mt-6 text-sm text-neutral-500">
                Responsible for the content of this website:<br />
                Enzo Terenziani, address as above
            </p>
            <p className="mt-6 text-xs text-neutral-400">
                This website is a private portfolio and not intended for commercial purposes.
            </p>
        </main>
    );
}