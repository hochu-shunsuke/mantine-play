'use client';

import Image from "next/image";
import { useComputedColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';

import { ComponentSection } from "@/components/ComponentSection";
import { ActionToggle } from "@/components/ActionToggle";
import { AutocompleteLoading } from "@/components/AutocompleteLoading";
import { CheckboxCard } from "@/components/CheckboxCard";
import { ContainedInputs } from "@/components/ContainedInputs";
import { CurrencyInput } from "@/components/CurrencyInput";
import { CustomSwitch } from "@/components/CustomSwitch";
import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { ForgotPasswordInput } from "@/components/ForgotPasswordInput";
import { GradientSegmentedControl } from "@/components/GradientSegmentedControl";
import { ImageCheckboxes } from "@/components/ImageCheckboxes";
import { InputWithButton } from "@/components/InputWithButton";
import { LanguagePicker } from "@/components/LanguagePicker";
import { PasswordStrength } from "@/components/PasswordStrength";
import { ButtonCopy } from "@/components/ButtonCopy";
import { ButtonMenu } from "@/components/ButtonMenu";
import { SplitButton } from "@/components/SplitButton";
import { SliderHover } from "@/components/SliderHover";
import { ButtonProgress } from "@/components/ButtonProgress";
import { SliderIcon } from "@/components/SliderIcon";
import { ArticlesCardsGrid } from "@/components/ArticlesCardsGrid";

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
          <ComponentSection title="Color scheme toggle" layoutType="center">
            <ActionToggle />
          </ComponentSection>

          <ComponentSection title="Autocomplete async data" layoutType="form">
            <AutocompleteLoading />
          </ComponentSection>

          <ComponentSection title="Card with checkbox" layoutType="center">
            <CheckboxCard />
          </ComponentSection>

          <ComponentSection title="Inputs with label inside input" layoutType="form">
            <ContainedInputs />
          </ComponentSection>

          <ComponentSection title="Number input with currency select" layoutType="form">
            <CurrencyInput />
          </ComponentSection>

          <ComponentSection title="Custom switch" layoutType="center">
            <CustomSwitch />
          </ComponentSection>

          <ComponentSection title="Input with floating label" layoutType="center">
            <FloatingLabelInput />
          </ComponentSection>

          <ComponentSection title="Forgot password on input label" layoutType="form">
            <ForgotPasswordInput />
          </ComponentSection>

          <ComponentSection title="Gradient segmented control" layoutType="center">
            <GradientSegmentedControl />
          </ComponentSection>

          <ComponentSection title="Checkbox with image" layoutType="wide">
            <ImageCheckboxes />
          </ComponentSection>

          <ComponentSection title="Checkbox with image" layoutType="wide">
            <InputWithButton />
          </ComponentSection>

          <ComponentSection title="Language picker" layoutType="center">
            <LanguagePicker />
          </ComponentSection>

          <ComponentSection title="Password with strength meter" layoutType="form">
            <PasswordStrength />
          </ComponentSection>
          
          <ComponentSection title="Copy to clipboard button" layoutType="center">
            <ButtonCopy />
          </ComponentSection>

          <ComponentSection title="Button with menu" layoutType="center">
            <ButtonMenu />
          </ComponentSection>

          <ComponentSection title="Button with loading progress" layoutType="form">
            <ButtonProgress />
          </ComponentSection>

          <ComponentSection title="Split button" layoutType="center">
            <SplitButton />
          </ComponentSection>

          <ComponentSection title="Slider with thumb visible on hover" layoutType="form">
            <SliderHover />
          </ComponentSection>

          <ComponentSection title="Slider with icon thumb" layoutType="form">
            <SliderIcon />
          </ComponentSection>

          <ComponentSection title="Articles cards grid" layoutType="wide">
            <ArticlesCardsGrid />
          </ComponentSection>
        </div>
      </div>
    </div>
  );
}
