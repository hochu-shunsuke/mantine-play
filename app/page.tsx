'use client';

import Image from "next/image";
import { useComputedColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';

import { ActionToggle } from "@/components/ActionToggle";
import { AutocompleteLoading } from "@/components/AutocompleteLoading";
import { CheckboxCard } from "@/components/CheckboxCard";
import { ContainedInputs } from "@/components/ContainedInputs";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function Home() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen p-8 sm:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダーセクション - 画面中央に配置 */}
        <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 112px)', marginTop: '-28px' }}>
          <header className="text-center">
            <div className="mb-12">
              <Image
                src={mounted && computedColorScheme === 'dark' ? "/next-dark.svg" : "/next-light.svg"}
                alt="Next.js logo"
                width={240}
                height={50}
                priority
                className="mx-auto"
              />
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-8">
              Welcome to <span className="text-blue-500">Next.js</span> with <span className="text-blue-500">Mantine</span>
            </h1>
          </header>
        </div>

        {/* コンポーネントセクション */}
        <div className="space-y-32">
          {/* Color scheme toggle */}
          <section className="py-20">
            <h2 className="text-3xl font-semibold mb-16 text-center">Color scheme toggle</h2>
            <div className="max-w-2xl mx-auto">
              <ActionToggle />
            </div>
          </section>

          {/* Autocomplete async data */}
          <section className="py-20">
            <h2 className="text-3xl font-semibold mb-16 text-center">Autocomplete async data</h2>
            <div className="max-w-2xl mx-auto">
              <AutocompleteLoading />
            </div>
          </section>

          {/* Card with checkbox */}
          <section className="py-20">
            <h2 className="text-3xl font-semibold mb-16 text-center">Card with checkbox</h2>
            <div className="max-w-2xl mx-auto">
              <CheckboxCard />
            </div>
          </section>

          {/* Inputs with label inside input */}
          <section className="py-20">
            <h2 className="text-3xl font-semibold mb-16 text-center">Inputs with label inside input</h2>
            <div className="max-w-2xl mx-auto">
              <ContainedInputs />
            </div>
          </section>

          {/* Number input with currency select */}
          <section className="py-20">
            <h2 className="text-3xl font-semibold mb-16 text-center">Number input with currency select</h2>
            <div className="max-w-2xl mx-auto">
              <CurrencyInput />
            </div>
          </section>

          {/* 今後のコンポーネント用のセクション例 */}
          {/* 
          <section className="py-20">
            <h2 className="text-3xl font-semibold mb-16 text-center">Button Examples</h2>
            <div className="flex justify-center gap-6">
              <Button size="lg" variant="filled">Primary Button</Button>
              <Button size="lg" variant="outline">Outline Button</Button>
            </div>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-semibold mb-16 text-center">Form Components</h2>
            <div className="max-w-lg mx-auto space-y-6">
              <TextInput size="lg" label="Your Name" placeholder="Enter your name" />
              <Select size="lg" label="Country" data={countries} />
            </div>
          </section>
          */}
        </div>
      </div>
    </div>
  );
}
