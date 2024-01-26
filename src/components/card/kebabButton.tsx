'use client';

import { MouseEvent } from 'react';
import Image from 'next/image';
import KebabImage from '../../../public/assets/images/KebabImage.png';

function KebabButton() {
  const handleKebabClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('kebab button clicked!');
  };

  return (
    <button onClick={(e) => handleKebabClick(e)}>
      <Image src={KebabImage} alt="케밥버튼 이미지" width={2} height={12} />
    </button>
  );
}

export default KebabButton;
