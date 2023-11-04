'use client'
import { Modal} from "flowbite-react";
import Button from '@/components/elements/Button'
import ButtonCustom from "./elements/ButtonCustom";
import { Dispatch, SetStateAction, useState } from "react";

type ButtonType = 'success' | 'warning' | 'info'

export default function ConfirmationModal({openConfirmationModal,setOpenConfirmationModal, type='success', header, message, buttonLabel='Ok', onButtonClick, onCloseClick,secondaryButtonLabel='Cancel',onSecondaryButtonClick, ...otherProps}:
                                         {openConfirmationModal:boolean,
                                          setOpenConfirmationModal:Dispatch<SetStateAction<boolean>>,
                                          type?:ButtonType 
                                          header?:string,    
                                          message?:string,
                                          buttonLabel?:string,
                                          onCloseClick?:()=>void,
                                          onButtonClick?:()=>void
                                          onSecondaryButtonClick?:()=>void,
                                          secondaryButtonLabel?:string
                                      } 
                                     ){


    function onClick(){
        setOpenConfirmationModal(false) // Need to do state lift up to close modal and remove overflow:hidden from body
        onButtonClick && onButtonClick()
    }

    function onClose(){
        setOpenConfirmationModal(false) // Need to do state lift up to close modal and remove overflow:hidden from body
        onCloseClick && onCloseClick()
    }



    return (
        <Modal show={openConfirmationModal} size="md" popup onClose={onClose} {...otherProps}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
          {getIcon(type)}
            <h2 className="mb-5 text-lg font-bold text-gray-600 dark:text-green-300">
              {header}
            </h2>
            <h3 className="mb-5 text-lg font-medium  text-gray-600 dark:text-gray-300">
              {message}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color={getButtonColor(type)} onClick={onClick}>
                {buttonLabel}
              </Button>
              {
                onSecondaryButtonClick &&
                  <ButtonCustom outline color="gray" onClick={onSecondaryButtonClick}>
                      {secondaryButtonLabel}
                  </ButtonCustom>
              }

            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
}

function getIcon(type:ButtonType){
  switch(type){
    case 'success':
    default:
      return (
        <svg className="mx-auto mb-4 w-14 h-14 text-green-700 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        )    
    case 'warning':
      return(
        <svg className="mx-auto mb-4 w-14 h-14 text-warning-500 dark:text-warning-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>    
      )
    // default:
    //   return (
    //     <svg className="mx-auto mb-4 w-14 h-14 text-green-700 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    //       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    //     </svg>
    //     ) 
  }

}

function getButtonColor(type:ButtonType){
  switch(type){
    case 'success':
    default:
      return 'primary'
    case 'warning':
      return 'danger'
  }

}