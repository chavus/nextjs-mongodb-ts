'use client';
import {type ButtonProps, Button as FlowbiteReactButton, CustomFlowbiteTheme, Flowbite} from 'flowbite-react';
import type { ReactNode } from 'react';

interface ExtendedButtonProps extends ButtonProps{
    color?: string;
    children?: ReactNode
}

const customTheme: CustomFlowbiteTheme = {
    button :{
        color: {
            primary: "text-white bg-primary-700 border border-transparent enabled:hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:enabled:hover:bg-primary-700 dark:focus:ring-primary-800",
            danger: "text-white bg-danger-700 border border-transparent enabled:hover:bg-danger-800 focus:ring-4 focus:ring-danger-300 dark:bg-danger-600 dark:enabled:hover:bg-danger-700 dark:focus:ring-danger-800"
        }
    }
}

export default function Button({color='primary', children, ...otherProps}: ExtendedButtonProps){
    return(
        <Flowbite theme={{theme:customTheme}}>
            <FlowbiteReactButton color={color} {...otherProps}>{children}</FlowbiteReactButton>
        </Flowbite>
    ) 
}