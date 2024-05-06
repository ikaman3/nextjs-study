import Image from 'next/image'

export default function EmotionImgById({ emotionId }) {
  return (
    <div>
      <Image
        src={`/images/emotions/emotion${emotionId}.png`}
        alt={`감정${emotionId}`}
        width={50}
        height={50}
      />
    </div>
  )
}
