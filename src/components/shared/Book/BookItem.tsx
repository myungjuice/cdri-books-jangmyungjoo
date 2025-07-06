import { type MouseEvent } from "react";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionArrowIcon,
} from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Image from "@/components/ui/Image";
import { cn } from "@/libs/utils";
import type { Document } from "@/types/books";

type Props = {
  book: Document;
  idx: number;
  openAccordionValue: string;
  onAccordionValueChange: (value: string) => void;
};

function BookTitleAuthors({ title, authors }: { title: string; authors: string[] }) {
  return (
    <div className="flex min-w-0 items-baseline gap-2">
      <span className="text-title-3 text-text-primary block min-w-0 truncate">{title}</span>
      <span className="text-caption-medium text-text-sub-title whitespace-nowrap">
        {authors.join(", ")}
      </span>
    </div>
  );
}

function BookPrice({ price, sale_price }: { price: number; sale_price: number }) {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center gap-2">
        <span className="text-small text-text-sub-title pt-1">
          {sale_price > -1 ? "원가" : "판매가"}
        </span>
        <span
          className={cn(
            "text-text-primary text-title-3",
            sale_price > -1 && "font-[350] line-through",
          )}
        >
          {price.toLocaleString()}원
        </span>
      </div>
      {sale_price > -1 && (
        <div className="flex items-center gap-2">
          <span className="text-small text-text-sub-title pt-1">할인가</span>
          <span className="text-title-3 text-text-primary">{sale_price.toLocaleString()}원</span>
        </div>
      )}
    </div>
  );
}

export default function BookItem({ book, idx, openAccordionValue, onAccordionValueChange }: Props) {
  function handleBuyClick(e: MouseEvent<HTMLButtonElement>, url: string) {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <AccordionItem value={`book-${idx}`} className="border-b last:border-b-0">
      <AccordionTrigger
        className={cn(openAccordionValue === `book-${idx}` && "hidden")}
        trigger={
          <div className="flex w-full max-w-[960px] items-center gap-4 px-8 py-1">
            <figure className="h-[68px] w-12 flex-shrink-0">
              <Image src={book.thumbnail} alt={book.title} />
            </figure>
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <BookTitleAuthors title={book.title} authors={book.authors} />
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <span className="text-text-primary text-title-3 mr-4">
                {book.price.toLocaleString()}원
              </span>
              <Button onClick={(e) => handleBuyClick(e, book.url)}>구매하기</Button>
              <Button variant="secondary">
                상세보기
                <AccordionArrowIcon />
              </Button>
            </div>
          </div>
        }
      />
      <AccordionContent>
        <div className="flex justify-between gap-6 px-10 py-4 pb-6">
          <div className="flex gap-6">
            <figure className="min-h-[280px] min-w-[210px]">
              <Image src={book.thumbnail} alt={book.title} />
            </figure>
            <div className="flex max-h-[304.5px] max-w-[382px] flex-col gap-4 pt-6">
              <BookTitleAuthors title={book.title} authors={book.authors} />
              <p className="text-body-2-bold text-text-primary">책 소개</p>
              <pre className="text-small-2 overflow-hidden whitespace-pre-wrap">
                {book.contents
                  .replaceAll(".   ", ".\n\n")
                  .replaceAll(".  ", ".\n\n")
                  .replaceAll(". ", ".\n\n")}
                ...
              </pre>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <Button variant="secondary" onClick={() => onAccordionValueChange("-1")}>
              상세보기
              <div className="rotate-180 pb-1.5">
                <AccordionArrowIcon />
              </div>
            </Button>
            <div className="flex flex-col items-end justify-between gap-8">
              <BookPrice price={book.price} sale_price={book.sale_price} />
              <Button onClick={(e) => handleBuyClick(e, book.url)} size="lg">
                구매하기
              </Button>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
