// Button created mainly to be able to style outline buttons, vs Flowbite React
'use client'
import { createElement, type ComponentProps } from "react"

interface ExtendedButtonProps extends ComponentProps<'button'>{
  color?:string
  pill?:boolean
  outline?:boolean
  className?:string
  size?:string
  tag?:'button' | 'a',  // Refactor to 'as' to be same as FlowbiteReact Button
  href?:string
}

const COLOR_VARIANTS:{[key:string]:string} = {
  primary: 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-80',
  primaryOutline: 'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800',
  danger: 'text-white bg-danger-700 hover:bg-danger-800 focus:ring-danger-300 dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-80',
  dangerOutline: 'text-danger-700 hover:text-white border border-danger-700 hover:bg-danger-800 focus:ring-danger-300 dark:border-danger-500 dark:text-danger-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800',
  gray: 'text-white bg-gray-600 hover:bg-gray-400 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-80',
  grayOutline: 'text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:border-gray-500 dark:text-danger-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800',
}

const SIZE_VARIANTS:{[key:string]:string} = {
  xs: 'px-3 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm'
}


export default function ButtonCustom({children, type='button', className='', color='primary', pill, outline, size='md', tag='button', href='#', ...otherProps}:ExtendedButtonProps) {
  
  const props:ExtendedButtonProps = {className:
                    `
                    ${className}
                    ${COLOR_VARIANTS[outline ? color + 'Outline' : color]} 
                    ${SIZE_VARIANTS[size]}  
                    ${pill ? 'rounded-full' : 'rounded-lg'} 
                    ${otherProps.disabled && 'cursor-not-allowed'}
                    focus:ring-4 font-medium focus:outline-none flex items-center justify-center
                    ` 
                  ,
                  type,
                  ...otherProps}

  // Try to add disable functionality when tag= 'a'
  if (tag==='a' && !otherProps.disabled){
    props['href'] = href
  }
  
  return createElement(tag, props, children)
  
}

