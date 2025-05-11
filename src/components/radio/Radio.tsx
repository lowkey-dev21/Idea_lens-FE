import React from 'react';

interface RadioProps {
  totalSteps: number;
  currentStep: number;
  onStepChange?: (step: number) => void;
}

const Radio: React.FC<RadioProps> = ({ totalSteps = 5, currentStep = 1, onStepChange }) => {
  // Calculate which set of steps to show (1-5 or 6-8)
  const isSecondSet = currentStep > 5;
  const visibleSteps = isSecondSet ? totalSteps - 5 : Math.min(totalSteps, 5);
  const startIndex = isSecondSet ? 5 : 0;

  return (
    <div className="relative w-full pl-[4rem] ">
      <div className="flex items-center justify-center  ">
        <div
          className={`relative flex transition-transform duration-500 ease-in-out
          ${isSecondSet ? "-translate-x-[calc(50%-2rem)]" : "translate-x-0"}`}
        >
          {[...Array(visibleSteps)].map((_, index) => {
            const stepIndex = startIndex + index;
            return (
              <div key={stepIndex} className="flex  items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
                    transition-all duration-200 ease-in-out shrink-0
                    ${
                      stepIndex + 1 <= currentStep
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }
                    hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-700
                  `}
                  onClick={() => onStepChange && onStepChange(stepIndex + 1)}
                >
                  <span className="text-sm font-medium">{stepIndex + 1}</span>
                </div>
                {stepIndex < totalSteps - 1 && (
                  <div
                    className={`
                    w-12 h-0.5 mx-1 shrink-0
                    transition-all duration-200 ease-in-out
                    ${
                      stepIndex + 1 < currentStep
                        ? "bg-zinc-900 dark:bg-white"
                        : "bg-zinc-200 dark:bg-zinc-800"
                    }
                  `}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Radio;