import Image from 'next/image'
import om from "@/assets/om.png"

function Logo() {
  return (
    <div>
        <Image src={om} width={72} height={72} quality={5000} alt='om'/>
    </div>
  )
}

export default Logo