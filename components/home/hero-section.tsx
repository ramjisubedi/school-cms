'use client';

import TriggerFormModal from "@/components/home/trigger-form-modal";
import { HeroType } from "@/types/contents/home";

export default function HeroSection({ data }: { data: HeroType }) {
  return (
    <section
      className="relative h-[700px] bg-gradient-to-r from-primary to-blue-600 bg-cover bg-center"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 mx-auto pt-80 flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
        {data.title && (
          <h1 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight">
            {data.title}
          </h1>
        )}
        <p className="mb-8 text-lg md:text-xl max-w-2xl">{data.subTitle}</p>
        <TriggerFormModal
          className="px-8 py-3 bg-[#d19c1f] hover:bg-[#ac811b] text-gray-50 transition-colors duration-300 rounded-lg font-medium"
          triggerText={data.buttonText ? `${data.buttonText} →` : undefined}
        />
      </div>
    </section>
  );
}
