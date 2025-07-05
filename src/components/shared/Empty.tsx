import EmptyImage from "@/assets/images/empty.png";
import Image from "@/components/ui/Image";

type Props = {
  text?: string;
};

export default function Empty({ text }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="flex items-center justify-center rounded-full">
        <Image src={EmptyImage} alt="Empty" className="h-20 w-20 object-contain" />
      </div>
      <p className="text-caption text-text-secondary">{text ?? "검색된 결과가 없습니다."}</p>
    </div>
  );
}
