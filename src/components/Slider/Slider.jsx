import * as SliderPrimitive from '@radix-ui/react-slider';

export const Slider = ({
  value,
  max,
  min = 0,
  onValueChange,
}) => {
  return (
    <div className='w-full px-2.5'>
      <SliderPrimitive.Root className="my-4 relative flex h-1 w-full items-center" value={[value]} max={max} step={1} min={min} onValueChange={onValueChange}>
        <SliderPrimitive.Track className="w-full bg-white relative rounded-[999px] grow-1 h-[3px]">
          <SliderPrimitive.Range className="absolute bg-green rounded-[999px] h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-[28px] w-[28px] bg-white rounded-[999px]" aria-label="Volume" />
      </SliderPrimitive.Root>
    </div>
  )
};
