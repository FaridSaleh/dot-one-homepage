import Image from 'next/image'
import {
  ArrowDown2LinearIcon,
  ArrowLeftBulkIcon,
  Image6,
  Image7,
  Image8,
  OneGroupLogo,
  PolygonIcon,
} from '@assets'
import CompaniesProps from './type'

const Companies = ({ title }: CompaniesProps) => {
  return (
    <>
      <div className='mb-2.5'>
        <OneGroupLogo className='w-[42px] h-[5.64px] -mb-1' />
        <div className='flex items-center'>
          <div className='w-[140px] border-b border-[#939393]'></div>
          <div className='w-1 h-1 bg-[#939393] rotate-45'></div>
          <p className='font-light text-[16px] text-[#939393] mr-2.5'>معرفی شرکت ها</p>
        </div>
      </div>
      <div className='flex items-center justify-between mb-[24px]'>
        <p className='font-regular text-[28px]'>{title}</p>
        <ArrowLeftBulkIcon className='w-[30px] h-[25.26px] text-[#141414]' />
      </div>
      <div className='grid grid-cols-3 gap-6 mb-[80px]'>
        <div className='group relative flex flex-col items-center bg-[#fff] p-[24px] pb-[40px] rounded-[24px] mb-[24px] cursor-pointer'>
          <Image src={Image6} alt='Image6' width={130} height={130} />
          <p className='text-[#000] text-[14px] font-regular text-justify'>
            دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و
            آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.
          </p>
          <div className='absolute -bottom-[44px] left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <PolygonIcon className='w-[102px] h-[88px]' />
            <p className='absolute bottom-6 text-[#000] text-[12px] font-light'>درباره شرکت</p>
            <ArrowDown2LinearIcon className='absolute bottom-1 w-[20px] h-[20px] text-[#000]' />
          </div>
        </div>

        <div className='group relative flex flex-col items-center bg-[#fff] p-[24px] pb-[40px] rounded-[24px] mb-[24px] cursor-pointer'>
          <Image src={Image7} alt='Image7' width={130} height={130} />
          <p className='text-[#000] text-[14px] font-regular text-justify'>
            دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و
            آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.
          </p>
          <div className='absolute -bottom-[44px] left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <PolygonIcon className='w-[102px] h-[88px]' />
            <p className='absolute bottom-6 text-[#000] text-[12px] font-light'>درباره شرکت</p>
            <ArrowDown2LinearIcon className='absolute bottom-1 w-[20px] h-[20px] text-[#000]' />
          </div>
        </div>

        <div className='group relative flex flex-col items-center bg-[#fff] p-[24px] pb-[40px] rounded-[24px] mb-[24px] cursor-pointer'>
          <Image src={Image8} alt='Image8' width={130} height={130} />
          <p className='text-[#000] text-[14px] font-regular text-justify'>
            دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و
            آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.
          </p>
          <div className='absolute -bottom-[44px] left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <PolygonIcon className='w-[102px] h-[88px]' />
            <p className='absolute bottom-6 text-[#000] text-[12px] font-light'>درباره شرکت</p>
            <ArrowDown2LinearIcon className='absolute bottom-1 w-[20px] h-[20px] text-[#000]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Companies
