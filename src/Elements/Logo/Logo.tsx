import React, { ReactElement } from 'react';

export enum LogoColor {
  LIGHT, DARK
}

export enum LogoType {
  LOGO_ONLY,
  TITLE_BOTTOM,
  TITLE_RIGHT,
}

interface Props {
  fill?: string;
  size?: number;
  title?: string;
  type?: LogoType;
  color?: LogoColor;
}

export default function Logo({ 
  fill, 
  size=32,
  title="Fitness Pro",
  type = LogoType.LOGO_ONLY,
  color = LogoColor.LIGHT,
}: Props): ReactElement {
  return (
    <div className={`inline-flex justify-center items-center ${type === LogoType.TITLE_BOTTOM ? 'flex-col' : 'flex-row'} ${color === LogoColor.LIGHT ? 'bg-bg-light' : 'bg-bg-dark'}`}>
      <svg className={`inline-block fill-current ${color === LogoColor.LIGHT ? 'text-gray-800' : 'text-gray-100'}`} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM24.1333 17.3333C24.4 19.7333 25.3333 22 26.6667 24C26.1333 24.6667 25.4667 25.3333 24.8 26C22.8 23.4667 21.6 20.5333 21.3333 17.3333H17.3333V29.2C16.9333 29.2 16.4 29.3333 16 29.3333C15.6 29.3333 15.0667 29.3333 14.6667 29.2V17.3333H10.6667C10.4 20.5333 9.2 23.4667 7.2 26C6.53333 25.3333 5.86667 24.6667 5.33333 24C6.8 22 7.73333 19.7333 7.86667 17.3333H2.8C2.66667 16.9333 2.66667 16.4 2.66667 16C2.66667 15.6 2.66667 15.0667 2.8 14.6667H8C7.73333 12.2667 6.8 10 5.33333 8C5.86667 7.33333 6.53333 6.66667 7.2 6C9.2 8.53333 10.4 11.4667 10.6667 14.6667H14.6667V2.8C15.0667 2.66667 15.6 2.66667 16 2.66667C16.4 2.66667 16.9333 2.66667 17.3333 2.8V14.6667H21.3333C21.6 11.4667 22.8 8.53333 24.8 6C25.4667 6.66667 26.1333 7.33333 26.6667 8C25.2 10 24.2667 12.2667 24.1333 14.6667H29.3333C29.3333 15.0667 29.4667 15.6 29.4667 16C29.4667 16.4 29.4667 16.9333 29.3333 17.3333H24.1333Z" />
      </svg>
      {
        (type !== LogoType.LOGO_ONLY) && (
          <p className={`text-body-2 ${type === LogoType.TITLE_BOTTOM ? 'mt-2' : 'ml-2'} ${color === LogoColor.LIGHT ? 'text-gray-800' : 'text-gray-100'}`}>{title}</p>
        )
      }
    </div>
  )
}
