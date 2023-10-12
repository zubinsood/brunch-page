import React from 'react';

interface SwitchProps {
    isToggled: boolean;
    onToggle: () => void;
}

function SunIconActive() {
    return (
        <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" x="41" y="10" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.98242 3.18359C7.57227 3.18359 7.23047 2.8418 7.23047 2.43164V1.04395C7.23047 0.640625 7.57227 0.291992 7.98242 0.291992C8.39258 0.291992 8.73438 0.640625 8.73438 1.04395V2.43164C8.73438 2.8418 8.39258 3.18359 7.98242 3.18359ZM11.4346 4.63281C11.1475 4.33887 11.1406 3.85352 11.4277 3.57324L12.4121 2.58203C12.6992 2.29492 13.1846 2.29492 13.4717 2.5752C13.7588 2.8623 13.7588 3.35449 13.4785 3.6416L12.4941 4.62598C12.2002 4.91309 11.7217 4.91309 11.4346 4.63281ZM4.53027 4.63281C4.24316 4.91309 3.75781 4.91309 3.4707 4.62598L2.48633 3.63477C2.21289 3.35449 2.21289 2.8623 2.5 2.5752C2.78711 2.29492 3.2793 2.30176 3.55957 2.58203L4.54395 3.57324C4.81738 3.85352 4.81738 4.3457 4.53027 4.63281ZM7.98242 11.7354C5.97266 11.7354 4.31152 10.0742 4.31152 8.06445C4.31152 6.04785 5.97266 4.38672 7.98242 4.38672C9.99219 4.38672 11.6533 6.04785 11.6533 8.06445C11.6533 10.0742 9.99219 11.7354 7.98242 11.7354ZM7.98242 10.2998C9.19922 10.2998 10.2178 9.28125 10.2178 8.06445C10.2178 6.84082 9.19922 5.8291 7.98242 5.8291C6.75879 5.8291 5.74707 6.84082 5.74707 8.06445C5.74707 9.28125 6.75879 10.2998 7.98242 10.2998ZM12.8633 8.06445C12.8633 7.6543 13.2051 7.3125 13.6152 7.3125H14.9961C15.3994 7.3125 15.748 7.6543 15.748 8.06445C15.748 8.47461 15.3994 8.81641 14.9961 8.81641H13.6152C13.2051 8.81641 12.8633 8.47461 12.8633 8.06445ZM3.1084 8.06445C3.1084 8.47461 2.75977 8.81641 2.35645 8.81641H0.975586C0.56543 8.81641 0.223633 8.47461 0.223633 8.06445C0.223633 7.6543 0.56543 7.3125 0.975586 7.3125H2.35645C2.75977 7.3125 3.1084 7.6543 3.1084 8.06445ZM11.4277 11.5098C11.7148 11.2227 12.2002 11.2227 12.4873 11.5029L13.4785 12.4873C13.7656 12.7744 13.7656 13.2598 13.4854 13.54C13.1914 13.8271 12.7061 13.8408 12.4258 13.5537L11.4346 12.5693C11.1475 12.2754 11.1406 11.7969 11.4277 11.5098ZM4.54395 11.5098C4.81738 11.7969 4.81738 12.2754 4.53027 12.5693L3.5459 13.5469C3.25879 13.834 2.7666 13.8271 2.47949 13.54C2.19922 13.2529 2.20605 12.7676 2.49316 12.4805L3.47754 11.5029C3.75781 11.2227 4.25 11.2227 4.54395 11.5098ZM7.98242 12.9453C8.39258 12.9453 8.73438 13.2871 8.73438 13.6973V15.0781C8.73438 15.4883 8.39258 15.8301 7.98242 15.8301C7.57227 15.8301 7.23047 15.4883 7.23047 15.0781V13.6973C7.23047 13.2871 7.57227 12.9453 7.98242 12.9453Z" fill="url(#paint0_linear_1115_410)" />
            <defs>
                <linearGradient id="paint0_linear_1115_410" x1="-2.5" y1="9" x2="18.5" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA5377" />
                    <stop offset="1" stop-color="#EFD0D2" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function SunIconInactive() {
    return (
        <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" x="41" y="10" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.98242 3.18359C7.57227 3.18359 7.23047 2.8418 7.23047 2.43164V1.04395C7.23047 0.640625 7.57227 0.291992 7.98242 0.291992C8.39258 0.291992 8.73438 0.640625 8.73438 1.04395V2.43164C8.73438 2.8418 8.39258 3.18359 7.98242 3.18359ZM11.4346 4.63281C11.1475 4.33887 11.1406 3.85352 11.4277 3.57324L12.4121 2.58203C12.6992 2.29492 13.1846 2.29492 13.4717 2.5752C13.7588 2.8623 13.7588 3.35449 13.4785 3.6416L12.4941 4.62598C12.2002 4.91309 11.7217 4.91309 11.4346 4.63281ZM4.53027 4.63281C4.24316 4.91309 3.75781 4.91309 3.4707 4.62598L2.48633 3.63477C2.21289 3.35449 2.21289 2.8623 2.5 2.5752C2.78711 2.29492 3.2793 2.30176 3.55957 2.58203L4.54395 3.57324C4.81738 3.85352 4.81738 4.3457 4.53027 4.63281ZM7.98242 11.7354C5.97266 11.7354 4.31152 10.0742 4.31152 8.06445C4.31152 6.04785 5.97266 4.38672 7.98242 4.38672C9.99219 4.38672 11.6533 6.04785 11.6533 8.06445C11.6533 10.0742 9.99219 11.7354 7.98242 11.7354ZM7.98242 10.2998C9.19922 10.2998 10.2178 9.28125 10.2178 8.06445C10.2178 6.84082 9.19922 5.8291 7.98242 5.8291C6.75879 5.8291 5.74707 6.84082 5.74707 8.06445C5.74707 9.28125 6.75879 10.2998 7.98242 10.2998ZM12.8633 8.06445C12.8633 7.6543 13.2051 7.3125 13.6152 7.3125H14.9961C15.3994 7.3125 15.748 7.6543 15.748 8.06445C15.748 8.47461 15.3994 8.81641 14.9961 8.81641H13.6152C13.2051 8.81641 12.8633 8.47461 12.8633 8.06445ZM3.1084 8.06445C3.1084 8.47461 2.75977 8.81641 2.35645 8.81641H0.975586C0.56543 8.81641 0.223633 8.47461 0.223633 8.06445C0.223633 7.6543 0.56543 7.3125 0.975586 7.3125H2.35645C2.75977 7.3125 3.1084 7.6543 3.1084 8.06445ZM11.4277 11.5098C11.7148 11.2227 12.2002 11.2227 12.4873 11.5029L13.4785 12.4873C13.7656 12.7744 13.7656 13.2598 13.4854 13.54C13.1914 13.8271 12.7061 13.8408 12.4258 13.5537L11.4346 12.5693C11.1475 12.2754 11.1406 11.7969 11.4277 11.5098ZM4.54395 11.5098C4.81738 11.7969 4.81738 12.2754 4.53027 12.5693L3.5459 13.5469C3.25879 13.834 2.7666 13.8271 2.47949 13.54C2.19922 13.2529 2.20605 12.7676 2.49316 12.4805L3.47754 11.5029C3.75781 11.2227 4.25 11.2227 4.54395 11.5098ZM7.98242 12.9453C8.39258 12.9453 8.73438 13.2871 8.73438 13.6973V15.0781C8.73438 15.4883 8.39258 15.8301 7.98242 15.8301C7.57227 15.8301 7.23047 15.4883 7.23047 15.0781V13.6973C7.23047 13.2871 7.57227 12.9453 7.98242 12.9453Z" fill="#1E7200" />
        </svg>
    )
}

function MoonIconActive() {
    return (
        <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" x="13" y="10" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M10.915 9.14941C11.6807 9.14941 12.4668 9.0127 12.9727 8.80078C13.1982 8.69824 13.3555 8.6709 13.5195 8.6709C13.8408 8.6709 14.1211 8.91016 14.1211 9.29297C14.1211 9.42285 14.0869 9.62109 13.9844 9.85352C12.8564 12.4375 10.3887 14.0371 7.42871 14.0371C3.25879 14.0371 0.223633 10.9951 0.223633 6.8252C0.223633 3.92676 2.00781 1.24707 4.60547 0.194336C4.83105 0.105469 5.00879 0.0712891 5.11133 0.0712891C5.50781 0.0712891 5.76758 0.392578 5.76758 0.720703C5.76758 0.905273 5.72656 1.06934 5.60352 1.30859C5.35059 1.78711 5.19336 2.66211 5.19336 3.61914C5.19336 7.03711 7.3877 9.14941 10.915 9.14941ZM1.7207 6.79102C1.7207 10.1133 4.14746 12.54 7.46289 12.54C9.30859 12.54 11.0312 11.7129 11.9951 10.3115C11.585 10.4551 11.1475 10.5098 10.6416 10.5098C6.38281 10.5098 3.80566 7.9873 3.80566 3.82422C3.80566 3.22266 3.89453 2.67578 4.05176 2.17676C2.60254 3.21582 1.7207 4.98633 1.7207 6.79102Z" fill="url(#paint0_linear_1115_408)" />
            <defs>
                <linearGradient id="paint0_linear_1115_408" x1="-2" y1="8" x2="12.5" y2="8" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0206453" stop-color="#134600" />
                    <stop offset="1" stop-color="#99E37C" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function MoonIconInactive() {
    return (
        <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" x="10" y="10" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M10.915 9.14941C11.6807 9.14941 12.4668 9.0127 12.9727 8.80078C13.1982 8.69824 13.3555 8.6709 13.5195 8.6709C13.8408 8.6709 14.1211 8.91016 14.1211 9.29297C14.1211 9.42285 14.0869 9.62109 13.9844 9.85352C12.8564 12.4375 10.3887 14.0371 7.42871 14.0371C3.25879 14.0371 0.223633 10.9951 0.223633 6.8252C0.223633 3.92676 2.00781 1.24707 4.60547 0.194336C4.83105 0.105469 5.00879 0.0712891 5.11133 0.0712891C5.50781 0.0712891 5.76758 0.392578 5.76758 0.720703C5.76758 0.905273 5.72656 1.06934 5.60352 1.30859C5.35059 1.78711 5.19336 2.66211 5.19336 3.61914C5.19336 7.03711 7.3877 9.14941 10.915 9.14941ZM1.7207 6.79102C1.7207 10.1133 4.14746 12.54 7.46289 12.54C9.30859 12.54 11.0312 11.7129 11.9951 10.3115C11.585 10.4551 11.1475 10.5098 10.6416 10.5098C6.38281 10.5098 3.80566 7.9873 3.80566 3.82422C3.80566 3.22266 3.89453 2.67578 4.05176 2.17676C2.60254 3.21582 1.7207 4.98633 1.7207 6.79102Z" fill="#E84F74" />
        </svg>
    )
}

function LightMode() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="42" viewBox="0 0 70 42" fill="none">
            <rect y="3" width="64" height="30" rx="15" fill="url(#paint0_linear_1073_224)" />
            <MoonIconInactive />
            <g filter="url(#filter0_ddd_1073_224)">
                <rect x="36" y="5" width="26" height="26" rx="13" fill="white" />
                <SunIconActive />
            </g>
            <defs>
                <filter id="filter0_ddd_1073_224" x="28" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1073_224" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1073_224" result="effect2_dropShadow_1073_224" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_1073_224" result="effect3_dropShadow_1073_224" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1073_224" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1073_224" x1="-2" y1="20.5" x2="64" y2="20.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EED6D6" />
                    <stop offset="1" stop-color="#EF5177" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function DarkMode() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="42" viewBox="0 0 70 42" fill="none">
            <rect x="6" y="3" width="64" height="30" rx="15" fill="url(#paint0_linear_1073_386)" />
            <SunIconInactive />
            <g filter="url(#filter0_ddd_1073_386)">
                <rect x="8" y="5" width="26" height="26" rx="13" fill="white" />
                <MoonIconActive />
            </g>
            <defs>
                <filter id="filter0_ddd_1073_386" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1073_386" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1073_386" result="effect2_dropShadow_1073_386" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_1073_386" result="effect3_dropShadow_1073_386" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1073_386" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1073_386" x1="4" y1="19" x2="72" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#004407" />
                    <stop offset="1" stop-color="#CFECC4" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const Switch: React.FC<SwitchProps> = ({ isToggled, onToggle }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <div className="slider">
                {/* {isToggled ? <DarkMode /> : <LightMode />} */}
                <LightMode />
                <DarkMode />
            </div>
        </label>
    );
}

export default Switch;
