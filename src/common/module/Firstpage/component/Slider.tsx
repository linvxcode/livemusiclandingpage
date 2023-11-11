"use client";

import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import InfiniteLoopSlider from "@/common/component/element/InfiniteLoopSlider";
import { STACKS } from "@/common/constant/stack";

const Tag = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 shadow-sm border border-neutral-300 dark:border-neutral-700">
    <span className="text-lg font-bold">{title}</span>
  </div>
);

const Sliders = () => {
  const [shuffledSkills, setShuffledSkills] = useState<any>([]);

  useEffect(() => {
    const skillsArray = Object.entries(STACKS);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 2 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index} isReverse={index === 1}>
        {sliderSkills.map(([title], index) => (
          <Tag key={index} title={title} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <div className="space-y-8 mt-3">
      <div className="flex w-full">
        <div className="relative flex  flex-col gap-y-4 justify-center py-2 w-full overflow-hidden">
          {sliders}
          <StyledFade className="flex fade" />
        </div>
      </div>
    </div>
  );
};

export default Sliders;

const StyledFade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #171717,
    transparent 20%,
    transparent 80%,
    #171717
  );
  position: absolute;
  inset: 0;
`;
