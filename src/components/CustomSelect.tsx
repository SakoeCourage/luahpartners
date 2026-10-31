"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Image from "next/image";

type SelectOption = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  ariaLabelledBy: string;
  defaultValue: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
};

export function CustomSelect({
  ariaLabelledBy,
  defaultValue,
  name,
  options,
  required = false,
}: CustomSelectProps) {
  const initialIndex = Math.max(
    0,
    options.findIndex((option) => option.value === defaultValue),
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxId = useId();

  const selectedOption = options[selectedIndex];

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, []);

  function openList() {
    setActiveIndex(selectedIndex);
    setIsOpen(true);
  }

  function chooseOption(index: number) {
    setSelectedIndex(index);
    setActiveIndex(index);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen) {
        chooseOption(activeIndex);
      } else {
        openList();
      }
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = isOpen
        ? (activeIndex + direction + options.length) % options.length
        : (selectedIndex + direction + options.length) % options.length;
      setActiveIndex(nextIndex);
      setIsOpen(true);
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setActiveIndex(event.key === "Home" ? 0 : options.length - 1);
      setIsOpen(true);
    }
  }

  return (
    <div ref={containerRef} className="relative mt-[10px]">
      <input type="hidden" name={name} value={selectedOption.value} required={required} />
      <button
        ref={triggerRef}
        type="button"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={ariaLabelledBy}
        onClick={() => (isOpen ? setIsOpen(false) : openList())}
        onKeyDown={handleKeyDown}
        className={`flex min-h-[52px] w-full items-center justify-between border bg-white px-4 text-left text-sm font-normal text-brand-navy outline-none focus:border-brand-gold ${
          isOpen ? "border-brand-gold" : "border-brand-sand"
        }`}
      >
        <span>{selectedOption.label}</span>
        <Image
          aria-hidden="true"
          alt=""
          src="/images/listing-chevron-down.svg"
          width={18}
          height={18}
          className={`ml-4 size-[18px] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={ariaLabelledBy}
          className="absolute z-20 mt-0 max-h-[260px] w-full overflow-auto border border-brand-sand bg-white py-2"
        >
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            const isActive = index === activeIndex;

            return (
              <li key={option.value} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => chooseOption(index)}
                  className={`block w-full px-6 py-2.5 text-left text-sm text-brand-navy outline-none ${
                    isSelected
                      ? "bg-[#dedfe1]"
                      : isActive
                        ? "bg-brand-surface"
                        : "bg-white hover:bg-brand-surface focus:bg-brand-surface"
                  }`}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
