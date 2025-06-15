'use client';

import Image from "next/image";
import { ActionToggle } from "@/components/ActionToggle";
import { useComputedColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Home() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src={mounted && computedColorScheme === 'dark' ? "/next-dark.svg" : "/next-light.svg"}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to <span className="text-blue-500">Next.js</span> with <span className="text-blue-500">Mantine</span>
        </h1>
      </main>
      <ActionToggle />
    </div>
  );
}
