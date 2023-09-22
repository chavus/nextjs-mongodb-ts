'use client'
import { type ComponentProps } from "react"

interface ExtendedButtonProps extends ComponentProps<'button'>{
  children:React.ReactNode
  color?:string
  pill?:boolean
  outline?:boolean
  className?:string
  size?:string
}

// export default function Button({children,className='', color='primary', pill, outline, size='md', type='button', ...otherProps}:{children:React.ReactNode,color?:string, pill?:boolean, outline?:boolean, className?:string, size?:string, type?:'button' | 'submit'}) {
export default function Button({children,className='', color='primary', pill, outline, size='md', type='button', ...otherProps}:ExtendedButtonProps) {
  const COLOR_VARIANTS:{[key:string]:string} = {
    primary: 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-80',
    primaryOutline: 'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800',
    danger: 'text-white bg-danger-700 hover:bg-danger-800 focus:ring-danger-300 dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-80',
    dangerOutline: 'text-danger-700 hover:text-white border border-danger-700 hover:bg-danger-800 focus:ring-danger-300 dark:border-danger-500 dark:text-danger-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800',
  }

  const SIZE_VARIANTS:{[key:string]:string} = {
    xs: 'px-3 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm'
  }
  
  // console.log(props)

  return <button className={
                  `
                  ${className}
                  ${COLOR_VARIANTS[outline ? color + 'Outline' : color]} 
                  ${SIZE_VARIANTS[size]}  
                  ${pill ? 'rounded-full' : 'rounded-lg'} 
                  ${otherProps.disabled && 'cursor-not-allowed'}
                  focus:ring-4 font-medium focus:outline-none flex items-center justify-center
                  ` 
                }
                {...otherProps}
                  >{children}
                  
          </button>

    

  

}

