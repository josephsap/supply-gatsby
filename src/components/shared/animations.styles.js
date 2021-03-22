import { keyframes } from '@emotion/react'

export const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const floatRight = keyframes`
    0% {
        transform:translate(1px, -1px);
    }

    25% {
        transform:translate(1px, 1px);
    }

    50% {
        transform:translate(-1px, 1px);
    }

    75% {
        transform:translate(-1px, -1px);
    }

    100% {
        transform:translate(1px, -1px);
    }
`

export const floatLeft = keyframes`
    0% {
        transform:translate(-1px, -1px);
    }

    25% {
        transform:translate(-1px, 1px);
    }

    50% {
        transform:translate(1px, 1px);
    }

    75% {
        transform:translate(1px, -1px);
    }

    100% {
        transform:translate(-1px, -1px);
    }
`

export const scaleRotate = keyframes`
    0% {
        transform:scale(1);
    }

    50% {
        transform:scale(.99);
    }

    100% {
        transform:scale(1);
    }
`

export const rotate1 = keyframes`
    0% {
        transform: rotate(-6deg);
    }

    33% {
        transform: rotate(-5deg);
    }
    
    66% {
        transform: rotate(-7deg);
    }

    100% {
        transform: rotate(-6deg);
    }
`

export const rotate2 = keyframes`
    0% {
        transform: rotate(7deg);
    }

    33% {
        transform: rotate(6deg);
    }
    
    66% {
        transform: rotate(5deg);
    }

    100% {
        transform: rotate(7deg);
    }
`

export const rotate3 = keyframes`
    0% {
        transform: rotate(5deg);
    }

    33% {
        transform: rotate(6deg);
    }
    
    66% {
        transform: rotate(4deg);
    }

    100% {
        transform: rotate(5deg);
    }
`
