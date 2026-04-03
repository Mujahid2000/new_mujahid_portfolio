declare module '@studio-freight/lenis' {
  interface LenisOptions {
    duration?: number
    easing?: (t: number) => number
    smooth?: boolean
    direction?: 'vertical' | 'horizontal'
    gestureDirection?: 'vertical' | 'horizontal'
    mouseMultiplier?: number
    smoothTouch?: boolean
    touchMultiplier?: number
    infinite?: boolean
  }

  class Lenis {
    constructor(options?: LenisOptions)
    raf(time?: number): void
    destroy(): void
  }

  export default Lenis
}
