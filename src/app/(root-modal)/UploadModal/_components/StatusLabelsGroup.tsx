'use client';

import { Button } from '@/components/Button';
import '@/styles/tailwind.css';
import { Dispatch, SetStateAction, useState } from 'react';

enum ButtonCategoryText {
  'POST' = '게시용',
  'SALE' = '판매용',
  'SHARE' = '나눔용',
}

interface Props {
  setValue: Dispatch<SetStateAction<'PUBLIC' | 'SELLING' | 'FREE'>>;
}

function StatusLabelsGroup({ setValue }: Props) {
  const [content, setContent] = useState('');
  const labelTexts: ButtonCategoryText[] = [
    ButtonCategoryText.POST, // 게시용
    ButtonCategoryText.SALE, // 판매용
    ButtonCategoryText.SHARE, // 나눔용
  ];

  const handleActive = (buttonLabel: string) => {
    setContent(buttonLabel);
  };

  return (
    <div className="flex flex-col gap-16 align-middle">
      {labelTexts.map((labelText, idx) => (
        <Button.Category
          key={idx}
          labelText={labelText}
          type="Label"
          onClick={handleActive}
          setValue={setValue}
          isActive={content ? content === labelText : labelText === '게시용'}
        />
      ))}
    </div>
  );
}

export default StatusLabelsGroup;
